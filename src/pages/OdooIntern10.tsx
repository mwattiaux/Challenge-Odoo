import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import arthurPP from "../assets/images/arthur-pp.jpg";

interface OdooIntern10Props {
  onUnlockNext: () => void;
}

export default function OdooIntern10({ onUnlockNext }: OdooIntern10Props) {
  return (
    <InternTemplate
      levelNumber={10}
      internName="Arthur De Clerck"
      internRole="Future Odoo Developer (Hopefully)"
      nextRoute="/level11"
      onUnlockNext={onUnlockNext}

      content={
        <InternProfileCard
          name="Arthur De Clerck"
          subtitle="Full Stack Developer"
          avatarUrl={arthurPP}
          bio="Heir of the legendary king Arthur (only in name nothing else), this one didn't take the sword from the stone but he did take the challenge of becoming a Developer."
          age="24"
          favoriteShows={[
            "One Piece",
            "Bleach",
            "Full Metal Alchemist",
          ]}
          favoriteGames={[
            "Europa Universalis IV",
            "Cyberpunk 2077",
            "Rocket League",
          ]}
          quote="It's impossible to know that it won't work if you don't try. (especially in coding)"
          mood="Hopeful and excited for the internship."
          stats={[
            { label: "BPM", value: "85" },
            { label: "Steps", value: "7000" },
            { label: "Stress Level", value: "Over 9000" },
            { label: "Alive", value: "I think so" },
          ]}
          skills={[
            { name: "Python", level: "85%" },
            { name: "Javascript", level: "85%" },
            { name: "C#", level: "90%" },
            { name: "Java", level: "70%" },
          ]}
          projects={[
            { title: "Portfolio", description: "I made my own website on which I showcase my projects. (arthur-declerck.be)" }
          ]}
        />
      }
    />
  );
}
