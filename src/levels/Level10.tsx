import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import ContentAudio from '../components/ContentAudio';
import ContentVideo from '../components/ContentVideo';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';
import guard from '../assets/images/level10/guard.jpeg';
import guard_door from '../assets/images/level10/guard_door.jpeg';

interface Level10Props {
  onUnlock: () => void;
}

export default function Level10({ onUnlock }: Level10Props) {
  return (
    <LevelTemplate
      levelNumber={10}
      title="Door of heaven or door of hell ?"
      subtitle="One guard only tells the truth, the other only lies."
      hintTimerDuration={10}

      riddleContent={
        <>
          <ContentText text="One of these doors leads to heaven and the other to hell. Choose the right one." />

          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}
            question="Do you know which of the two doors is the right one?"
          >
            <ContentImage
              src={guard}
              alt="Guard 1 says the door to my right is the door to heaven."
            />
            <span answer="No"></span>

            <ContentImage
              src={guard_door}
              alt="Odin's Door"
            />
            <ContentImage
              src={guard_door}
              alt="Loki's Door"
            />
            <ContentImage
              src={guard}
              alt="Guard 2 says the door to my left is the door to heaven."
            />
            <span answer="Yes"></span>
          </div>
        </>
      }

      correctAnswer="Loki"
      nextRoute="/odoo-intern-10"

      hints={[
        <Hint number={1}>
          <ContentText text="The guards are answering a question." />
        </Hint>,
        <Hint number={2}>
          <ContentText text="What if you were blind ?" />
        </Hint>,
        <Hint number={3}>
          <ContentText text="Does any properties seem weird in these tags ?" />
        </Hint>,
        <Hint number={4}>
          <ContentText text="You should only give the name of the door to heaven." />
        </Hint>
      ]}

      onUnlock={onUnlock}
    />
  );
}
