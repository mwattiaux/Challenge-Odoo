import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';

interface OdooIntern0Props {
  onUnlockNext: () => void;
}

export default function OdooIntern0({ onUnlockNext }: OdooIntern0Props) {
  return (
    <InternTemplate
      levelNumber={0}
      internName="Test Intern (Sandbox)"
      internRole="Official System Guinea Pig"
      nextRoute="/level1"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Test Intern"
          subtitle="ALEX D. | The Sandbox Sorcerer"
          avatarUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
          bio="Congratulations, you survived Level 0! You now master the art of using test components. Get ready, the real challenges are about to begin..."
          age="24 (in commit years)"
          favoriteShows={[
            "Silicon Valley (for realistic trauma)",
            "The Matrix (dodging bugs daily)",
            "Mr. Robot (pretending to type fast)"
          ]}
          favoriteGames={[
            "The Witcher 3 (just for Gwent)",
            "Cyberpunk 2077 (for bug research)",
            "Factorio (because code is just logistics)"
          ]}
          quote="It's not a bug, it's an undocumented feature."
          mood="Ready to break production on a Friday night"
          stats={[
            { label: "Caffeine Level", value: "99% ☕" },
            { label: "Bugs Encountered", value: "0 (for now)" },
            { label: "Sleep Hours", value: "404 Error 🌙" },
            { label: "Stack Overflow", value: "Owner 🏠" },
          ]}
          skills={[
            { name: "React / Vite (Expert)", level: "95%" },
            { name: "Copy-Pasting Code", level: "100%" },
            { name: "Puzzle Solving", level: "80%" },
            { name: "Odoo Framework", level: "90%" },
          ]}
          projects={[
            { title: "Sandbox Engine", description: "The ultimate testing system to validate components." },
            { title: "Test Bot v1", description: "AI designed to click frantically everywhere." }
          ]}
        />
      }
    />
  );
}