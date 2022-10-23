import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import MetamaskProvider from "./components/MetamaskProvider/MetamaskProvider";
import RenderRoutes from "./routes/RenderRoutes";

function App() {
  const getLibrary = (
    provider:
      | ethers.providers.ExternalProvider
      | ethers.providers.JsonRpcFetchFunc
  ) => {
    return new ethers.providers.Web3Provider(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </MetamaskProvider>
    </Web3ReactProvider>
  );
}

export default App;
