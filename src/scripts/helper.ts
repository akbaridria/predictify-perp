export const trimWallet = (wallet: string) => {
  return wallet.slice(0,5) + '...' + wallet.slice(-3);
}