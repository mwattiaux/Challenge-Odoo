import './ContentAudio.css';

interface ContentAudioProps {
  src: string;
}

export default function ContentAudio({ src }: ContentAudioProps) {
  return (
    <div className="content-audio-container">
      <audio controls className="content-audio-player">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}