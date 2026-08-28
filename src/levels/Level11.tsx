import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';
import DragUnlockPuzzle from '../components/DragUnlockPuzzle';

interface Level11Props {
  onUnlock: () => void;
}

export default function Level11({ onUnlock }: Level11Props) {
  return (
    <LevelTemplate
      levelNumber={11}
      title="You can't do that!"
      subtitle="You don't have the permissions to access the password."
      hintTimerDuration={10}
      riddleContent={
        <>
          <ContentText text="Someone locked the button that reveals the password." />
          <DragUnlockPuzzle />
        </>
      }
      // correctAnswer={DRAG_UNLOCK_FLAG}
      nextRoute="/odoo-intern-11"
      hints={[
        <Hint number={1}>
          <ContentText text="If only the user had admin rights..." />
        </Hint>,
        <Hint number={2}>
          <ContentText text="Maybe the button doesn't belong where it is." />
        </Hint>,
        <Hint number={3}>
          <ContentText text="Try dragging the button somewhere else." />
        </Hint>,
      ]}
      onUnlock={onUnlock}
    />
  );
}
