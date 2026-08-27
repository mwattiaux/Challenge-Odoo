import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import avatarImage from "../assets/level1/C.M FK9.png";

interface OdooIntern1Props {
  onUnlockNext: () => void;
}

export default function OdooIntern1({ onUnlockNext }: OdooIntern1Props) {
  return (
    <InternTemplate
      levelNumber={1}
      internName="Cailleaux Maxime"
      internRole="Developer"
      nextRoute="/level2"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Maxime"
          subtitle=""
          avatarUrl={avatarImage}
          bio="Congrats! You’ve just discovered one of the greatest nemeses of my favorite hobby: the Door, a legendary foe in tabletop role-playing games.
           Nice to meet you!"
          age="29"
          favoriteShows={[
            "Lords of The Rings",
            "Parasite the Maxim",
            "The Expanse"
          ]}
          favoriteGames={[
            "Binding of Isaac",
            "Warhammer games",
            "Sim Racing"
          ]}
          quote="I'm the fatest to go at my own rythm."
          mood="Rolling for intiative for the intership !"
          stats={[
              { label: "Coding Fuel", value: "Hot chocolate & Bad Ideas" },
              { label: "D&D Experience", value: "Forever DM 🎲" },
              { label: "Bug Solving", value: "Works on My Machine™" },
              { label: "New Quest", value: "Odoo 🚀" },
          ]}
          skills={[
              { name: "Writing documentation", level: "100%" },
              { name: "Flying ULM (3Axis)", level: "90%" },
              { name: "Turning bugs into features", level: "80%" },
              { name: "Pretending I Understand Git", level: "76%" },
              { name: "Cooking (With indications !)",level: "55%"}
          ]}
          projects={[
            { title: "Traumarena", description: "A versus fighting video-game on Unreal Engine " +
                    "https://www.youtube.com/watch?v=pLVagZ8gtrg" },
            { title: "Connect'a", description: "An angular app, to facilitate finding manual professionals" }
          ]}
        />
      }
    />
  );
}
