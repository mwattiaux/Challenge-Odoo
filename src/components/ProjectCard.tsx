interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="project-box">
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}