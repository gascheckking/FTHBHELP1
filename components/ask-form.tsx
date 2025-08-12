'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

export function AskForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Post to backend/Farcaster/Base
    console.log('Posted:', { title, content })
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Question Title" 
      />
      <Textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Describe your issue (support markdown, code, images)" 
      />
      <Button type="submit">Post Question</Button>
    </form>
  )
}
