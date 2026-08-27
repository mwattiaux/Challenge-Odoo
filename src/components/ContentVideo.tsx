export default function ContentVideo({ src }: { src: string }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, margin: '15px 0', overflow: 'hidden', borderRadius: '8px' }}>
      <iframe 
        src={src} 
        title="Video content"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        allowFullScreen
      />
    </div>
  );
}