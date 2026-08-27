import fs from 'fs';
import path from 'path';

const totalLevels = 22;
const outputDir = path.resolve('src/levels'); // Vérifie bien si c'es 'src/levels' ou 'src/pages'

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🚀 Démarrage de la génération des niveaux...');

for (let i = 1; i <= totalLevels; i++) {
  let nextRoute;
  if (i <= 10) {
    nextRoute = `/odoo-intern-${i}`;
  } else if (i < totalLevels) {
    nextRoute = `/level${i + 1}`;
  } else {
    nextRoute = `/congratulations`;
  }
  
  const fileContent = `import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import ContentAudio from '../components/ContentAudio';
import ContentVideo from '../components/ContentVideo';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface Level${i}Props {
  onUnlock: () => void;
}

export default function Level${i}({ onUnlock }: Level${i}Props) {
  return (
    <LevelTemplate
      levelNumber={${i}}
      title="Here is the title"
      subtitle="Here is the subtitle / description of the level."
      hintTimerDuration={10}
      
      riddleContent={
        <>
          <ComponentLabel name="ContentText" />
          <ContentText text="Here is the enigma description for Level ${i}. Refer to Level 0 for example structure." />
          
          <ComponentLabel name="ContentImage" />
          <ContentImage 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" 
            alt="Placeholder" 
          />

          <div style={{ marginTop: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
            🔑 <strong>Test Answer :</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#714B67' }}>test</span>
          </div>
        </>
      }

      correctAnswer="test"
      nextRoute="${nextRoute}"
      
      hints={[
        <Hint number={1}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="Here is hint 1 for level ${i}." />
        </Hint>,
        
        <Hint number={2}>
          <ComponentLabel name="ContentText inside Hint" />
          <ContentText text="Here is hint 2 for level ${i}." />
        </Hint>,
        
        <Hint number={3}>
          <ComponentLabel name="ContentAudio inside Hint" />
          <ContentText text="Here is hint 3 with audio." />
          <ContentAudio src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        </Hint>,

        <Hint number={4}>
          <ComponentLabel name="ContentVideo inside Hint" />
          <ContentText text="Here is hint 4 with video." />
          <ContentVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}
`;

  const filePath = path.join(outputDir, `Level${i}.tsx`);
  
  // Utilisation explicite d'écriture synchrone avec encodage UTF-8 forcé
  fs.writeFileSync(filePath, fileContent, { encoding: 'utf-8', flag: 'w' });
  
  // Petite vérification immédiate que le fichier n'est pas vide sur le disque
  const stats = fs.statSync(filePath);
  if (stats.size > 0) {
    console.log(`✅ Level${i}.tsx généré avec succès (${stats.size} octets)`);
  } else {
    console.error(`❌ ERREUR : Level${i}.tsx est vide !`);
  }
}

console.log('🎉 Génération de tous les niveaux terminée !');