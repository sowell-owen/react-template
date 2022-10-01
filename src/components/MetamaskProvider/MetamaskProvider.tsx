import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import { injected } from "../../helpers/connectors";
import { CHAIN_ID } from "../../helpers/constants";

function MetamaskProvider({ children }: { children: JSX.Element }) {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
    error,
  } = useWeb3React();
  const [isLoaded, setIsLoaded] = useState(false);
  const isWrongNetwork = error && error instanceof UnsupportedChainIdError;

  useEffect(() => {
    if (isWrongNetwork) {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${CHAIN_ID}` }],
      });
    }

    const reactivateAccount = async () => {
      try {
        const isAuthorized = await injected().isAuthorized();
        setIsLoaded(true);
        const isDisconnected = localStorage.getItem("disconnect");
        if (
          isAuthorized &&
          !networkActive &&
          !networkError &&
          isDisconnected !== "true"
        ) {
          await activateNetwork(injected());
          localStorage.setItem("disconnect", "false");
        }
      } catch (e) {
        console.log(e);
        setIsLoaded(true);
      }
    };
    reactivateAccount();
  }, [activateNetwork, networkActive, networkError]);

  return isLoaded ? children : <></>;
}

export default MetamaskProvider;
