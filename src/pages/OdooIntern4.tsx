import InternTemplate from "../components/InternTemplate";
import InternProfileCard from "../components/InternProfileCard";

interface OdooIntern4Props {
  onUnlockNext: () => void;
}

export default function OdooIntern4({ onUnlockNext }: OdooIntern4Props) {
  return (
    <InternTemplate
      levelNumber={4}
      internName="Valentyn Dementiev"
      internRole='Chief "It Works On My Machine" Officer'
      nextRoute="/level5"
      onUnlockNext={onUnlockNext}
      content={
        <InternProfileCard
          name="Valentyn"
          subtitle=".NET Full-Stack"
          avatarUrl="https://i.imgur.com/ogorpXd.jpeg"
          bio="Hi, congrats on passing my little task, be ready for even more o_O"
          age="23"
          favoriteShows={["Sopranos 🚬", "Office 💼", "Interns 🏥"]}
          favoriteGames={[
            "Witcher (1/3) ⚔️",
            "Hollow Knight: Silksong 🐝",
            "...and a lot of other, so just check it out STEAMCOMMUNITY.COM/ID/122GEROLD122",
          ]}
          quote="First make it work, then make it right, then make it fast"
          mood="Excitedly waiting"
          stats={[
            {
              label: "Analytics Overthinking 🧠",
              value: "99% Stare-at-Wall Rate",
            },
            { label: "Soda Requirement 🥤", value: "Critically High" },
            {
              label: "Debugging Approach 🔍",
              value: "Print Statements & Fast Iteration",
            },
            { label: "Core Competency ⚙️", value: "Backend & System Logic" },
          ]}
          skills={[
            { name: ".NET / C# ⚡", level: "70%" },
            { name: "Angular / TypeScript 🅰️", level: "55%" },
            { name: "SQL & Databases 🗄️", level: "60%" },
            { name: "Git & Dev Tools 🛠️", level: "75%" },
            { name: "Docker & Infrastructure 🐳", level: "45%" },
          ]}
          projects={[
            {
              title: "Gamebuddy 🎮🇺🇦",
              description:
                "My university capstone project. A team-matching platform to find co-op partners and avoid silent randoms who rush 1v5.",
            },
            {
              title: "Commercial Experience 💼",
              description:
                "Past full-stack development work involving backend logic, database optimization, and microservice architectures.",
            },
          ]}
        />
      }
    />
  );
}
