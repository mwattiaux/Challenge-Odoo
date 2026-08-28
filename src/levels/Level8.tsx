import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface Level8Props {
  onUnlock: () => void;
}

export default function Level8({ onUnlock }: Level8Props) {
  return (
    <LevelTemplate
      levelNumber={8}
      title="Find the YouTube Video"
      subtitle="Your task is to find the video this level is referring to."
      hintTimerDuration={10}
      
      riddleContent={
        <>
          <ComponentLabel name="ContentText" />
          <ContentText text="Here is the enigma description for Level 8. Refer to Level 0 for example structure." />
          
          <ComponentLabel name="ContentImage" />
          <ContentImage 
            src="src/assets/MaximeNEnigmePhoto.png" 
            alt="Placeholder" 
          />

          <div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
            🔑 YouTube is a vi<strong>d</strong>eo host websites with billions of hours of content. 
               <strong>Q</strong>uickly, you can end up lost on the platform. You can start <strong>w</strong>atching a video about <strong>4</strong>x4 Rubik's Cube,
               end up on a video about a <strong>w</strong>hisky factory and <strong>9</strong> videos later you are watching a video about
               the Marvel's <strong>W</strong>olverine video <strong>g</strong>ame and the reactions to its latest trailer on <strong>X</strong>.
               But, that random aspe<strong>c</strong>t is what we like the most about it. Everytime we are asking ourselves the same <strong>q</strong>uestion :
               What's the next video we are going to watch? Maybe some music?
          </div>
        </>
      }

      correctAnswer="Never Gonna Give You Up"
      nextRoute="/odoo-intern-8"
      
      hints={[
        <Hint number={1}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="Some characters seems... different" />
        </Hint>,
        <Hint number={2}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="It matters if the letters are in uppercase or lowercase" />
        </Hint>,
        <Hint number={3}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="What's the structure of a YouTube video URL?" />
        </Hint>,
        <Hint number={4}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="What's the title of the song?" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}
