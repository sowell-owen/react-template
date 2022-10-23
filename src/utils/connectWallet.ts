import { InjectedConnector } from "@web3-react/injected-connector";

import { injected } from "../helpers/connectors";

export const connectWallet = async (
  activate: (
    connector: InjectedConnector,
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => Promise<void>
) => {
  try {
    await activate(injected());
    localStorage.setItem("disconnect", "false");
    console.log("Wallet connected");
  } catch (e) {
    console.log(e);
  }
};
