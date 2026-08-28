import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';
import riddle19pic from '../assets/MaximeNEnigme19Photo.png';

interface Level19Props {
  onUnlock: () => void;
}

export default function Level19({ onUnlock }: Level19Props) {
  return (
    <LevelTemplate
      levelNumber={19}
      title="An easy riddle"
      subtitle="The password is simply on the picture."
      hintTimerDuration={10}

      riddleContent={
        <>
          <ContentText text="That's an easy riddle! Just look at the picture to get the password." />

          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Manipulation 1a (réelle) : flou, à retirer */}
            <div style={{ filter: 'blur(8px)' }}>
              {/* Manipulation 1b (réelle) : contraste, à remettre à contrast(1) */}
              <div style={{ filter: 'contrast(0.3)' }}>
                {/* Manipulation 1e (réelle) : teinte inversée, à remettre à hue-rotate(0deg) */}
                <div style={{ filter: 'hue-rotate(180deg)' }}>
                  {/* Manipulation 1f (réelle) : désaturation, à remettre à saturate(1) */}
                  <div style={{ filter: 'saturate(0)' }}>
                    {/* Manipulation 1c (réelle) : miroir horizontal, à remettre à scaleX(1) */}
                    <div style={{ transform: 'scaleX(-1)' }}>
                      {/* Manipulation 1d (réelle) : retournement vertical, à remettre à scaleY(1) */}
                      <div style={{ transform: 'scaleY(-1)' }}>
                        {/* Manipulation 1g (réelle) : inclinaison, à remettre à skew(0deg, 0deg) */}
                        <div style={{ transform: 'skew(15deg, 10deg)' }}>
                          {/* Manipulation 1h (réelle) : découpe en polygone, à remettre à clip-path: none */}
                          <div style={{ clipPath: 'polygon(20% 20%, 80% 15%, 85% 80%, 15% 85%)' }}>
                            <ContentImage
                              src={riddle19pic}
                              alt="The Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Manipulation 2 (réelle) : calque opaque par-dessus l'image */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#1f2937',
                opacity: 0.85,
              }}
            />

            {/* Manipulation 3 (leurre) : bandeau coloré qui semble important mais ne cache rien d'essentiel */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '30%',
                background: 'repeating-linear-gradient(45deg, #ef4444, #ef4444 10px, #f87171 10px, #f87171 20px)',
                opacity: 0.9,
              }}
            />
          </div>

          <div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
            Wait... What happened to the picture?
          </div>
        </>
      }

      correctAnswer="technofuturtic"
      nextRoute="/level20"

      hints={[
        <Hint number={1}>
          <ComponentLabel name="Hint 1" />
          <ContentText text="Something happened to the picture! But what?" />
        </Hint>,
        <Hint number={2}>
          <ComponentLabel name="Hint 1" />
          <ContentText text="How can you fix the issue?" />
        </Hint>,
        <Hint number={3}>
          <ComponentLabel name="Hint 1" />
          <ContentText text="How many layers are there?" />
        </Hint>,
      ]}

      onUnlock={onUnlock}
    />
  );
}
