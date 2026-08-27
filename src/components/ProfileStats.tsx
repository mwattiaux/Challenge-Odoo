interface Stat {
  label: string;
  value: string;
}

interface ProfileStatsProps {
  stats: Stat[];
}

export default function ProfileStats({ stats }: ProfileStatsProps) {
  return (
    <div className="profile-section">
      <h4>Vital Statistics 📊</h4>
      <ul className="stats-list">
        {stats.map((stat, idx) => (
          <li key={idx}>
            <strong>{stat.label}:</strong> {stat.value}
          </li>
        ))}
      </ul>
    </div>
  );
}