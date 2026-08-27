import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import ContentAudio from '../components/ContentAudio';
import ContentVideo from '../components/ContentVideo';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface Level5Props {
  onUnlock: () => void;
}

export default function Level5({ onUnlock }: Level5Props) {
  return (
    <LevelTemplate
      levelNumber={5}
      title="What a weird lock"
      subtitle="That lock looks like it needs a password to open. But there is nothing here."
      hintTimerDuration={10}
      
      riddleContent={
        <div style={{ position: 'relative' }}>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
              wordBreak: 'break-all',
              lineHeight: '1.4',
              fontSize: '1.1rem',
              color: '#00000022',
              WebkitTextSecurity: 'disc',
              // @ts-ignore - non-standard CSS property, only supported via vendor prefix
              textSecurity: 'disc',
            } as React.CSSProperties}
          >
            {'opensesame'.repeat(400)}
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* <ComponentLabel name="ContentText" /> */}
            <ContentText text="A mystical door appear in front of you. As you get close, it whispers to you in a language you don't know. And yet, you still understand its meaning. 'Whisper the magic words'" />

            {/* <ComponentLabel name="ContentImage" /> */}
            <ContentImage 
              src="src/assets/door_jb.jpg"
              alt="Placeholder" 
            />

            {/* <div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
              🔑 <strong>Test Answer :</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#714B67' }}>test</span>
            </div> */}
          </div>
        </div>
      }

      correctAnswer="opensesame"
      nextRoute="/odoo-intern-5"
      
      hints={[
        <Hint number={1}>
          {/* <ComponentLabel name="ContentText inside Hint" /> */}
          <ContentText text="The answer is in the background" />
        </Hint>,
        <Hint number={2}>
          {/* <ComponentLabel name="ContentText inside Hint" /> */}
          <ContentText text="The pattern behind isn't just decoration" />
        </Hint>,
        <Hint number={3}>
          {/* <ComponentLabel name="ContentAudio inside Hint" /> */}
          <ContentText text="You can use the dev tools to inspect and edit the page" />
        </Hint>,
        <Hint number={4}>
          {/* <ComponentLabel name="ContentVideo inside Hint" /> */}
          <ContentText text="F12 => Find the -webkit-text-security style on the background element, and change its value to 'none'" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}