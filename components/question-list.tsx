type Question = { id: number; title: string; content: string; answers: number }

export function QuestionList({ questions }: { questions: Question[] }) {
  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <div key={q.id} className="p-4 border rounded">
          <h3 className="font-bold">{q.title}</h3>
          <p>{q.content}</p>
          <p>{q.answers} answers</p>
          {/* Add upvote, answer button */}
        </div>
      ))}
    </div>
  )
}
