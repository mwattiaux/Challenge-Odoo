import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import corentinAvatar from '../assets/corentin_leonet_avatar.png';

interface OdooIntern11Props {
  onUnlockNext: () => void;
}

export default function OdooIntern11({ onUnlockNext }: OdooIntern11Props) {
  return (
    <InternTemplate
      levelNumber={11}
      internName="Corentin Léonet"
      internRole="Intern developper"
      nextRoute="/team-transition"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Corentin Léonet"
          subtitle="Junior software developper"
          avatarUrl={corentinAvatar}
          bio="Backend developer and grand strategy enthusiast. Prefers systems and people that fail loudly and predictably."
          age="29"
          favoriteShows={[
            "Naruto",
            "The Expanse",
            "Mob Psycho 100"
          ]}
          favoriteGames={[
            "EU4",
            "Hoi4",
            "CK2",
            "Stellaris",
            "Smite",
            "Minecraft (GTNH)"
          ]}
          quote="You win some, you lose some. But man, I hate losing. - Joey Wheeler"
          mood="Suspiciously convinced this can be automated"
          stats={[
            { label: "Grand Strategy hours", value: "Over 9000!" },
            { label: "Smite rank", value: "Not high enough" },
            { label: "Sleep Hours", value: "DLC required" },
            { label: "Dog enthusiasm", value: "Stat overflow" },
          ]}
          skills={[
            { name: "Backend & Data Manipulation", level: "90%" },
            { name: "Python", level: "85%" },
            { name: "Decision-Making (mostly correct)", level: "85%" },
          ]}
          projects={[
            { title: "Order Management", description: "Order management web application built with Python, Flask and SQLAlchemy." },
            { title: "Temperature Alert", description: "Web application built with PHP and Yii2 that monitors the average temperature over the last 3 days and sends an email alert when Belgian tire-change regulations are triggered." }
          ]}
        />
      }
    />
  );
}