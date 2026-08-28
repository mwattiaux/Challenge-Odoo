import { useNavigate } from 'react-router-dom';

interface TeamTransitionProps {
  onUnlockNext: () => void;
}

export default function TeamTransition({ onUnlockNext }: TeamTransitionProps) {
  const navigate = useNavigate();

  const handleContinue = async () => {
    try {
      // Force l'API à valider le passage vers l'Acte 2 (niveau 11 validé -> débloque le niveau 12)
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: 11, answer: "Beware of odin" }), // La réponse exacte du niveau 11 d'après ton tableau
      });

      const data = await response.json();
      if (data.success) {
        onUnlockNext();
        navigate('/level12');
      }
    } catch (err) {
      console.error("Erreur lors de la transition de l'acte 2", err);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '700px', width: '100%', background: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', padding: '40px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
        
        <span style={{ display: 'inline-block', padding: '6px 16px', background: '#f3f4f6', color: '#714B67', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
          Act 1 Completed 🎉
        </span>

        <h1 style={{ fontSize: '2rem', color: '#1e293b', marginBottom: '16px', fontWeight: '800' }}>
          You met all the interns!
        </h1>

        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '30px' }}>
          Well done, you've discovered all the team members. But now, things get serious. Are you ready to take on much harder challenges? Can you solve them?
        </p>

        {/* Image d'équipe placeholder (remplace l'URL si besoin) */}
        <div style={{ marginBottom: '30px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
            alt="Team" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <button 
          onClick={handleContinue}
          style={{ background: '#714B67', color: '#ffffff', border: 'none', padding: '14px 32px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 4px 12px rgba(113, 75, 103, 0.3)' }}
          onMouseOver={(e) => e.currentTarget.style.background = '#5d3d54'}
          onMouseOut={(e) => e.currentTarget.style.background = '#714B67'}
        >
          Enter Act 2 🚀
        </button>

      </div>
    </div>
  );
}