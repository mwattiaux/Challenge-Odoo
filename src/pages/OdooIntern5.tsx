import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import avatarImage from "../assets/beach_jb.jpg";

interface OdooIntern5Props {
  onUnlockNext: () => void;
}

export default function OdooIntern5({ onUnlockNext }: OdooIntern5Props) {
  return (
    <InternTemplate
      levelNumber={5}
      internName="Delvaux Jean-Baptiste"
      internRole="Délégué de l'extrême"
      nextRoute="/level6"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Jean-Baptiste Delvaux"
          subtitle="Délégué attitré"
          avatarUrl={avatarImage}
          bio="Game master extraordinairen, story teller in my lost hours, I have years upon years of time wasting experience. I have a variety of skills and knowledge not possessed by most thought their utility is questionnable. I am also a skittish animal, please avoid loud noises and fireworks nearby."
          age="32"
          favoriteShows={[
            "No Game No Life",
            "Pokemon",
            "Le marin des mers de Chines"
          ]}
          favoriteGames={[
            "Rimworld (I will not talk about it without a lawyer)",
            "Timberborn",
            "Metro serie"
          ]}
          quote="Force answers force, war breeds war, and death only brings death. To break this vicious circle one must do more than just act without any thought or doubt."
          mood="Here is the current mood"
          stats={[
            { label: "Potato chips maxxing", value: "Never enough" },
            { label: "Stat 2", value: "Value 2" },
            { label: "Dumb humor", value: "Inappropriately high" },
            { label: "Sleep per day", value: "Sometime" },
          ]}
          skills={[
            { name: "Binge-watching", level: "40%" },
            { name: "Shame", level: "10%" },
            { name: "Rage quitting", level: "90%" },
            { name: "Game mastering", level: "85%" },
          ]}
          projects={[
            { title: "A new Illumination", description: "Single-handedly managed the successful upgrade and deployment of a new environmental illumination system, with zero-cost overruns and zero safety incidents. " },
            { title: "Communication management", description: "I managed to handle the vast majority of trainee to training center communication, succesfully and while attaining the majority of goals set by the class" }
          ]}
        />
      }
    />
  );
}
