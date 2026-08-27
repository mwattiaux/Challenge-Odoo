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
      internName="Here is the Intern Name"
      internRole="Here is the Intern Role / Title"
      nextRoute="/level11"
      onUnlockNext={onUnlockNext}

      content={
        <InternProfileCard
          name="Arthur De Clerck"
          subtitle="Full Stack Developer"
          avatarUrl={arthurPP}
          bio="Here is the main biography description of the intern for level 10. Refer to Level 0 for example structure and tone."
          age="24"
          favoriteShows={[
            "Here is show 1",
            "Here is show 2",
            "Here is show 3"
          ]}
          favoriteGames={[
            "Here is game 1",
            "Here is game 2",
            "Here is game 3"
          ]}
          quote="Here is a funny quote or catchphrase."
          mood="Here is the current mood"
          stats={[
            { label: "Stat 1", value: "Value 1" },
            { label: "Stat 2", value: "Value 2" },
            { label: "Stat 3", value: "Value 3" },
            { label: "Stat 4", value: "Value 4" },
          ]}
          skills={[
            { name: "Skill 1", level: "80%" },
            { name: "Skill 2", level: "90%" },
            { name: "Skill 3", level: "70%" },
            { name: "Skill 4", level: "85%" },
          ]}
          projects={[
            { title: "Project 1 Title", description: "Here is the description of project 1." },
            { title: "Project 2 Title", description: "Here is the description of project 2." }
          ]}
        />
      }
    />
  );
}
