import { Button } from './ui/button'
import { WalletConnect } from './wallet-connect' // Placeholder for wagmi

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">BaseHelpCast</h2>
      <nav>
        <ul>
          <li><Button variant="link">Home</Button></li>
          <li><Button variant="link">Ask Question</Button></li>
          <li><Button variant="link">Browse</Button></li>
          <li><Button variant="link">Community</Button></li>
          <li><Button variant="link">My Stuff</Button></li>
          <li><Button variant="link">Settings</Button></li>
        </ul>
      </nav>
      <div className="mt-auto">
        <WalletConnect />
      </div>
    </div>
  )
}
