import bgImg from "@/assets/banner/wireframe1.png"
import Container from "../Container/Container";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoCopy } from "react-icons/io5";
import { MdLibraryAddCheck } from "react-icons/md";
import { Button } from "@/components/ui/button";
import icon1 from '@/assets/banner/Group1.png'
import icon2 from '@/assets/banner/Group.png'
import icon3 from '@/assets/footer/Mask group.png';
import icon4 from '@/assets/footer/Group 8773.png';
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import Countdown from "react-countdown";
import { Buffer } from 'buffer';

import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  sendAndConfirmRawTransaction,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { CUSTOM_PROGRAM_ID, TOKEN_PUBKEY, TOKEN_SALE_PROGRAM_ACCOUNT_PUBKEY } from "@/config";
import BN from "bn.js";
import bs58 from "bs58";
import * as BufferLayout from "buffer-layout";

const Banner = () => {
  const wallet = useWallet();
  const { setVisible } = useWalletModal();
  const { connected, publicKey, disconnect } = useWallet();

  const [amount, setAmount] = useState(0)
  const [SOLAmount, setSOLAmount] = useState(0)
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phaseTime, setPhaseTime] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [phaseDelayTime, setPhaseDelayTime] = useState(0);
  const [pucharsedTokenAmount, setPucharsedTokenAmount] = useState(0);
  const [increaseTokenPrice, setIncreaseTokenPrice] = useState(0);


  const checkAccountInitialized = async (connection, customAccountPubkey) => {
    const customAccount = await connection.getAccountInfo(customAccountPubkey);

    if (customAccount === null || customAccount.data.length === 0) {
      console.log("Account of custom program has not been initialized properly");
    }

    return customAccount;
  };


  const createAccountInfo = (pubkey, isSigner, isWritable) => {
    return {
      pubkey: pubkey,
      isSigner: isSigner,
      isWritable: isWritable,
    };
  };

  const TokenSaleAccountLayout = BufferLayout.struct([
    BufferLayout.u8("isInitialized"),
    BufferLayout.blob(32, "sellerPubkey"),
    BufferLayout.blob(32, "tempTokenAccountPubkey"),
    BufferLayout.blob(8, "pricePerToken"),
    BufferLayout.blob(8, "maxTokenPrice"),
    BufferLayout.blob(8, "increaseTokenPrice"),
    BufferLayout.blob(8, "pucharsedTokenAmount"),
    BufferLayout.blob(8, "phaseStartTime"),
    BufferLayout.blob(8, "phaseDelayTime"),
  ]);



  const buy = async () => {

    if (Number(amount) <= 0) {
      toast.error('Wrong Snax amount.');
      return
    }

    toast.success('Buying...');

    setLoading(true)
    try {

      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

      const tokenSaleProgramId = new PublicKey(CUSTOM_PROGRAM_ID);

      const tokenPubkey = new PublicKey(TOKEN_PUBKEY);
      const tokenSaleProgramAccountPubkey = new PublicKey(TOKEN_SALE_PROGRAM_ACCOUNT_PUBKEY);
      const instruction = 1;

      const tokenSaleProgramAccount = await checkAccountInitialized(connection, tokenSaleProgramAccountPubkey);
      const encodedTokenSaleProgramAccountData = tokenSaleProgramAccount.data;
      const decodedTokenSaleProgramAccountData = TokenSaleAccountLayout.decode(
        encodedTokenSaleProgramAccountData
      )
      const tokenSaleProgramAccountData = {
        isInitialized: decodedTokenSaleProgramAccountData.isInitialized,
        sellerPubkey: new PublicKey(decodedTokenSaleProgramAccountData.sellerPubkey),
        tempTokenAccountPubkey: new PublicKey(decodedTokenSaleProgramAccountData.tempTokenAccountPubkey),
        swapSolAmount: decodedTokenSaleProgramAccountData.swapSolAmount,
        swapTokenAmount: decodedTokenSaleProgramAccountData.swapTokenAmount,
      };

      // const instructions = []
      const tx = new Transaction();
      const token = new Token(connection, tokenPubkey, TOKEN_PROGRAM_ID, wallet);
      let buyerTokenAccount;
      try {
        buyerTokenAccount = (await token.getOrCreateAssociatedAccountInfo(wallet.publicKey)).address;

      } catch (error) {
        const associatedAddress = (await PublicKey.findProgramAddress([publicKey.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), tokenPubkey.toBuffer()], ASSOCIATED_TOKEN_PROGRAM_ID))[0];
        buyerTokenAccount = associatedAddress;
        const createTokenAccountIx = Token.createAssociatedTokenAccountInstruction(ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, tokenPubkey, associatedAddress, wallet.publicKey, wallet.publicKey)
        tx.add(createTokenAccountIx)
      }
      const PDA = await PublicKey.findProgramAddress([Buffer.from("token_sale")], tokenSaleProgramId);

      const buyTokenIx = new TransactionInstruction({
        programId: tokenSaleProgramId,
        keys: [
          createAccountInfo(wallet.publicKey, true, true),
          createAccountInfo(tokenSaleProgramAccountData.sellerPubkey, false, true),
          createAccountInfo(tokenSaleProgramAccountData.tempTokenAccountPubkey, false, true),
          createAccountInfo(tokenSaleProgramAccountPubkey, false, true),
          createAccountInfo(SystemProgram.programId, false, false),
          createAccountInfo(buyerTokenAccount, false, true),
          createAccountInfo(TOKEN_PROGRAM_ID, false, false),
          createAccountInfo(PDA[0], false, false),
        ],
        data: Buffer.from(Uint8Array.of(instruction, ...new BN(amount).toArray("le", 8))),
      });


      const recentBlockhash = (await connection.getRecentBlockhash("max"))
        .blockhash;

      tx.add(buyTokenIx)
      tx.recentBlockhash = recentBlockhash;
      tx.feePayer = wallet.publicKey;

      const signedTx = await wallet.signTransaction(tx);

      const res = await sendAndConfirmRawTransaction(connection, signedTx.serialize());
      if (res) {
        toast.success(
          "You purchased successfully."
        )
      }
    } catch (error) {
      toast.error(
        "Token purchased was failed."
      )
    }
    setLoading(false)
    load()

  }

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('GsjKT72eDczHzNgEAzS4RHatEHYp5fUdh5E93shCZUEu').then(() => {
        toast.success('Copied!');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  function bytesToNumber(byteArray) {
    let result = 0;
    for (let i = byteArray.length - 1; i >= 0; i--) {
      result = (result * 256) + byteArray[i];
    }

    return result;
  }

  const load = async () => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const tokenSaleProgramAccountPubkey = new PublicKey(TOKEN_SALE_PROGRAM_ACCOUNT_PUBKEY);
    const tokenSaleProgramAccount = await checkAccountInitialized(
      connection,
      tokenSaleProgramAccountPubkey
    );
    const encodedTokenSaleProgramAccountData = tokenSaleProgramAccount.data;
    const decodedTokenSaleProgramAccountData = TokenSaleAccountLayout.decode(
      encodedTokenSaleProgramAccountData
    );
    setPhaseTime(bytesToNumber(decodedTokenSaleProgramAccountData.phaseStartTime) * 1000)
    setTokenPrice(bytesToNumber(decodedTokenSaleProgramAccountData.pricePerToken) / LAMPORTS_PER_SOL)
    setPhaseDelayTime(bytesToNumber(decodedTokenSaleProgramAccountData.phaseDelayTime) * 1000)
    setPucharsedTokenAmount(bytesToNumber(decodedTokenSaleProgramAccountData.pucharsedTokenAmount))
    setIncreaseTokenPrice(bytesToNumber(decodedTokenSaleProgramAccountData.increaseTokenPrice))
  }

  useEffect(() => {
    load()

    let interval = setInterval(() => {
      console.log("==refresh")
      load()
    }, 10000);

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="mt-[-80px] relative" id="home">
      <div>
        <img src={bgImg} alt="Image" className="h-[1200px] md:h-[1400px] lg:h-[1200px] xl:h-[1250px] 2xl:h-[1300px] w-full" />

        {/* Shadow blur */}
        <div className='w-full h-8 bg-[#194C47] absolute -bottom-[180px] md:-bottom-[150px] lg:-bottom-[140px] xl:-bottom-[158px] 2xl:-bottom-[140px] blur-[4px]' />

        <div className="mt-[-1100px] md:mt-[-1180px] lg:mt-[-950px] xl:mt-[-1050px] 2xl:mt-[-1100px]">

          <Container>
            <div>
              <div className='lg:flex justify-center items-center xl:gap-[70px] lg:gap-[30px]'>
                <div className='2xl:w-[48%] xl:w-[45%] lg:w-[45%]'>
                  <div className="text-center">
                    <p className="text-[#FFF4E7] font-gagalin text-[30px] md:text-[45px] xl:text-[60px] 2xl:text-[90px] xl:leading-[90px] lg:tracking-[2.7px]" data-aos="fade-up" data-aos-duration="900">Welcome to</p>

                    <h1 className="mt-[-15px] xl:mt-[-29px] 2xl:mt-[-5px] text-[70px] md:text-[90px] lg:text-[75px] xl:text-[110px] 2xl:text-[140px] xl:leading-[150px] lg:tracking-[3.8px]" data-aos="fade-up" data-aos-duration="1200"><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#22DDE2]">snax coin</span></h1>

                    <p className="mt-[5px] 2xl:mt-[25px] text-[#CED9D7] font-gagalin text-[17px] lg:text-[19px] xl:text-[20px] 2xl:text-[28px] xl:leading-[35px] 2xl:leading-[44.8px] lg:tracking-[1.12px]" data-aos="fade-up"
                      data-aos-duration="1600">the crypto sensation inspired by the tale of <br /> a savvy pup!"</p>
                  </div>
                </div>

                <div className='2xl:w-[52%] xl:w-[55%] lg:w-[55%] lg:mt-0 md:mt-[100px] mt-[70px]'>
                  <div className='flex justify-center'>
                    <div className="bg-gradient-to-l to-[#1cb4b2] from-[#c9af31] p-[1px] rounded-md md:text-[400px] w-[100%] md:w-[500px]" >

                      <div className="flex justify-center flex-col direction-column items-center text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[28px] bg-gradient-to-l to-[#278274] from-[#5d814d] p-[10px] xl:p-5 2xl:p-5 rounded-md"  >
                        <p className="text-[#fff] border-none lg:leading-[30.6px] lg:tracking-[0.72px] pt-5">Presale Open - Buy SNAX COIN</p>

                        <div className="pt-5 pb-2">
                          {
                            phaseTime && phaseDelayTime &&
                            <Countdown
                              date={phaseTime + phaseDelayTime}
                              renderer={({ days, hours, minutes, seconds, completed }) => {
                                if (completed) {
                                  return (
                                    <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px]">Presale End!</p>
                                  )
                                } else {
                                  <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px]">Presale End!</p>
                                  return (
                                    <div className="flex justify-center items-center gap-[20px]">
                                      <div className="flex justify-center items-center h-[45px] w-[50px] md:w-[75px] lg:w-[75px] border-[2px]  border-dashed border-[#E7D7CB] rounded-[5px] ">
                                        <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px]">{days}&nbsp;D</p>
                                      </div>
                                      <div className="flex justify-center items-center h-[45px] w-[50px] md:w-[75px] lg:w-[75px] border-[2px]  border-dashed border-[#E7D7CB] rounded-[5px] ">
                                        <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px]">{hours}&nbsp;H</p>
                                      </div>
                                      <div className="flex justify-center items-center h-[45px] w-[50px] md:w-[75px] lg:w-[75px] border-[2px]  border-dashed border-[#E7D7CB] rounded-[5px] ">
                                        <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px]">{minutes}&nbsp;M</p>
                                      </div>

                                      <div className="flex justify-center items-center h-[45px] w-[50px] md:w-[75px] lg:w-[75px] border-[2px]  border-dashed border-[#E7D7CB] rounded-[5px] ">
                                        <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px]">{seconds}&nbsp;S</p>
                                      </div>

                                    </div>
                                  )
                                }
                              }}
                            ></Countdown>
                          }

                        </div>

                        <p className="text-[#fff] border-none lg:leading-[30.6px] lg:tracking-[0.72px] text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[15px]">Until next phase</p>
                        <p className="text-[#fff] pt-3 border-none lg:leading-[30.6px] lg:tracking-[0.72px] text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[20px]">Total purchased Token = {pucharsedTokenAmount}</p>


                        <div className="w-[100%] pt-10">

                          <div className="flex justify-center items-center gap-[10px]">
                            <hr className="w-[100%] border-dashed" />
                            <p className="text-[#E7D7CB] border-none lg:leading-[30.6px] lg:tracking-[0.72px] text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[20px]">1&nbsp;SNAX&nbsp;=&nbsp;{tokenPrice}&nbsp;SOL</p>
                            <hr className="w-[100%] border-dashed" />
                          </div>

                          <div className="pt-5 flex justify-center items-center gap-3">
                            <div>
                              <p className="text-[#fff] border-none lg:leading-[30.6px] lg:tracking-[0.72px] text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[20px]">SOL Amount</p>
                              <input className="mt-3  rounded-[10px] h-[40px] px-3 w-[100%]" value={SOLAmount} onChange={(e) => { setSOLAmount(Number(e.target.value)); setAmount(Number(e.target.value) / tokenPrice) }} ></input>
                            </div>

                            <div>
                              <p className="text-[#fff] border-none lg:leading-[30.6px] lg:tracking-[0.72px] text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[20px]">SNAX Amount</p>
                              <input className="mt-3  rounded-[10px] h-[40px] px-3 w-[100%]" value={amount} onChange={(e) => { setAmount(Number(e.target.value)); setSOLAmount(Number(e.target.value) * tokenPrice) }} ></input>
                            </div>

                          </div>
                        </div>

                        <Button className="mt-10 w-[100%] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f8b415ec] hover:to-[#0fc1c7e8] text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px]" disabled={loading} onClick={() => { connected ? buy() : setVisible(true) }}>{connected ? loading ? "Buying..." : "Buy" : "Connect"}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Copied tokens */}
              <div className="mt-[200px] md:mt-[200px] lg:mt-[300px] xl:mt-[350px]  2xl:mt-[400px]">
                <div className='mt-[30px] flex justify-center flex-col items-center'>

                  <h5 className="text-[15px] md:text-[15px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] " data-aos="fade-up" data-aos-duration="1200"><span className="bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#22DDE2]">snax coin contract</span></h5>

                  <div className="bg-gradient-to-l to-[#1cb4b2] from-[#c9af31] p-[1px] mt-3 rounded-md" data-aos="fade-up"
                    data-aos-duration="2000">

                    <div className="flex justify-center items-center text-[15.5px] md:text-[18px] lg:text-[15px] xl:text-[18px] bg-gradient-to-l to-[#278274] from-[#5d814d] p-[6px] xl:p-2 2xl:p-3 rounded-md">
                      <p className="text-[#fff] mr-2 md:mr-5 lg:leading-[30.6px] lg:tracking-[0.72px]">GsjKT72eDczHzNgEAzS..HYp5fUdh5E93shCZUEu</p>
                      <button onClick={() => { setCopied(!copied); copyLink() }}>
                        {
                          copied ? <MdLibraryAddCheck className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px] cursor-pointer text-[#fff]" /> :
                            <IoCopy className="text-[15px] md:text-[20px] lg:text-[15px] xl:text-[20px] cursor-pointer text-[#fff]" />
                        }
                      </button>
                    </div>
                  </div>
                </div>

                {/* <Button className="mt-5 md:mt-[40px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] hover:from-[#f8b415ec] hover:to-[#0fc1c7e8] text-[#000] text-[20px] font-normal leading-[30px] tracking-[0.8px] py-4 xl:px-[35px] 2xl:px-[50px] mb-10 lg:mb-0 rounded-[10px] duration-300 w-full md:w-fit mx-auto md:absolute md:left-[41%] lg:left-[43%] xl:left-[44.3%] 2xl:" data-aos="fade-up" data-aos-duration="2200" onClick={() => { connected ? disconnect() : setVisible(true) }}>{connected ? `${publicKey?.toString().substring(0, 6)}...${publicKey?.toString().substring(publicKey?.toString().length - 6)}` : "Connect"}</Button> */}
              </div>
            </div>
          </Container>
        </div>
      </div >
    </div >
  );
};

export default Banner;
