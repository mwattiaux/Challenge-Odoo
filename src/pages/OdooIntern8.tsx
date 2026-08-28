import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';

interface OdooIntern8Props {
  onUnlockNext: () => void;
}

export default function OdooIntern8({ onUnlockNext }: OdooIntern8Props) {
  return (
    <InternTemplate
      levelNumber={8}
      internName="Maxime Nabli"
      internRole="The Second Maxime"
      nextRoute="/level9"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Maxime Nabli"
          subtitle="Developer"
          avatarUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
          bio="I'll be the kind of coworker that is Never Gonna Give You Up, Never Gonna Let You Down, Never Gonna Run Around and Desert You. I also play League of Legends way too much, watch a lot of anime and love Baldur's Gate 3. I also make a lot of puns but they are not always good"
          age="25"
          favoriteShows={[
            "Jojo's Bizarre Adventure",
            "Frieren: Beyond Journey's End",
            "Chainsaw Man",
            "Dark",
            "Dragon Ball Z",
          ]}
          favoriteGames={[
            "Baldur's Gate 3",
            "League of Legends",
            "The Legend of Zelda: Ocarina of Time",
            "Wuthering Waves",
            "Pokemon Ultra Moon",
          ]}
          quote="I used to be an adventurer like you, then I took an arrow to the knee"
          mood="Excited for the Odoo internship and to meet the team!"
          stats={[
            { label: "D&D Class", value: "Bard" },
            { label: "Sleep Schedule", value: "Messed up" },
            { label: "Last concert attended", value: "Hatsune Miku" },
            { label: "Favorite Coffee at the Cofeo Machine", value: "Café Noisette" },
            { label: "Favorite League of Legends Champions", value: "Ahri, Cassiopeia & Kayle" },
          ]}
          skills={[
            { name: "Farming 1M Mastery Points on my League of Legends mains", level: "100%" },
            { name: "Python & Backend Development", level: "90%" },
            { name: "Professional pun creator (not always good puns)", level: "85%" },
            { name: "Writing and reading documentation", level: "100%" },
            { name: "Solving Rubik's Cube & similar puzzles", level: "80%" },
          ]}
          projects={[
            { title: "Cooking Recipes App", description: "App to keep track of my home's cooking recipes." },
            { title: "League of Legends Random Skin Picker", description: "Simple app to pick random skins for League of Legends." }
          ]}
        />
      }
    />
  );
}
