import { useState } from 'react';

import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import ContentAudio from '../components/ContentAudio';
import ContentVideo from '../components/ContentVideo';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface Level6Props {
  onUnlock: () => void;
}

const answers = ['password', 'incorrect', 'again', 'again later'];
const messages = ["Enter password.", "Password is incorrect.", "Try again.", "Try again later."]

export default function Level6({ onUnlock }: Level6Props) {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userAnswer = answer.trim().toLowerCase();

    if (!userAnswer) return;

    if (userAnswer === answers[step]) {
      
      if (step === answers.length - 1) {
        setMessage("Well done ! Here's your passcode: 0doo4ever<3");

        onUnlock();
        return;
      }

      setStep((current) => current + 1);
      setAnswer('');
      setMessage(messages[step+1]);
    } else {
      setAnswer('');
      setMessage(messages[step]);
    }
  };

  return (
    <LevelTemplate
      levelNumber={6}
      title="Find the password"
      subtitle="Purely logical riddle"
      hintTimerDuration={10}

      riddleContent={
        <>
          {/* <ComponentLabel name="ContentText" /> */}

          <ContentText
            text="Enter password."
          />

          {/* <ComponentLabel name="ContentImage" />

          <ContentImage
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
            alt="Placeholder"
          /> */}

          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter your answer..."
              autoComplete="off"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                background: '#714B67',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: '12px',
                color: message === 'Correct!' ? '#16a34a' : '#714B67',
                fontWeight: 'bold',
              }}
            >
              {message}
            </div>
          )}

          <div
            style={{
              marginTop: '12px',
              fontSize: '0.85rem',
              color: '#6b7280',
            }}
          >
            Step {Math.min(step + 1, answers.length)} / {answers.length}
          </div>
        </>
      }

      correctAnswer="0doo4ever<3"
      nextRoute="/odoo-intern-6"

      hints={[
        <Hint number={1}>
          <ComponentLabel name="Hint #1" />
          <ContentText text="Read the message below the input." />
        </Hint>,

        // <Hint number={2}>
        //   <ComponentLabel name="ContentText inside Hint" />
        //   <ContentText text="Here is hint 2 for level 6." />
        // </Hint>,

        // <Hint number={3}>
        //   <ComponentLabel name="ContentAudio inside Hint" />
        //   <ContentText text="Here is hint 3 with audio." />
        //   <ContentAudio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        // </Hint>,

        // <Hint number={4}>
        //   <ComponentLabel name="ContentVideo inside Hint" />
        //   <ContentText text="Here is hint 4 with video." />
        //   <ContentVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        // </Hint>,
      ]}

      onUnlock={onUnlock}
    />
  );
}
