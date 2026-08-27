interface ProjectCardProps {
    title: string;
    description: string;
    url?: string;
}

export default function ProjectCard({ title, description, url }: ProjectCardProps) {
    return (
        <div className="project-box">
            <a href={url} target="_blank"
            ><strong>{title}</strong></a>
            <p>{description}</p>
        </div>
    );
}
