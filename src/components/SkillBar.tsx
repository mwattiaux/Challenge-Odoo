interface SkillBarProps {
  name: string;
  level: string;
}

export default function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: level }}></div>
      </div>
    </div>
  );
}