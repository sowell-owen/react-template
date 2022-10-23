export const disconnectWallet = async (deactivate: () => void) => {
  try {
    deactivate();
    localStorage.setItem("disconnect", "true");
    console.log("Wallet disconnected");
  } catch (e) {
    console.log(e);
  }
};
