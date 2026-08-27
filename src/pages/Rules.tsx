import { useNavigate } from 'react-router-dom';

interface RulesProps {
  onUnlockNext: () => void;
}

export default function Rules({ onUnlockNext }: RulesProps) {
  const navigate = useNavigate();

  const handleStart = () => {
    onUnlockNext();
    navigate('/level1');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '750px', width: '100%', background: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', padding: '40px', border: '1px solid #e2e8f0' }}>
        
        <span style={{ display: 'inline-block', padding: '6px 16px', background: '#f3f4f6', color: '#714B67', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
          Mission Briefing 📜
        </span>

        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '20px', fontWeight: '800' }}>
          How to Play
        </h1>

        <div style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <p>
            Welcome! You are about to embark on a challenging journey through a series of technical riddles and puzzles crafted by our team and interns.
          </p>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Solve the puzzles:</strong> Each level contains a riddle or a technical challenge. Find the correct answer to unlock the next step.</li>
            <li><strong>Discover the interns:</strong> In Act 1, every cleared level will introduce you to a unique intern profile. Learn their secrets before moving on!</li>
            <li><strong>Use hints wisely:</strong> Stuck? Hint timers will help you out, though your pride might take a hit.</li>
            <li><strong>No cheating:</strong> The URL paths are protected. You must clear each stage in order to progress.</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={handleStart}
            style={{ background: '#714B67', color: '#ffffff', border: 'none', padding: '14px 32px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(113, 75, 103, 0.3)' }}
            onMouseOver={(e) => e.currentTarget.style.background = '#5d3d54'}
            onMouseOut={(e) => e.currentTarget.style.background = '#714B67'}
          >
            I'm Ready, Let's Go! 🚀
          </button>
        </div>

      </div>
    </div>
  );
}