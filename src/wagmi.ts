import { configureChains, createConfig } from 'wagmi'
import { klaytnBaobab } from 'wagmi/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

import { publicProvider } from 'wagmi/providers/public'

const walletConnectProjectId = '<WALLET_CONNECT_PROJECT_ID>'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [klaytnBaobab],
  [publicProvider()],
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})