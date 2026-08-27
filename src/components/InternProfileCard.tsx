import ProfileStats from './ProfileStats';
import PopCultureBox from './PopCultureBox';
import SkillBar from './SkillBar';
import ProjectCard from './ProjectCard';
import './InternProfileCard.css';

interface Stat { label: string; value: string; }
interface Skill { name: string; level: string; }
interface Project { title: string; description: string; }

interface InternProfileCardProps {
  name: string;
  subtitle: string;
  avatarUrl: string;
  bio: string;
  age?: number | string;
  favoriteShows?: string[];
  favoriteGames?: string[];
  stats: Stat[];
  skills: Skill[];
  projects: Project[];
  quote?: string;
  mood?: string;
}

export default function InternProfileCard({
  name,
  subtitle,
  avatarUrl,
  bio,
  age,
  favoriteShows,
  favoriteGames,
  stats,
  skills,
  projects,
  quote,
  mood,
}: InternProfileCardProps) {
  return (
    <div className="profile-card-wrapper">
      <div className="profile-header-tag">{subtitle}</div>
      
      <div className="profile-card-main">
        
        {/* Colonne de gauche */}
        <div className="profile-left-col">
          <div className="profile-avatar-box">
            <img src={avatarUrl} alt={name} />
          </div>
          <div className="profile-name-footer">{name} {age ? `(${age} years old)` : ''}</div>

          <ProfileStats stats={stats} />

          {mood && (
            <div className="profile-mood-badge">
              🎯 <strong>Current Mood:</strong> {mood}
            </div>
          )}
        </div>

        {/* Colonne de droite */}
        <div className="profile-right-col">
          <div className="profile-section">
            <h4>DEVELOPER / GEEK PROFILE</h4>
            <h3>Hello, I'm {name.split(' ')[0]}!</h3>
            <p className="profile-bio">{bio}</p>
          </div>

          <PopCultureBox title="🎬 Pop-Corn Favorites:" items={favoriteShows || []} />
          <PopCultureBox title="🎮 Gaming Stack:" items={favoriteGames || []} />

          {quote && (
            <div className="profile-quote-box">
              <p>"{quote}"</p>
            </div>
          )}
        </div>

      </div>

      {/* Section du bas (Skills & Projets) */}
      <div className="profile-bottom-grid">
        <div className="profile-section">
          <h4>Skills ❤️</h4>
          <div className="skills-bars">
            {skills.map((skill, idx) => (
              <SkillBar key={idx} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        <div className="profile-section">
          <h4>Fun Projects 🚀</h4>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <ProjectCard key={idx} title={proj.title} description={proj.description} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}