import { useEffect, useState } from 'react';
import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface Level17Props {
  onUnlock: () => void;
}

export default function Level17({ onUnlock }: Level17Props) {
  const [command, setCommand] = useState('');
  const [lumosActivated, setLumosActivated] = useState(false);
  const [revelioActivated, setRevelioActivated] = useState(false);
  const [gauntletActivated, setGauntletActivated] = useState(false);

  const handleCommandChange = (value: string) => {
    setCommand(value);
  };

  const handleCommandSubmit = () => {
    const commandLower = command.toLowerCase().trim();

    if (commandLower === 'lumos') {
      setLumosActivated(true);
      setCommand('');
    }

    if (commandLower === 'revelio') {
      setRevelioActivated(true);
      setCommand('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCommandSubmit();
    }
  };

  useEffect(() => {
    const backgroundColor = lumosActivated ? '#ffffff' : '#111111';

    // Body
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = lumosActivated ? '#111111' : '#ffffff';

    // Level container
    const levelContainer = document.querySelector(
      'div.level-container'
    ) as HTMLElement | null;

    if (levelContainer) {
      levelContainer.style.background = backgroundColor;
      levelContainer.style.color = lumosActivated ? '#111111' : '#ffffff';
    }

    // Level card
    const levelCard = document.querySelector(
      'div.level-card'
    ) as HTMLElement | null;

    if (levelCard) {
      levelCard.style.backgroundColor = backgroundColor;
      levelCard.style.color = lumosActivated ? '#111111' : '#ffffff';
    }

    // Level card
    const riddleBox = document.querySelector(
      'div.riddle-box'
    ) as HTMLElement | null;

    if (riddleBox) {
      riddleBox.style.backgroundColor = backgroundColor;
      riddleBox.style.color = lumosActivated ? '#111111' : '#ffffff';
    }

    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';

      if (levelContainer) {
        levelContainer.style.background = '';
        levelContainer.style.color = '';
      }

      if (levelCard) {
        levelCard.style.backgroundColor = '';
        levelCard.style.color = '';
      }

      if (riddleBox) {
        riddleBox.style.backgroundColor = '';
        riddleBox.style.color = '';
      }
    };
  }, [lumosActivated]);
  const gauntletStyles = `
    @keyframes gauntletFloat {
      0%, 100% {
        transform: translateY(0) rotate(-2deg);
      }
      50% {
        transform: translateY(-10px) rotate(2deg);
      }
    }

    @keyframes gauntletGlow {
      0%, 100% {
        filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 25px rgba(245, 158, 11, 0.9));
      }
    }

    @keyframes stonePulse {
      0%, 100% {
        box-shadow: 0 0 5px currentColor;
      }
      50% {
        box-shadow: 0 0 18px currentColor;
      }
    }

    @keyframes revealText {
      from {
        opacity: 1;
        filter: blur(0);
        transform: translate(3px, -2px);
      }
      to {
        opacity: 0;
        filter: blur(12px);
        transform: translate(3px, -25px);
      }
    }

    @keyframes gauntletDisappear {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(1.5);
      }
    }
  `;
  return (
    <div
      style={{
        minHeight: '100vh',
        background: lumosActivated ? '#ffffff' : '#111111',
        color: lumosActivated ? '#111111' : '#ffffff',
        transition: 'all 0.5s ease',
      }}
    >
      <LevelTemplate
        levelNumber={17}
        title="Do you want to see a magic trick ?"
        subtitle="Sometimes, you need a little light."
        hintTimerDuration={10}
        riddleContent={
          <>
            {!lumosActivated && (
              <>
                <ComponentLabel name="ContentText" />

                <ContentText
                  text="It's pretty dark in here, do you mind putting on some light ?"
                />

                <div
                  style={{
                    marginTop: '30px',
                    textAlign: 'center',
                  }}
                >
                  <input
                    value={command}
                    onChange={(e) => handleCommandChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Speak the magic word..."
                    autoComplete="off"
                    spellCheck={false}
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      padding: '14px 18px',
                      fontSize: '18px',
                      fontFamily: 'monospace',
                      background: '#1f1f1f',
                      color: '#fff',
                      border: '1px solid #714B67',
                      borderRadius: '8px',
                      textAlign: 'center',
                    }}
                  />
                </div>
              </>
            )}

            {lumosActivated && (
              <>
                <ComponentLabel name="ContentText" />

                <ContentText
                  text="The light reveals what darkness concealed. But something is still hidden."
                />

                {/* Overlapping texts */}
                <div
                  style={{
                    position: 'relative',
                    marginTop: '40px',
                    minHeight: '220px',
                    padding: '30px',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: '#fafafa',
                    border: '1px solid #ddd',
                  }}
                >
                  {/* Text containing the real question */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: '30px',
                      fontSize: '20px',
                      lineHeight: '2',
                      color: '#714B67',
                      fontWeight: 600,
                      zIndex: 2,
                    }}
                  >
                    What is the answer to life, the universe, and everything?
                  </div>

                  {/* Obscuring text */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '30px',
                      left: '30px',
                      right: '30px',
                      fontSize: '20px',
                      lineHeight: '2',
                      color: '#111827',
                      fontWeight: 600,
                      zIndex: 3,

                      animation: gauntletActivated
                        ? 'revealText 1s ease forwards'
                        : 'none',
                    }}
                  >
                    Sometimes people are able to do unimaginable things in life.
                  </div>
                </div>

                {/* Command input */}
                {!revelioActivated && (
                  <div
                    style={{
                      marginTop: '30px',
                      textAlign: 'center',
                    }}
                  >
                    <input
                      value={command}
                      onChange={(e) => handleCommandChange(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Something is hidden..."
                      autoComplete="off"
                      spellCheck={false}
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        padding: '14px 18px',
                        fontSize: '18px',
                        fontFamily: 'monospace',
                        background: '#fff',
                        color: '#111',
                        border: '1px solid #714B67',
                        borderRadius: '8px',
                        textAlign: 'center',
                      }}
                    />
                  </div>
                )}

                {/* Infinity Gauntlet */}
                {revelioActivated && (
                  <div
                    style={{
                      marginTop: '35px',
                      textAlign: 'center',
                    }}
                  >
                    <button
                      onClick={() => setGauntletActivated(true)}
                      disabled={gauntletActivated}
                      aria-label="Infinity Gauntlet"
                      style={{
                        position: 'relative',
                        width: '120px',
                        height: '150px',
                        border: 'none',
                        cursor: gauntletActivated ? 'default' : 'pointer',
                        background: 'transparent',
                        animation: gauntletActivated
                          ? 'gauntletDisappear 1s ease forwards'
                          : 'gauntletFloat 2.5s ease-in-out infinite, gauntletGlow 2s ease-in-out infinite',
                      }}
                    >
                      {/* Palm */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '25px',
                          top: '45px',
                          width: '70px',
                          height: '90px',
                          borderRadius: '25px 25px 18px 18px',
                          background:
                            'linear-gradient(135deg, #ad8e02, #988603 45%, #c29904)',
                          border: '3px solid #f0cd0a',
                          boxShadow:
                            'inset 5px 0 10px rgba(255,255,255,0.15), inset -8px 0 15px rgba(0,0,0,0.4)',
                        }}
                      />

                      {/* Thumb */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '10px',
                          top: '75px',
                          width: '35px',
                          height: '65px',
                          borderRadius: '20px 8px 12px 20px',
                          background:
                            'linear-gradient(135deg, #ad8e02, #c29904)',
                          border: '3px solid #f0cd0a',
                          transform: 'rotate(-25deg)',
                        }}
                      />

                      {/* Fingers */}
                      {[0, 1, 2, 3].map((finger) => (
                        <div
                          key={finger}
                          style={{
                            position: 'absolute',
                            left: `${27 + finger * 17}px`,
                            top: `${12 - (finger % 2) * 5}px`,
                            width: '15px',
                            height: '65px',
                            borderRadius: '12px 12px 7px 7px',
                            background:
                              'linear-gradient(135deg, #ad8e02, #c29904)',
                            border: '2px solid #f0cd0a',
                          }}
                        />
                      ))}

                      {/* Mind stone */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '90px',
                          transform: 'translateX(-50%)',
                          width: '25px',
                          height: '25px',
                          borderRadius: '6px',
                          background: '#facc15',
                          color: '#facc15',
                          boxShadow: '0 0 15px #facc15',
                          animation: 'stonePulse 1.5s ease-in-out infinite',
                          zIndex: 5,
                        }}
                      />

                      {/* Reality stone */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '28px',
                          top: '62px',
                          width: '13px',
                          height: '13px',
                          borderRadius: '50%',
                          background: '#ef4444',
                          color: '#ef4444',
                          animation: 'stonePulse 1.3s infinite',
                          zIndex: 5,
                        }}
                      />

                      {/* Space stone */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '45px',
                          top: '60px',
                          width: '13px',
                          height: '13px',
                          borderRadius: '50%',
                          background: '#3b82f6',
                          color: '#3b82f6',
                          animation: 'stonePulse 1.6s infinite',
                          zIndex: 5,
                        }}
                      />
                      
                      {/* Time stone */}
                      <div
                        style={{
                          position: 'absolute',
                          left: '20px',
                          top: '98px',
                          width: '13px',
                          height: '20px',
                          borderRadius: '50%',
                          background: '#22c55e',
                          color: '#22c55e',
                          animation: 'stonePulse 1.4s infinite',
                          zIndex: 5,
                          transform: 'rotate(-20deg)',
                        }}
                      />

                      {/* Power stone */}
                      <div
                        style={{
                          position: 'absolute',
                          right: '45px',
                          top: '60px',
                          width: '13px',
                          height: '13px',
                          borderRadius: '50%',
                          background: '#af09ec',
                          color: '#b603c3',
                          animation: 'stonePulse 1.7s infinite',
                          zIndex: 5,
                        }}
                        />

                      {/* Soul stone */}
                      <div
                        style={{
                          position: 'absolute',
                          right: '28px',
                          top: '62px',
                          width: '13px',
                          height: '13px',
                          borderRadius: '50%',
                          background: '#d28004',
                          color: '#c36d03',
                          animation: 'stonePulse 1.7s infinite',
                          zIndex: 5,
                        }}
                      />
                    </button>
                    <style>{gauntletStyles}</style>

                    {!gauntletActivated && (
                      <div
                        style={{
                          marginTop: '5px',
                          color: '#714B67',
                          fontStyle: 'italic',
                          fontSize: '14px',
                        }}
                      >
                        Something powerful has been revealed...
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        }
        correctAnswer="42"
        nextRoute="/level18"

        hints={[
          <Hint number={1}>
            <ComponentLabel name="ContentText inside Hint" />
            <ContentText text="Ever heard of Harry Potter ?" />
          </Hint>,

          <Hint number={2}>
            <ComponentLabel name="ContentText inside Hint" />
            <ContentText text="It is the opposite of Nox." />
          </Hint>,

          <Hint number={3}>
            <ComponentLabel name="ContentText inside Hint" />
            <ContentText text="There is still one spell used to reveal things that are hidden..." />
          </Hint>,

          <Hint number={4}>
            <ComponentLabel name="ContentText inside Hint" />
            <ContentText text="Resources can be distributed equally, ensuring that every being has enough to survive, by eliminating half the population. Although it may seem harsh, this is an essential step in the direction of a sustainable future. “it’s a simple calculus. This universe is finite, its resources finite." />
          </Hint>,
        ]}

        onUnlock={onUnlock}
      />
    </div>
  );
}
