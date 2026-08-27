import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';
import VoidChallenge from "../components/level12/VoidChallenge.tsx";
import ContentVideo from "../components/ContentVideo.tsx";

interface Level12Props {
  onUnlock: () => void;
}

export default function Level12({ onUnlock }: Level12Props) {
  return (
    <LevelTemplate
      levelNumber={12}
      title=""
      subtitle="The title is already an hint"
      hintTimerDuration={10}
      
      riddleContent={
        <>
          <VoidChallenge/>
          {/*<ComponentLabel name="ContentText" />*/}
          {/*<ContentText text="Here is the enigma description for Level 12. Refer to Level 0 for example structure." />*/}
          
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

      correctAnswer="Emptyness"
      nextRoute="/level13"
      
      hints={[
        <Hint number={1}>
          <ComponentLabel name="Maybe an hint is left somewhere else" />
          <ContentText text="I'm very clueless sometimes" />
        </Hint>,
        <Hint number={2}>
          <ComponentLabel name="Music fact hint" />
          <ContentText text="A famous band once sang about a machine made of it." />
        </Hint>,
        <Hint number={3}>
          <ComponentLabel name="Video hint" />
          <ContentText text="Here is hint 3 with video. 
          https://www.youtube.com/watch?v=SRXH9AbT280" />
          <ContentVideo src="https://www.youtube.com/watch?v=SRXH9AbT280" />
        </Hint>,
        <Hint number={4}>
          <ComponentLabel name="Semantic hint" />
          <ContentText text="The very first letter must be in capital" />
        </Hint>,
      ]}
      
      onUnlock={onUnlock}
    />
  );
}
