import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';
import FleeingButtonPuzzle from '../components/FleeingButtonPuzzle';

interface Level22Props {
  onUnlock: () => void;
}

export default function Level22({ onUnlock }: Level22Props) {
  return (
    <LevelTemplate
      levelNumber={22}
      title="Don't Touch My Domain"
      subtitle="Click this button."
      hintTimerDuration={20}
      riddleContent={
        <>
          <ContentText text="This button seems undominatable" />
          <FleeingButtonPuzzle />
        </>
      }
      // correctAnswer={FLEEING_BUTTON_FLAG}
      nextRoute="/congratulations"
      hints={[
        <Hint number={1}>
          <ContentText text="Maybe you should try something else" />
        </Hint>,
        <Hint number={2}>
          <ContentText text="Maybe you should just do what you're told not to do" />
        </Hint>,
        <Hint number={3}>
          <ContentText text="You don't necessarily need a mouse to make something believe it was clicked." />
        </Hint>,
        <Hint number={4}>
          <ContentText text="fleeing-btn" />
        </Hint>,
      ]}
      onUnlock={onUnlock}
    />
  );
}
