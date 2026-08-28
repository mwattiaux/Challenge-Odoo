import InternTemplate from '../components/InternTemplate';
import InternProfileCard from '../components/InternProfileCard';
import maximeAvatar from '../assets/maxime.png';

interface OdooIntern3Props {
  onUnlockNext: () => void;
}

export default function OdooIntern3({ onUnlockNext }: OdooIntern3Props) {
  return (
    <InternTemplate
      levelNumber={3}
      internName="Maxime Wattiaux"
      internRole="Software Development Intern"
      nextRoute="/level4"
      onUnlockNext={onUnlockNext}
      
      content={
        <InternProfileCard 
          name="Maxime Wattiaux"
          subtitle="Development Department"
          avatarUrl={maximeAvatar}
          bio="Civil electrical engineer by trade, though my master's degree ended up looking way more like a deep dive into computer science, digital electronics, and cybersecurity. I skipped high-voltage stuff to focus on what I actually love: backend code, secure architectures, and breaking (then fixing) things. Now, fueled by zero coffee and plenty of math, I'm diving headfirst into Odoo—while cautiously trying not to anger the CSS frontend dragon as a pure-backend survivor!"
          age="30"
          favoriteShows={[
            "Prison Break (GOAT ever)",
            "Sinister",
            "Jurassic Park"
          ]}
          favoriteGames={[
            "The Last of Us (Best story)",
            "The Legend of Zelda (All of them, except those weird Philips CD-i abominations)",
            "Kingdom Hearts"
          ]}
          quote="Laziness is the mother of invention; automation is its masterpiece."
          mood="Counting down the seconds until I finally start my internship at Odoo 🚀"
          stats={[
            { label: "Coffee/Day", value: "0 (Yes, a rare dev species)" },
            { label: "Code Comments", value: "1% (Self-documenting, trust me bro)" },
            { label: "Semicolon Panic", value: "42 / day" },
            { label: "Git Force Push", value: "0 (Only on Fridays)" },
            { label: "Merge Conflicts", value: "99 (With tears and prayer)" },
          ]}
          skills={[
            { name: "Python / C Backend", level: "80%" },
            { name: "Frontend Tech (Pure Back survivor discovering CSS magic)", level: "15%" },
            { name: "SQL (Databases)", level: "80%" },
            { name: "Digital Electronics & FPGA", level: "70%" },
            { name: "Cybersecurity & Cryptanalysis", level: "65%" },
            { name: "Mathematics & Logic", level: "75%" },
            { name: "🎯 Interest: Cybersecurity & Crypto", level: "Passion" },
            { name: "🎯 Interest: Cryptosphere & Blockchain", level: "Active" },
            { name: "🎯 Interest: Video Games & Board Games", level: "Hobby" },
            { name: "🎯 Interest: Martial Arts", level: "Discipline" },
          ]}
          projects={[
            { 
              title: "Distributed FPGA Retro Multiplayer Game", 
              description: "Built from scratch with 3 peers: a custom old-school Pac-Man multiplayer game running on 2 Intel/Altera Cyclone FPGAs connected to touchscreens. Leveraged Qsys/Platform Designer to instantiate a NIOS II soft-core processor, an Avalon bus interconnect, and µC/OS-II RTOS running pure C. Synchronized in real-time across Wi-Fi using 2 Raspberry Pi nodes." 
            },
            { 
              title: "Sei Network NFT Minting Bot (Attempt)", 
              description: "Teamed up with random crypto-sphere strangers to build a high-speed minting bot. Spoiler: it worked, but against infrastructure whales and dedicated nodes, we quickly discovered we were decidedly *not* the fastest fish in the ocean." 
            },
            { 
              title: "Cursed Android Dating App (University Project)", 
              description: "Developed a wildly bizarre Android dating app from scratch for a university assignment. Matched users based on completely unhinged, questionable metrics. We got top grades for the architecture, but humanity collectively lost a bit of soul that day." 
            }
          ]}
        />
      }
    />
  );
}