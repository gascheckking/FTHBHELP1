"use client";

import { FC } from "react";

interface Question {
  id: number;
  title: string;
  content: string;
  answers: number;
}

interface QuestionListProps {
  questions: Question[];
}

export const QuestionList: FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Questions</h3>
      <ul>
        {questions.map((question) => (
          <li key={question.id} className="p-2 border-b">
            <h4 className="font-medium">{question.title}</h4>
            <p>{question.content}</p>
            <p>{question.answers} answers</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
