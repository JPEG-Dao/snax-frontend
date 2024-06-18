import Container from '../Container/Container';
import howToImg from '@/assets/howToBuy/Group 1171275272.png';
import claud from '@/assets/meme-Ge4nerator/Group 1171275247.png';
import cardImage from '@/assets/howToBuy/logo_short_no_bg_square.png';
import cardImageShadow from '@/assets/howToBuy/Group 1171275247.png';
import howToTree from '@/assets/howToBuy/Group 1171275261.png';
import cloudShadowimg from '@/assets/howToBuy/Group.png';

const HowToBuy = () => {
  return (
    <div className='2xl:mt-[248px] xl:mt-[220px] lg:mt-[160px] md:mt-[90px] mt-[60px] 2xl:mb-[170px] xl:mb-[110px] lg:mb-[90px] md:mb-[70px] mb-[40px]' id='buy'>
      <div className='relative'>
        <Container>

          {/* ------ title section ----------- */}
          <div>
            <h1 className='text-[#FFF] text-center xl:text-[80px] lg:text-[60px] md:text-[45px] text-[30px] lg:leading-[88px] lg:tracking-[2.4px]' data-aos="fade-up"
              data-aos-duration="900">How to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]' data-aos="fade-up"
                data-aos-duration="900">buy?</span></h1>
            <img className='absolute 2xl:w-auto xl:w-auto lg:w-[25%] md:w-[20%] w-[20%] 2xl:top-[-40px] xl:top-[-40px] lg:top-[-35px] md:top-[-10px] top-[1px] 2xl:left-[610px] xl:left-[340px] lg:left-[205px] md:left-[195px] left-[100px]' src={claud} alt="image" />

            {/* tree img  */}
            <img className='absolute 2xl:mt-[-185px] xl:mt-[-155px] lg:mt-[-110px] md:mt-[-75px] mt-[-45px] 2xl:ml-[1040px] xl:ml-[850px] lg:ml-[650px] md:ml-[490px] ml-[290px] 2xl:w-auto xl:w-[12%] lg:w-[11%] md:w-[10%] w-[10%]' src={howToTree} alt="image" />
          </div>


          {/* ------------ contain section -------------- */}
          <div className='2xl:mt-[85px] xl:mt-[85px] lg:mt-[80px] md:mt-[60px] mt-[40px]'>
            {/* ----------- card 1 --------- */}
            <div className='2xl:ml-[4px] xl:ml-[4px] lg:ml-[4px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]' data-aos="fade-up"
              data-aos-duration="1200">
              <img className='2xl:ml-[240px] xl:ml-[190px] lg:ml-[148px] mx-auto 2xl:w-auto xl:w-[10%] lg:w-[10%] md:w-[20%] w-[18%] mb-[-5px] md:mb-[-8px] lg:mb-0' src={cardImage} alt="image" />

              <div className='2xl:w-[44%] xl:w-[41%] lg:w-[41%] md:w-[80%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] lg:mx-0 md:mx-auto rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] md:p-[30px] p-[20px] rounded-[30px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[20px] text-[18px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Create <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>Wallet</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] md:mt-[8px] mt-[8px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Download metamask from the app store or google play store for free. Desktoo users, download the aocale chrome I</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-185px] lg:mt-[-140px] md:mt-[-140px] mt-[-85px] 2xl:ml-[440px] xl:ml-[290px] lg:ml-[225px] md:ml-[480px] ml-[300px] 2xl:w-auto xl:w-[16%] lg:w-[16%] md:w-[20%] w-[22%]' src={cardImageShadow} alt="image" />
              </div>
            </div>

            {/* ----------- card 2 --------- */}
            <div className='2xl:mt-[-170px] xl:mt-[-110px] lg:mt-[-110px] md:mt-[50px] mt-[40px] 2xl:ml-[860px] xl:ml-[660px] lg:ml-[520px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]' data-aos="fade-up"
              data-aos-duration="1600">
              <img className='2xl:ml-[240px] xl:ml-[185px] lg:ml-[145px] mx-auto 2xl:w-auto xl:w-[24%] lg:w-[24%] md:w-[20%] w-[18%] mb-[-5px] md:mb-[-8px] lg:mb-0' src={cardImage} alt="image" />

              <div className='2xl:w-[100%] xl:w-[99%] lg:w-[99%] md:w-[80%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] lg:mx-0 md:mx-auto rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px] md:p-[30px] p-[20px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[20px] text-[18px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Get some <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>SOL</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] md:mt-[8px] mt-[8px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Have SOL in your wallet to switch to skillSolona. If you don't have any SOL, you con buy directly on metamosk, transfer from another wollet, or buy on another exchange and send it to your wollet.</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-220px] lg:mt-[-185px] md:mt-[-190px] mt-[-115px] 2xl:ml-[415px] xl:ml-[280px] lg:ml-[190px] md:ml-[430px] ml-[265px] 2xl:w-auto xl:w-auto lg:w-[50%] md:w-[28%] w-[30%]' src={cardImageShadow} alt="image" />
              </div>
            </div>



            {/* ---------------- main images ---------------- */}
            <div className='hidden lg:block 2xl:mt-[-540px] xl:mt-[-440px] lg:mt-[-330px]' data-aos="fade-up"
              data-aos-duration="2000">
              <img className='mx-auto 2xl:pl-[15px] 2xl:w-[50%] xl:w-[50%] lg:w-[50%]' src={howToImg} alt="image" />
            </div>


            {/* ----------- card 3 --------- */}
            <div className='2xl:mt-[-830px] xl:mt-[-630px] lg:mt-[-500px] md:mt-[50px] mt-[40px] 2xl:ml-[4px] xl:ml-[4px] lg:ml-[4px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]' data-aos="fade-up"
              data-aos-duration="2000">
              <img className='2xl:ml-[240px] xl:ml-[182px] lg:ml-[140px] mx-auto 2xl:w-auto xl:w-[10%] lg:w-[10%] md:w-[20%] w-[18%] mb-[-5px] md:mb-[-8px] lg:mb-0' src={cardImage} alt="image" />

              <div className='2xl:w-[44%] xl:w-[41%] lg:w-[41%] md:w-[80%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] lg:mx-0 md:mx-auto rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px] md:p-[30px] p-[20px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[20px] text-[18px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Go to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>PancakeSwap</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] md:mt-[8px] mt-[8px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Connect to PancakeSwap. Go to PancakeSwap in google chrome or on the browser inside wour lictamark ago. Connect your wallet. Paste the sKillSolana SOL token Smart Contract address (0x4eCd50E&8507204D487555c59851755EF9fFAF9) into PoncokeSwoo, select TWEETY. and confirm. When. metamonk promote uou for a wollet sanature, sion.</p>
                </div>
              </div>

              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-250px] lg:mt-[-196px] md:mt-[-240px] mt-[-150px] 2xl:ml-[440px] xl:ml-[230px] lg:ml-[180px] md:ml-[385px] ml-[230px] 2xl:w-auto xl:w-[22%] lg:w-[22%] md:w-[35%] w-[40%]' src={cardImageShadow} alt="image" />
              </div>
            </div>


            {/* ----------- card 4 --------- */}
            <div className='2xl:mt-[-170px] xl:mt-[-130px] lg:mt-[-110px] md:mt-[50px] mt-[40px] 2xl:ml-[860px] xl:ml-[660px] lg:ml-[520px] 2xl:space-y-[-10px] xl:space-y-[-10px] lg:space-y-[-10px]' data-aos="fade-up"
              data-aos-duration="2400">
              <img className='2xl:ml-[240px] xl:ml-[180px] lg:ml-[140px] mx-auto 2xl:w-auto xl:w-[25%] lg:w-[25%] md:w-[20%] w-[18%] mb-[-5px] md:mb-[-8px] lg:mb-0' src={cardImage} alt="image" />

              <div className='2xl:w-[100%] xl:w-[99%] lg:w-[99%] md:w-[80%] p-[1px] bg-gradient-to-l from-[#F8B515] to-[#0FC1C7] lg:mx-0 md:mx-auto rounded-[30px] w-fit'>
                <div className='bg-[#18534f] 2xl:p-[40px] xl:p-[30px] lg:p-[20px] rounded-[30px] md:p-[30px] p-[20px]'>
                  <p className='text-[#FFF] 2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[20px] text-[18px] xl:leading-[33.6px] xl:tracking-[0.84px]'>Swap SOL for <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F8B515] to-[#0FC1C7]'>KillSolana</span></p>
                  <p className='2xl:mt-[15px] xl:mt-[15px] lg:mt-[10px] md:mt-[8px] mt-[8px] text-[#E7D7CB] 2xl:text-[18px] xl:text-[14px] lg:text-[12px] md:text-[14px] text-[12px] 2xl:leading-[28.8px] 2xl:tracking-[0.54px]'>Switch SOL for #KillSolana. We have ZERO toxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility. HOLD KillSolana SOL for 1000x ATH Growth + s</p>
                </div>
              </div>
              {/* card shadow image  */}
              <div>
                <img className='2xl:mt-[-220px] xl:mt-[-220px] lg:mt-[-150px] md:mt-[-240px] mt-[-150px] 2xl:ml-[415px] xl:ml-[285px] lg:ml-[220px] md:ml-[385px] ml-[230px] 2xl:w-auto xl:w-auto lg:w-[40%] md:w-[35%] w-[40%]' src={cardImageShadow} alt="image" />
              </div>
            </div>

            <img className='hidden lg:block absolute 2xl:mt-[-120px] xl:mt-[-120px] lg:mt-[-100px] 2xl:ml-[-280px] xl:ml-[-140px] lg:ml-[-100px] 2xl:w-auto xl:w-[30%] lg:w-[25%]' src={cloudShadowimg} alt="image" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HowToBuy
