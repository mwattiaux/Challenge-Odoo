import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import denis from '../assets/images/denismth/Denis.jpg';

interface OdooIntern6Props {
  onUnlockNext: () => void;
}

export default function OdooIntern6({ onUnlockNext }: OdooIntern6Props) {
  return (
    <InternTemplate
      levelNumber={6}
      internName="Denis MATHIEU"
      internRole="Developer"
      nextRoute="/level7"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Denis MATHIEU"
          subtitle="Developer"
          avatarUrl={denis}
          bio="Hello, I see you found the password, I hope I'll be able to pass your own challenges at Odoo ! I'm always up to learning new things and experimenting with new technologies."
          age="25"
          favoriteShows={[
            "Iron Man",
            "How to train your Dragon",
            "How I met your mother"
          ]}
          favoriteGames={[
            "Warframe",
            "Minecraft",
            "Genshin Impact"
          ]}
          quote="Always staying positive !"
          mood="Excited to start working !"
          stats={[
            { label: "Sport", value: "Preparing for a marathon" },
            { label: "Eating", value: "Pasta, pasta and...more pasta !" },
            { label: "Music", value: "Movie soundtracks mostly" },
            { label: "Group", value: "Going out and making friends" },
          ]}
          skills={[
            { name: "Cooking (mostly desserts)", level: "90%" },
            { name: "Drawing", level: "70%" },
            { name: "Woodworking", level: "80%" },
            { name: "Binge Watching", level: "85%" },
          ]}
          projects={[
            { title: "L'Ourson Enrhumé", description: "A schedule manager for child services at home with distance handling." },
            { title: "Artifacts app", description: "A mobile app to manage my characters on the artifactsMMO API-call based game." }
          ]}
        />
      }
    />
  );
}
