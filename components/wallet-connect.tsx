'use client'

import { WagmiProvider, createConfig } from 'wagmi'
import { base } from 'viem/chains'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { ConnectKitButton } from 'connectkit'

const config = createConfig(
  getDefaultConfig({
    chains: [base],
    walletConnectProjectId: '', // Add your ID
  })
)

function WalletConnectInner() {
  return <ConnectKitButton />
}

export function WalletConnect() {
  return (
    <WagmiProvider config={config}>
      <ConnectKitProvider>
        <WalletConnectInner />
      </ConnectKitProvider>
    </WagmiProvider>
  )
}
