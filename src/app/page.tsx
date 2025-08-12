import { WalletConnect } from "@/components/wallet-connect";
import AskForm from "@/components/ask-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">BaseHelpCast</h1>
      <AskForm />
      <div className="mt-8">
        <WalletConnect />
      </div>
    </main>
  );
}
