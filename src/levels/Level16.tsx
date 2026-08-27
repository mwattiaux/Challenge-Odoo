import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
// import ContentAudio from '../components/ContentAudio';
// import ContentVideo from '../components/ContentVideo';
import Hint from '../components/Hint';
// import ComponentLabel from '../components/ComponentLabel';

interface Level16Props {
  onUnlock: () => void;
}

export default function Level16({ onUnlock }: Level16Props) {
   const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'My page description');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'First riddle part';
      meta.content = 'I have a head...';
      document.head.appendChild(meta);
    }
  return (
    <LevelTemplate
      levelNumber={16}
      title="Use your head"
      subtitle="Once more, knowledge eludes you. Yet it is here. You need only remember it."
      hintTimerDuration={10}
      tailHover='...,I have a tail...'
      riddleContent={
        <>
          {/* <ComponentLabel name="ContentText" /> */}
          <ContentText text="... ,but I have no body" />
          
          {/* <ComponentLabel name="ContentImage" /> */}
          <ContentImage 
            src="src/assets/footprint_jb.jpg" 
            alt="Placeholder" 
          />

          {/* <div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
            🔑 <strong>Test Answer :</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#714B67' }}>test</span>
          </div> */}
        </>
      }

      correctAnswer="Coin"
      nextRoute="/level17"
      
      hints={[
        <Hint number={1}>
          {/* <ComponentLabel name="ContentText inside Hint" /> */}
          <ContentText text="I swear it's somewhere in the head**" />
        </Hint>,
        <Hint number={2}>
          {/* <ComponentLabel name="ContentText inside Hint" /> */}
          <ContentText text="The second part is the tail end of this page" />
        </Hint>,
        <Hint number={3}>
          {/* <ComponentLabel name="ContentAudio inside Hint" /> */}
          <ContentText text="The two parts are in the header and the footer" />
        </Hint>,
        <Hint number={4}>
          {/* <ComponentLabel name="ContentVideo inside Hint" /> */}
          <ContentText text="I have a head, I have a tail, but no body." />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}
