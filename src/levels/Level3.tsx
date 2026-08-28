import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';

// Import your images from the assets folder
import odooLogoSecret from '../assets/odoo-logo.png';
import wilburImage from '../assets/wilbur.png';

interface Level3Props {
  onUnlock: () => void;
}

export default function Level3({ onUnlock }: Level3Props) {
  return (
    <LevelTemplate
      levelNumber={3}
      title="The Odoo Logo"
      subtitle="A simple logo isn't it?"
      hintTimerDuration={60}
      
      riddleContent={
        <>
          <ContentText text="What a fantastic company, don't you think? Just type the given password to move on to the next level." />
          
          <ContentImage 
            src={odooLogoSecret} 
            alt="Odoo Logo Secret" 
          />
        </>
      }

      // correctAnswer="Odoo-steganography"
      nextRoute="/odoo-intern-3"
      
      hints={[
        <Hint number={1}>
          <ContentText text="A simple logo indeed. But take a close look again." />
        </Hint>,
        <Hint number={2}>
          <ContentText text="My mother always told me about a little wilbur who loved to draw and use all kinds of colors..." />
        </Hint>,
        <Hint number={3}>
          <ContentText text="The Wilbur in question:" />
          <ContentImage src={wilburImage} alt="Wilbur" />
        </Hint>,
        <Hint number={4}>
          <div>
            <ContentText text="My mother always told me to look at color curves in art, she found it intriguing. Instead of a wilbur, take a look at :" />
            <div style={{ marginTop: '6px' }}>
              <a 
                href="https://vayce.app/tools/image-curves-adjustment/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all', fontWeight: '500' }}
              >
                https://vayce.app/tools/image-curves-adjustment/
              </a>
            </div>
          </div>
        </Hint>,
        <Hint number={5}>
          <ContentText text="If you've made it this far, I guess you should have found what seems to be the password, but it might not work. Do you know the principle of acronyms?" />
        </Hint>,
        <Hint number={6}>
          <ContentText text="If you found the hidden message, make sure to look closely at the <strong>bold/uppercase characters</strong>." />
        </Hint>,
        <Hint number={7}>
          <ContentText text="If you've made it this far, I still hope you managed to figure out where to look? If not, you'll never find the exiF way of this riddle :)" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}