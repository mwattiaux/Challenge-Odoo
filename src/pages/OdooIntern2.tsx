import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import './OdooIntern2.css';

interface OdooIntern2Props {
  onUnlockNext: () => void;
}

export default function OdooIntern2({ onUnlockNext }: OdooIntern2Props) {
  return (
    <InternTemplate
      levelNumber={2}
      internName="Aaron is about to introduce you to his dog."
      internRole="Do try to contain your excitement."
      nextRoute="/level3"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Yuna"
          avatarUrl="./src/assets/images/alondot/Yuna.jpg"
          bio="Wouf ! I am a very good girl, and I love to play with my human. I am very loyal and protective, but I also love to cuddle."
          age="1"
          favoriteSnacks={[
              "🦴 Dental chew bones",
              "🍟 Fries from the table",
              "🍗 Chicken treats — the forbidden luxury"
          ]}
          favoriteGames={[
              "🎾 Fetch (she brings it back 30% of the time)",
              "😼 Wrestling the cat (the cat disagrees)",
              "🕵️ Hide and seek with daddy",
              "🌳 Zoomies around trees at full speed"
          ]}
          quote="Are we going for a walk, or shall I simply cause problems?"
          mood="Excited and ready to play!"
          stats={[
              { label: "🐾 Zoomies per day", value: "∞" },
              { label: "🧦 Socks stolen", value: "47 (and counting)" },
              { label: "😴 Nap hours", value: "16h/day" },
              { label: "❤️ Cuddles given", value: "All of them" },
          ]}

          skills={[
              { name: "Being adorable", level: "100%" },
              { name: "Selective hearing", level: "95%" },
              { name: "Sit & stay (when bribed)", level: "75%" },
              { name: "Not eating the cat's food", level: "12%" },
          ]}

          projects={[
              { title: "Bark at the Wind 🌬️", description: "A research initiative studying whether barking at invisible threats actually works. Results: inconclusive, but ongoing." }
          ]}
        />
      }
    />
  );
}
