import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';

interface OdooIntern7Props {
  onUnlockNext: () => void;
}

export default function OdooIntern7({ onUnlockNext }: OdooIntern7Props) {
  return (
    <InternTemplate
      levelNumber={7}
      internName="Jérôme Verkyndt"
      internRole="Intern"
      nextRoute="/level8"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          subtitle=''
          name="Jérôme Verkyndt"
          avatarUrl="https://res.cloudinary.com/db7gzoduv/image/upload/v1787839593/Jerome.jpg"
          bio="I have a Bachelor’s degree in Computer Science from EPHEC and I’m passionate about new technologies. I enjoy learning and discovering new things. Outside of IT, I love doing sports, especially cycling, which I enjoy doing with my friends. I also love travelling, stepping out of my comfort zone, and spending quality time with my friends and family."
          age="25"
          favoriteShows={[
            "Prisoners",
            "The Hangover",
            "The Dark Knight"
          ]}
          favoriteGames={[
            "Assassin’s Creed III",
            "Dofus",
            "GTA V"
          ]}
          mood="Happy and motivated to start my internship at Odoo!"
          stats={[
            { label: "Sports", value: "Cycling · Running · Basketball" },
            { label: "Travel", value: "All Around the World 🌎" },
            { label: "Music", value: "Rap · House" },
          ]}
          skills={[
            { name: "Curiosity", level: "95%" },
            { name: "Teamwork", level: "90%" },
            { name: "Transdimensional Quantum Mechanics", level: "1%" },
            { name: "After Work 🍻 (Rank: Challenger)", level: "100%" },
          ]}
          projects={[
            { title: "TFE – Vegetable Basket Management", description: "I developed a web application for a local market gardener in Grez-Doiceau as part of my final-year project. The application enables inventory management and the organization of vegetable basket distribution." },
          ]}
        />
      }
    />
  );
}
