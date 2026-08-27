import React, { useState } from 'react';

interface AnswerFormProps {
  correctAnswer: string;
  onCorrectAnswer: () => void;
}

export default function AnswerForm({ correctAnswer, onCorrectAnswer }: AnswerFormProps) {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      setError(false);
      onCorrectAnswer();
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <input 
        type="text" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        placeholder="Enter your answer..." 
        required 
      />
      <button type="submit" className="btn-submit">Submit</button>
      {error && <p className="error-message">❌ Incorrect answer, try again!</p>}
    </form>
  );
}