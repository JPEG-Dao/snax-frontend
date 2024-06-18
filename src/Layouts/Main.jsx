

import Footer from '@/shared/Footer/Footer';
import NavBar from '@/shared/Navbar/Navbar';
import React, { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';


import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css"

const Main = () => {

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  // const connection = new Connection("https://rpc.ankr.com/solana");

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(connection),
    ],
    [connection]
  );


  return (
    <>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <NavBar />
          <Outlet />
          <Footer />
        </WalletModalProvider >
      </WalletProvider >
    </>
  );
};

export default Main;
