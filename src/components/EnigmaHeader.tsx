interface PuzzleHeaderProps {
  levelNumber: number;
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export default function PuzzleHeader({ levelNumber, title, subtitle, imageUrl }: PuzzleHeaderProps) {
  return (
    <>
      <h1>Level {levelNumber}: {title}</h1>
      <p className="subtitle">{subtitle}</p>

      {imageUrl && (
        <div className="puzzle-image-box">
          <img src={imageUrl} alt="Riddle visual" className="puzzle-img" />
        </div>
      )}
    </>
  );
}