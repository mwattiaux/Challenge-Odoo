import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rules from './pages/Rules';
import TeamTransition from './pages/TeamTransition';
import FinalCongratulations from './pages/FinalCongratulations';
import ProtectedRoute from './components/ProtectedRoute';

// Sandbox / Showcase (Level 0)
import Level0 from './levels/Level0';
import OdooIntern0 from './pages/OdooIntern0';

// Act 1: Levels 1-11 & Intern Profiles 1-11
import Level1 from './levels/Level1';
import OdooIntern1 from './pages/OdooIntern1';
import Level2 from './levels/Level2';
import OdooIntern2 from './pages/OdooIntern2';
import Level3 from './levels/Level3';
import OdooIntern3 from './pages/OdooIntern3';
import Level4 from './levels/Level4';
import OdooIntern4 from './pages/OdooIntern4';
import Level5 from './levels/Level5';
import OdooIntern5 from './pages/OdooIntern5';
import Level6 from './levels/Level6';
import OdooIntern6 from './pages/OdooIntern6';
import Level7 from './levels/Level7';
import OdooIntern7 from './pages/OdooIntern7';
import Level8 from './levels/Level8';
import OdooIntern8 from './pages/OdooIntern8';
import Level9 from './levels/Level9';
import OdooIntern9 from './pages/OdooIntern9';
import Level10 from './levels/Level10';
import OdooIntern10 from './pages/OdooIntern10';
import Level11 from './levels/Level11';
import OdooIntern11 from './pages/OdooIntern11';

// Act 2: Hardcore Levels 12-22
import Level12 from './levels/Level12';
import Level13 from './levels/Level13';
import Level14 from './levels/Level14';
import Level15 from './levels/Level15';
import Level16 from './levels/Level16';
import Level17 from './levels/Level17';
import Level18 from './levels/Level18';
import Level19 from './levels/Level19';
import Level20 from './levels/Level20';
import Level21 from './levels/Level21';
import Level22 from './levels/Level22';

export default function App() {
  const [maxStep, setMaxStep] = useState<number | null>(null);

  // Charger la progression depuis le cookie sécurisé au démarrage
  useEffect(() => {
    fetch('/api/progress')
      .then((res) => res.json())
      .then((data) => {
        setMaxStep(data.maxStep || 2);
      })
      .catch(() => {
        setMaxStep(2);
      });
  }, []);

  // Écran de chargement le temps de lire l'API
  if (maxStep === null) {
    return (
      <div style={{ color: 'white', textAlign: 'center', marginTop: '40vh', fontFamily: 'sans-serif' }}>
        <h2>Chargement de ta progression... 🚀</h2>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Home & Rules */}
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<ProtectedRoute unlocked={maxStep >= 1}><Rules onUnlockNext={() => setMaxStep(2)} /></ProtectedRoute>} />

        {/* LEVEL 0 : Sandbox */}
        <Route path="/level0" element={<Level0 onUnlock={() => console.log("Level 0 sandbox completed!")} />} />
        <Route path="/odoo-intern-0" element={<OdooIntern0 onUnlockNext={() => {}} />} />

        {/* ACT 1 : Levels 1 to 11 */}
        <Route path="/level1" element={<ProtectedRoute unlocked={maxStep >= 2}><Level1 onUnlock={() => setMaxStep(3)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-1" element={<ProtectedRoute unlocked={maxStep >= 3}><OdooIntern1 onUnlockNext={() => setMaxStep(4)} /></ProtectedRoute>} />
        
        <Route path="/level2" element={<ProtectedRoute unlocked={maxStep >= 4}><Level2 onUnlock={() => setMaxStep(5)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-2" element={<ProtectedRoute unlocked={maxStep >= 5}><OdooIntern2 onUnlockNext={() => setMaxStep(6)} /></ProtectedRoute>} />

        <Route path="/level3" element={<ProtectedRoute unlocked={maxStep >= 6}><Level3 onUnlock={() => setMaxStep(7)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-3" element={<ProtectedRoute unlocked={maxStep >= 7}><OdooIntern3 onUnlockNext={() => setMaxStep(8)} /></ProtectedRoute>} />

        <Route path="/level4" element={<ProtectedRoute unlocked={maxStep >= 8}><Level4 onUnlock={() => setMaxStep(9)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-4" element={<ProtectedRoute unlocked={maxStep >= 9}><OdooIntern4 onUnlockNext={() => setMaxStep(10)} /></ProtectedRoute>} />

        <Route path="/level5" element={<ProtectedRoute unlocked={maxStep >= 10}><Level5 onUnlock={() => setMaxStep(11)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-5" element={<ProtectedRoute unlocked={maxStep >= 11}><OdooIntern5 onUnlockNext={() => setMaxStep(12)} /></ProtectedRoute>} />

        <Route path="/level6" element={<ProtectedRoute unlocked={maxStep >= 12}><Level6 onUnlock={() => setMaxStep(13)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-6" element={<ProtectedRoute unlocked={maxStep >= 13}><OdooIntern6 onUnlockNext={() => setMaxStep(14)} /></ProtectedRoute>} />

        <Route path="/level7" element={<ProtectedRoute unlocked={maxStep >= 14}><Level7 onUnlock={() => setMaxStep(15)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-7" element={<ProtectedRoute unlocked={maxStep >= 15}><OdooIntern7 onUnlockNext={() => setMaxStep(16)} /></ProtectedRoute>} />

        <Route path="/level8" element={<ProtectedRoute unlocked={maxStep >= 16}><Level8 onUnlock={() => setMaxStep(17)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-8" element={<ProtectedRoute unlocked={maxStep >= 17}><OdooIntern8 onUnlockNext={() => setMaxStep(18)} /></ProtectedRoute>} />

        <Route path="/level9" element={<ProtectedRoute unlocked={maxStep >= 18}><Level9 onUnlock={() => setMaxStep(19)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-9" element={<ProtectedRoute unlocked={maxStep >= 19}><OdooIntern9 onUnlockNext={() => setMaxStep(20)} /></ProtectedRoute>} />

        <Route path="/level10" element={<ProtectedRoute unlocked={maxStep >= 20}><Level10 onUnlock={() => setMaxStep(21)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-10" element={<ProtectedRoute unlocked={maxStep >= 21}><OdooIntern10 onUnlockNext={() => setMaxStep(22)} /></ProtectedRoute>} />

        <Route path="/level11" element={<ProtectedRoute unlocked={maxStep >= 22}><Level11 onUnlock={() => setMaxStep(23)} /></ProtectedRoute>} />
        <Route path="/odoo-intern-11" element={<ProtectedRoute unlocked={maxStep >= 23}><OdooIntern11 onUnlockNext={() => setMaxStep(24)} /></ProtectedRoute>} />

        {/* TEAM TRANSITION */}
        <Route path="/team-transition" element={<ProtectedRoute unlocked={maxStep >= 24}><TeamTransition onUnlockNext={() => setMaxStep(25)} /></ProtectedRoute>} />

        {/* ACT 2 : Levels 12 to 22 */}
        <Route path="/level12" element={<ProtectedRoute unlocked={maxStep >= 25}><Level12 onUnlock={() => setMaxStep(26)} /></ProtectedRoute>} />
        <Route path="/level13" element={<ProtectedRoute unlocked={maxStep >= 26}><Level13 onUnlock={() => setMaxStep(27)} /></ProtectedRoute>} />
        <Route path="/level14" element={<ProtectedRoute unlocked={maxStep >= 27}><Level14 onUnlock={() => setMaxStep(28)} /></ProtectedRoute>} />
        <Route path="/level15" element={<ProtectedRoute unlocked={maxStep >= 28}><Level15 onUnlock={() => setMaxStep(29)} /></ProtectedRoute>} />
        <Route path="/level16" element={<ProtectedRoute unlocked={maxStep >= 29}><Level16 onUnlock={() => setMaxStep(30)} /></ProtectedRoute>} />
        <Route path="/level17" element={<ProtectedRoute unlocked={maxStep >= 30}><Level17 onUnlock={() => setMaxStep(31)} /></ProtectedRoute>} />
        <Route path="/level18" element={<ProtectedRoute unlocked={maxStep >= 31}><Level18 onUnlock={() => setMaxStep(32)} /></ProtectedRoute>} />
        <Route path="/level19" element={<ProtectedRoute unlocked={maxStep >= 32}><Level19 onUnlock={() => setMaxStep(33)} /></ProtectedRoute>} />
        <Route path="/level20" element={<ProtectedRoute unlocked={maxStep >= 33}><Level20 onUnlock={() => setMaxStep(34)} /></ProtectedRoute>} />
        <Route path="/level21" element={<ProtectedRoute unlocked={maxStep >= 34}><Level21 onUnlock={() => setMaxStep(35)} /></ProtectedRoute>} />
        <Route path="/level22" element={<ProtectedRoute unlocked={maxStep >= 35}><Level22 onUnlock={() => setMaxStep(37)} /></ProtectedRoute>} />

        {/* FINAL CONGRATULATIONS */}
        <Route path="/congratulations" element={<ProtectedRoute unlocked={maxStep >= 36}><FinalCongratulations /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}