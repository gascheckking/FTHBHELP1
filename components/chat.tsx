'use client'

import { useChat } from 'ai/react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Message } from 'ai'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',  // Server action for Gemini
  })

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m: Message) => (
          <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex">
          <Input
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
            className="flex-1"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}
