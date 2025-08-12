"use client";

import { ConnectKitButton } from "connectkit";
import { useAccount, useDisconnect } from "wagmi";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <ConnectKitButton />
      {isConnected && (
        <div>
          <p>Connected: {address}</p>
          <button
            onClick={() => disconnect()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}
