import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';
import OpenButton from '../components/OpenButton';

interface Level18Props {
  onUnlock: () => void;
}

export default function Level18({ onUnlock }: Level18Props) {
  return (
    <LevelTemplate
      subtitle=''
      levelNumber={18}
      title="In English, please..."
      hintTimerDuration={10}
      
      riddleContent={
        <>
          <ContentText text="You just have to open it to get the answer." />

          <OpenButton onSuccess={onUnlock} />
          
          <ContentImage 
            src="https://en.meming.world/images/en/1/17/Willem_Dafoe_Looking_Up.jpg" 
            alt="Willem Dafoe meme" 
          />

        </>
      }

      // correctAnswer="Easy"
      nextRoute="/level19"
      
      hints={[
        <Hint number={1}>
          <ContentText text="
          'FBI, ___ THE DOOR!'
          " />
          <ContentText text="
          '___ SESAME!'
          " />
          <ContentText text="
          '___ YOUR EYES!'
          " />
        </Hint>,
        <Hint number={2}>
          <ContentText text="What does 'ouvrir' mean in English?" />
        </Hint>,
        <Hint number={3}>
          <ContentText text="The same thing as this image." />
          <ContentImage src="https://res.cloudinary.com/db7gzoduv/image/upload/v1787839603/img_hint_17.png" alt='A Open button'/>
        </Hint>,
        <Hint number={4}>
          <ContentText text="Maybe changing the DOM could help you open it." />
        </Hint>,

      ]}
      
      onUnlock={onUnlock}
    />
  );
}
