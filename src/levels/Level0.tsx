import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import ContentAudio from '../components/ContentAudio';
import ContentVideo from '../components/ContentVideo';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface TestLevelProps {
  onUnlock: () => void;
}

export default function Level0({ onUnlock }: TestLevelProps) {
  return (
    <LevelTemplate
      levelNumber={0}
      title="Showcase & Sandbox"
      subtitle="Complete example demonstrating how to use every available component and feature."
      hintTimerDuration={10}
      
      // Main riddle container: use this section to structure the core content of your level.
      riddleContent={
        <>
          {/* ContentText: Used for standard paragraphs, instructions, or descriptions. */}
          <ComponentLabel name="ContentText" />
          <ContentText text="Welcome to the test level! This component is used for standard paragraphs." />
          
          {/* ContentImage: Used to display illustrations, screenshots, or visual clues. */}
          <ComponentLabel name="ContentImage" />
          <ContentImage 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" 
            alt="Code example" 
          />
          
          {/* ContentAudio: Used to embed playable audio files or voice notes. */}
          <ComponentLabel name="ContentAudio" />
          <ContentAudio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />

          {/* ContentVideo: Used to embed video players (e.g., YouTube tutorials or clues). */}
          <ComponentLabel name="ContentVideo" />
          <ContentVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />

          {/* Helper box displaying the expected answer for testing purposes */}
          <div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
            🔑 <strong>Test Answer :</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#714B67' }}>odoo</span>
          </div>
        </>
      }

      // correctAnswer="odoo"
      nextRoute="/odoo-intern-0"
      
      // Hints section: Add progressive hints here. Each hint can wrap any combination of content components.
      hints={[
        // Hint 1: Simple text-only hint
        <Hint number={1}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="Hint #1 : Standard text hint." />
        </Hint>,
        
        // Hint 2: Combining text and an image inside a hint
        <Hint number={2}>
          <ComponentLabel name="ContentText & ContentImage inside Hint" />
          <ContentText text="Hint #2 : Text and image combined." />
          <ContentImage 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/640px-Git-logo.svg.png" 
            alt="Git Logo" 
          />
        </Hint>,
        
        // Hint 3: Hint featuring an audio clip
        <Hint number={3}>
          <ComponentLabel name="ContentAudio inside Hint" />
          <ContentText text="Hint #3 : Hint with audio support!" />
          <ContentAudio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        </Hint>,

        // Hint 4: Hint featuring a video guide
        <Hint number={4}>
          <ComponentLabel name="ContentVideo inside Hint" />
          <ContentText text="Hint #4 : Final hint containing a support video!" />
          <ContentVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}