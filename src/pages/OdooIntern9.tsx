import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import './OdooIntern9.css';

interface OdooIntern9Props {
    onUnlockNext: () => void;
}

export default function OdooIntern9({ onUnlockNext }: OdooIntern9Props) {
    return (
        <InternTemplate
            levelNumber={9}
            internName="Alexandre Pirmez"
            internRole="Developer"
            nextRoute="/level10"
            onUnlockNext={onUnlockNext}

            content={
                <InternProfileCard
                    name="Alexandre Pirmez"
                    subtitle="developer"
                    avatarUrl="/src/assets/alexandre_pirmez_image_profile.png"
                    bio="Congratulations on this one! A harder one will come soon!"
                    age="27"
                    favoriteShows={[
                        "Gurren Lagann",
                        "Arcane",
                    ]}
                    favoriteGames={[
                        "Dofus",
                        "Yugioh",
                        "The binding of Isaac"
                    ]}
                    mood="Excited to start this internship and learn new things!"
                    stats={[
                        { label: "Morning coffee", value: "black" },
                        { label: "Living environment", value: "The terminal" },
                        { label: "Activity during compilation", value: "Rubik's cube" },
                    ]}
                    skills={[
                        { name: "Python", level: "100%" },
                        { name: "Linux", level: "90%" },
                        { name: "DevOps", level: "60%" },
                        { name: "Rubik's cube", level: "101%" },
                    ]}
                    projects={[
                        { title: "Windofman", description: "A light utility for ordering and switching between multiple window of the game Dofus.", url: "https://github.com/Rs-appez/windofman" },
                        { title: "Automated bot", description: "Automated bot for a rpg game that we play with api calls.", url: "https://github.com/Rs-appez/artifactsmmo" },
                    ]}
                />
            }
        />
    );
}
