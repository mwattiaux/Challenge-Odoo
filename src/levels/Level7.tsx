import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';

interface Level7Props {
  onUnlock: () => void;
}

export default function Level7({ onUnlock }: Level7Props) {
  return (
    <LevelTemplate
      levelNumber={7}
      title="What is my first name ?"
      subtitle="RegexGame"
      hintTimerDuration={10}
      
      riddleContent={
        <>
          <div style={{ marginTop: '20px', marginBottom: '20px', padding: '12px', background: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #714B67', fontSize: '0.9rem', color: '#374151' }}>
            🔑 <strong>The key :</strong> <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: '#714B67' }}>^(?=.{6}$)(?=.*ô)(?=.*é).+$</span>
          </div>
          <ContentText text="Alexandre, Alexis, Alice, Alicia, Alix, Amélie, Anaïs, André, Angèle, Anthony, Antoine, Arthur, Aurélie, Axel, Baptiste, Béatrice, Benjamin, Bernard, Brigitte, Camille, Caroline, Catherine, Cédric, Célestin, Céline, Charles, Charlotte, Chloé, Christophe, Clara, Clémence, Clément, Coralie, Damien, Daniel, David, Denis, Diane, Dominique, Édouard, Élise, Élodie, Émilie, Éric, Estelle, Ethan, Eva, Fabien, Fanny, Félix, Florence, François, Gabriel, Gaspard, Geoffrey, Gérald, Gérard, Guillaume, Hélène, Henri, Hugo, Inès, Isabelle, Jacques, Jade, Jean, Jérôme, Jérémie, Joël, Jonathan, Joseph, Joséphine, Jules, Julia, Julien, Justine, Kevin, Laura, Laurence, Léa, Léo, Léon, Léonie, Liam, Lilou, Lola, Louise, Lucas, Lucie, Maëlle, Manon, Marc, Marcel, Margaux, Marie, Marion, Martin, Mathieu, Maxime, Mélanie, Michel" />
          
          

        
        </>
      }

      correctAnswer="Jérôme"
      nextRoute="/odoo-intern-7"
      
      hints={[
        <Hint number={1}>
          <ContentText text="This is a regular expression (Regex)." />
        </Hint>,
        <Hint number={2}>
          <ContentText text="Count the characters." />
        </Hint>,
        <Hint number={3}>
          <ContentText text="The accents matter." />
        </Hint>,
        <Hint number={4}>
          <ComponentLabel name="ContentVideo inside Hint" />
          <ContentText text="Here is hint 4 with video." />
          <ContentImage src="https://upload.wikimedia.org/wikipedia/commons/9/90/J%C3%A9r%C3%B4me_Commandeur_C%C3%A9sar_2016.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Photo de Jérôme Commandeur" />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}
