export default function ContentImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ margin: '15px 0', textAlign: 'center' }}>
      <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', border: '1px solid #e5e7eb' }} />
    </div>
  );
}