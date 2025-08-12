import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AskForm } from '@/components/ask-form'
import { QuestionList } from '@/components/question-list'
import { CommunityFeed } from '@/components/community-feed'

export default function Home() {
  return (
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
        <h1 className="text-2xl font-bold mb-4">Welcome to BaseHelpCast</h1>
        <p>Community support for Farcaster Frames and Base dApps.</p>
        {/* Trending questions */}
        <QuestionList questions={sampleQuestions} />
      </TabsContent>
      <TabsContent value="ask">
        <AskForm />
      </TabsContent>
      <TabsContent value="browse">
        <QuestionList questions={sampleQuestions} /> {/* Add search/filter */}
      </TabsContent>
      <TabsContent value="community">
        <CommunityFeed />
      </TabsContent>
      <TabsContent value="my-stuff">
        <p>Your questions and answers.</p> {/* Add history */}
      </TabsContent>
      <TabsContent value="settings">
        <p>Connect wallet, notifications, etc.</p> {/* Add forms */}
      </TabsContent>
    </Tabs>
  )
}

// Sample data for MVP
const sampleQuestions = [
  { id: 1, title: 'How to deploy Frame on Farcaster?', content: 'Details...', answers: 2 },
  { id: 2, title: 'Base smart contract error', content: 'Help!', answers: 5 },
]
