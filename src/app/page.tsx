"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AskForm from "@/components/ask-form";
import { WalletConnect } from "@/components/wallet-connect";
import { QuestionList } from "@/components/question-list";
import { CommunityFeed } from "@/components/community-feed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">BaseHelpCast</h1>
      <Tabs defaultValue="home" className="w-full">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="ask">Ask</TabsTrigger>
          <TabsTrigger value="browse">Browse</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="my-stuff">My Stuff</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <h2 className="text-2xl font-bold mb-4">Welcome to BaseHelpCast</h2>
          <p>Community support for Farcaster Frames and Base dApps.</p>
          <QuestionList questions={sampleQuestions} />
        </TabsContent>
        <TabsContent value="ask">
          <AskForm />
          <div className="mt-8">
            <WalletConnect />
          </div>
        </TabsContent>
        <TabsContent value="browse">
          <QuestionList questions={sampleQuestions} />
        </TabsContent>
        <TabsContent value="community">
          <CommunityFeed />
        </TabsContent>
        <TabsContent value="my-stuff">
          <p>Your questions and answers.</p>
        </TabsContent>
        <TabsContent value="settings">
          <p>Connect wallet, notifications, etc.</p>
        </TabsContent>
      </Tabs>
    </main>
  );
}

const sampleQuestions = [
  { id: 1, title: "How to deploy Frame on Farcaster?", content: "Details...", answers: 2 },
  { id: 2, title: "Base smart contract error", content: "Help!", answers: 5 },
];
