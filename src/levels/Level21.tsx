import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';
import Hliðskjálf from '../assets/images/level21/Odin_s_Throne_by_BurningBrushGallery_on_deviantART_1024x1024.webp';

interface Level21Props {
  onUnlock: () => void;
}

export default function Level21({ onUnlock }: Level21Props) {
  return (
    <LevelTemplate
      levelNumber={21}
      title="What is the secret sentence ?"
      subtitle="The answer must be decyphered."
      hintTimerDuration={10}

      riddleContent={
        <>
          <ContentText text="Find the secret sentence..." />
          <ContentText text="86 72 81 76 77 90 85 78 79 85 78 75 69 74" />

          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              maxWidth: '100%',
            }}
          >
            <a href="https://www.arthur-declerck.be/decodingTable.txt" target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  position: 'absolute',
                  left: '50.5%',
                  top: '38%',
                  width: '9.75%',
                  height: '5.53%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  textAlign: 'center',
                }}
              >
              </div>
            </a>

            <ContentImage
              src={Hliðskjálf}
              alt="Hliðskjálf"
            />
          </div>
        </>
      }

      correctAnswer="BEWARE OF ODIN"
      nextRoute="/level22"

      hints={[
        <Hint number={1}>
          <ContentText text="How does a computer read letters ?" />
        </Hint>,
        <Hint number={2}>
          <ContentText text="There is a link in the image." />
        </Hint>,
        <Hint number={3}>
          <ContentText text="Do you know cypher keys ?" />
        </Hint>,
        <Hint number={4}>
          <ContentText text="Decipher using the ASCII table first." />
        </Hint>
      ]}

      onUnlock={onUnlock}
    />
  );
}
