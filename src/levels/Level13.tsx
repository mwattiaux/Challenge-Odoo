import LevelTemplate from '../components/LevelTemplate';
import Hint from '../components/Hint';
import ContentText from '../components/ContentText';
import GhostKeyboard from '../components/level13/GhostKeyboard';

interface Level13Props {
  onUnlock: () => void;
}

const NEXT_ROUTE = '/level14';

export default function Level13({ onUnlock }: Level13Props) {
  return (
      <>
        <style>{`
        .level-card form.form-group {
          display: none !important;
        }
      `}</style>

        <LevelTemplate
            levelNumber={13}
            title="The Haunted Keyboard"
            subtitle="Type the phrase... if you can."
            hintTimerDuration={10}

            riddleContent={
              <GhostKeyboard onSuccess={onUnlock} nextRoute={NEXT_ROUTE} />
            }

            // correctAnswer="__never_match__"
            nextRoute={NEXT_ROUTE}

            hints={[
              <Hint number={1}>
                <ContentText text="Your keyboard seems... possessed." />
              </Hint>,
              <Hint number={2}>
                <ContentText text="Maybe typing isn't the only way to input text." />
              </Hint>,
              <Hint number={3}>
                <ContentText text="Control is the key to unlocking the secrets of this haunted keyboard." />
              </Hint>,
            ]}

            onUnlock={onUnlock}
        />
      </>
  );
}