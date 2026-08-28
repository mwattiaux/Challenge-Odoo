import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LevelTemplate.css';

interface LevelTemplateProps {
  levelNumber: number;
  title: string;
  subtitle: string;
  riddleContent: React.ReactNode;
  nextRoute: string;
  hints: React.ReactNode[];
  onUnlock: () => void;
  hintTimerDuration?: number; // Durée du timer en secondes (par défaut 200s)
}

export default function LevelTemplate({
  levelNumber,
  title,
  subtitle,
  riddleContent,
  nextRoute,
  hints,
  onUnlock,
  hintTimerDuration = 200,
}: LevelTemplateProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState(false);
  
  // On commence à 0 : aucun indice n'est encore déverrouillé au chargement de la page
  const [unlockedCount, setUnlockedCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(hintTimerDuration);
  const [canUnlockNext, setCanUnlockNext] = useState(false);
  
  const navigate = useNavigate();

  // Gestion du timer pour déverrouiller le prochain indice
  useEffect(() => {
    if (unlockedCount >= hints.length) {
      setCanUnlockNext(false);
      return;
    }

    // Reset du timer à chaque passage à l'indice suivant
    setTimeLeft(hintTimerDuration);
    setCanUnlockNext(false);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanUnlockNext(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [unlockedCount, hints.length, hintTimerDuration]);

  const handleUnlockHint = () => {
    if (canUnlockNext && unlockedCount < hints.length) {
      setUnlockedCount((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: levelNumber, answer: userAnswer }),
      });

      const data = await response.json();

      if (data.success) {
        onUnlock();
        navigate(nextRoute);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Erreur lors de la validation", err);
      setError(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="level-container">
      <div className="level-card">
        <h1>Level {levelNumber}: {title}</h1>
        <p className="subtitle">{subtitle}</p>

        {/* Énigme principale */}
        <div className="riddle-box">
          {riddleContent}
        </div>

        {/* Section des indices */}
        <div className="hints-section">
          <h3>Hints ({unlockedCount}/{hints.length})</h3>
          
          {/* On affiche TOUS les indices avec le même comportement de verrouillage/timer */}
          {hints.map((hintNode, index) => {
            const isUnlocked = index < unlockedCount;
            const isNextToUnlock = index === unlockedCount;

            if (isUnlocked) {
              // Indice déjà déverrouillé
              return <div key={index} style={{ marginBottom: '16px' }}>{hintNode}</div>;
            } else if (isNextToUnlock) {
              // C'est l'indice actuel en attente du timer
              return (
                <div key={index} className="next-hint-control" style={{ marginBottom: '16px' }}>
                  {canUnlockNext ? (
                    <button 
                      type="button" 
                      className="btn-hint" 
                      onClick={handleUnlockHint}
                    >
                      Unlock Hint #{index + 1} 🔓
                    </button>
                  ) : (
                    <div className="hint-timer">
                      🔒 Hint #{index + 1} available in: {formatTime(timeLeft)}
                    </div>
                  )}
                </div>
              );
            } else {
              // Indices suivants (fermés)
              return (
                <div key={index} className="next-hint-control" style={{ marginBottom: '16px' }}>
                  <div className="hint-timer" style={{ opacity: 0.5 }}>
                    🔒 Hint #{index + 1} (Locked)
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Formulaire de réponse */}
        <form onSubmit={handleSubmit} className="form-group">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => {
              setUserAnswer(e.target.value);
              setError(false);
            }}
            placeholder="Enter your answer..."
            autoFocus
          />
          <button type="submit" className="btn-submit">Submit</button>
          {error && <p className="error-message">Incorrect answer. Try again!</p>}
        </form>
      </div>
    </div>
  );
}