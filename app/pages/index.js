import Header from "../components/Header";
import PotCard from "../components/PotCard";
import Table from "../components/Table";
import style from "../styles/Home.module.css";

import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";


export default function Home() {
  const endpoint = "https://aged-greatest-diamond.solana-devnet.quiknode.pro/2956325c04e600775750cc6b6d87f4a28b1470b7/"

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter()
    ],
    []
  )
  return (
    <ConnectionProvider endpoint= {endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className={style.wrapper}>
            <Header />
            <PotCard />
            <Table />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
