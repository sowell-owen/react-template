import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";

import { connectWallet } from "../../utils/connectWallet";
import { disconnectWallet } from "../../utils/disconnectWallet";

function Home() {
  const { activate, deactivate, account } = useWeb3React();

  useEffect(() => {
    console.log("User's account: ", account);
  }, [account]);

  return (
    <div>
      <h1>{account}</h1>
      <button onClick={() => connectWallet(activate)}>connect wallet</button>
      <button onClick={() => disconnectWallet(deactivate)}>
        disconnect wallet
      </button>
    </div>
  );
}

export default Home;
