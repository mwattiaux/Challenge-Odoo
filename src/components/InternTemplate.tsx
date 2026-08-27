import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './InternTemplate.css';

interface InternTemplateProps {
  levelNumber: number;
  internName: string;
  internRole: string;
  nextRoute: string;
  onUnlockNext: () => void;
  content: ReactNode;
}

export default function InternTemplate({
  levelNumber,
  internName,
  internRole,
  nextRoute,
  onUnlockNext,
  content,
}: InternTemplateProps) {
  const navigate = useNavigate();

  const handleNext = () => {
    onUnlockNext();
    navigate(nextRoute);
  };

  return (
    <div className="intern-page-container">
      {/* En-tête du niveau */}
      <div className="intern-page-header">
        <span className="level-badge">Level {levelNumber} Unlocked 🚀</span>
        <h1>{internName}</h1>
        <p className="intern-role">{internRole}</p>
      </div>

      {/* Conteneur principal en "carte blanche" unifiée (même style que les énigmes) */}
      <div className="intern-main-card">
        <div className="intern-page-content">
          {content}
        </div>

        <div className="intern-page-footer">
          <button className="next-level-btn" onClick={handleNext}>
            Continue to Level {levelNumber + 1} →
          </button>
        </div>
      </div>
    </div>
  );
}