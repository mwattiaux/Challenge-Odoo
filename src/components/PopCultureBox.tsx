interface PopCultureBoxProps {
  title: string;
  items: string[];
}

export default function PopCultureBox({ title, items }: PopCultureBoxProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="profile-section pop-culture-box">
      <p className="pop-culture-title">{title}</p>
      <ul className="pop-culture-list">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}