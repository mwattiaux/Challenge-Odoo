import { useNavigate } from 'react-router-dom';

interface FinalCongratulationsProps {
  onFinish?: () => void;
}

export default function FinalCongratulations({}: FinalCongratulationsProps) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '750px', width: '100%', background: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', padding: '50px 40px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
        
        <span style={{ display: 'inline-block', padding: '6px 16px', background: '#f3f4f6', color: '#714B67', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
          Mission Accomplished 🏆
        </span>

        <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '20px', fontWeight: '800' }}>
          Congratulations!
        </h1>

        <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '25px' }}>
          Well done, you managed to solve even the most devious traps set by the interns, and we couldn't trick you! 
        </p>

        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '35px' }}>
          We hope you enjoyed this little game. See you very soon—we can't wait to meet you!
        </p>

        {/* Illustration ou badge de fin */}
        <div style={{ marginBottom: '35px', padding: '20px', background: '#faf5f9', borderRadius: '12px', border: '1px dashed #d8b4e2' }}>
          <span style={{ fontSize: '3rem' }}>🎉🚀🥂</span>
        </div>

        <button 
          onClick={() => navigate('/')}
          style={{ background: '#714B67', color: '#ffffff', border: 'none', padding: '14px 32px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(113, 75, 103, 0.3)' }}
          onMouseOver={(e) => e.currentTarget.style.background = '#5d3d54'}
          onMouseOut={(e) => e.currentTarget.style.background = '#714B67'}
        >
          Back to Home 🏠
        </button>

      </div>
    </div>
  );
}