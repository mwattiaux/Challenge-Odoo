import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleStart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/rules'); // 👈 Modifié ici pour pointer vers /rules
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Reverse Odoo Challenge</h1>
        <h2>Technofutur TIC - Gosselies 2026</h2>
        
        <a href="/rules" onClick={handleStart} className="btn-start">
          Start the CTF
        </a>
      </div>
    </div>
  );
}