import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentAudio from '../components/ContentAudio';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';
import DungeonChallenge from "../components/level1/DungeonChallenge.tsx";
import audioClue from "../assets/level1/poignee.mp3";

interface Level1Props {
  onUnlock: () => void;
}

export default function Level1({ onUnlock }: Level1Props) {
  return (
    <LevelTemplate
      levelNumber={1}
      title="The closed door."
      subtitle="Can you get into the treasure room ?"
      hintTimerDuration={10}
      
      riddleContent={
        <>
          <DungeonChallenge/>
          {/*<ComponentLabel name="ContentText" />*/}
          {/*<ContentText text="Here is the enigma description for Level 1. Refer to Level 0 for example structure." />*/}
          
          {/*<ComponentLabel name="ContentImage" />*/}
          {/*<ContentImage */}
          {/*  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" */}
          {/*  alt="Placeholder" */}
          {/*/>*/}
          
          {/*<div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>*/}
          {/*  🔑 <strong>Test Answer :</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#714B67' }}>test</span>*/}
          {/*</div>*/}
        </>
      }

      correctAnswer="I OPEN THE DOOR"
      nextRoute="/odoo-intern-1"
      
      hints={[
        <Hint number={1}>
          <ComponentLabel name="First hint" />
          <ContentText text="This is a completly functioning door." />
        </Hint>,
        <Hint number={2}>
          <ComponentLabel name="Meta hint" />
          <ContentText text="Maybe you're over-thinking it ?" />
        </Hint>,
        <Hint number={3}>
          <ComponentLabel name="Does this sound familiar ?" />
          <ContentText text="Here is hint 3 with audio." />
          <ContentAudio src={audioClue} />
        </Hint>,
        <Hint number={4}>
          <ComponentLabel name="You can use the handle" />
          <ContentText text="Did you try opening it ?" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}