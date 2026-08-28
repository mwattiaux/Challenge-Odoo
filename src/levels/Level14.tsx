import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';

interface Level14Props {
  onUnlock: () => void;
}

export default function Level1({ onUnlock }: Level14Props) {
  const codeSnippet = `def naive_xor_obfuscate(data: bytes, key: bytes) -> bytes:
    return bytes(b ^ key[i % len(key)] for i, b in enumerate(data))`;

  return (
    <LevelTemplate
      levelNumber={14}
      title="Security Incident: The Odoo Secure Vault Breach"
      subtitle="An unauthorized custom module was deployed on the Odoo production server. Analyze the recovered artifacts to decrypt the hidden flag."
      hintTimerDuration={120}
      
      riddleContent={
        <>
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '12px', 
            border: '1px solid #e5e7eb', 
            padding: '24px', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            marginBottom: '20px',
            textAlign: 'left'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1rem', color: '#1f2937', marginBottom: '8px', fontWeight: 600 }}>
                📋 SOC Analyst Briefing
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5', margin: 0 }}>
                An obfuscated configuration routine was recovered from the server cache alongside a raw encrypted hex dump extracted from the database logs. Database telemetry metadata confirms this record matches internal verification token structures.
              </p>
            </div>
            
            {/* Clean Code Snippet Block */}
            <div style={{ 
              background: '#0f172a', 
              borderRadius: '8px', 
              padding: '16px', 
              fontFamily: 'monospace', 
              fontSize: '0.85rem', 
              color: '#38bdf8', 
              marginBottom: '20px',
              border: '1px solid #334155',
              overflowX: 'auto',
              textAlign: 'left'
            }}>
              <div style={{ color: '#64748b', marginBottom: '8px', borderBottom: '1px solid #1e293b', paddingBottom: '6px', fontSize: '0.75rem' }}>
                // /odoo/custom_addons/secure_vault/models/vault.py
              </div>
              <pre style={{ 
                margin: 0, 
                fontFamily: 'inherit', 
                color: '#e2e8f0', 
                lineHeight: '1.5',
                whiteSpace: 'pre',
                textAlign: 'left'
              }}>
                {codeSnippet}
              </pre>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                Intercepted Ciphertext Stream (Hex):
              </span>
              <div style={{ 
                fontFamily: 'monospace', 
                color: '#714B67', 
                wordBreak: 'break-all', 
                background: '#f8fafc', 
                padding: '12px', 
                borderRadius: '6px', 
                border: '1px solid #e2e8f0',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                textAlign: 'left'
              }}>
                2c 21 2c 2c 1e 52 2c 07 1a 07 00 3c 18 00 1a 0e
              </div>
            </div>

            {/* Environment Policy Notice with explicit prefix */}
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#4b5563', 
              background: '#fef2f2', 
              padding: '10px 14px', 
              borderRadius: '6px', 
              borderLeft: '3px solid #ef4444' 
            }}>
              <strong style={{ color: '#991b1b' }}>⚠️ Environment Policy Notice:</strong> Corporate deployment standards dictate that all internal vault secrets strictly begin with the standard schema prefix: <code style={{ color: '#714B67', fontWeight: 600 }}>ODOO{'{'}</code>
            </div>
          </div>

          <div style={{ textAlign: 'left' }}>
            <ContentText text="Examine the code structure and the data stream to reverse the obfuscation mechanism." />
          </div>

        </>
      }

      // correctAnswer="ODOO{3_byte_key}"
      nextRoute="/level15"
      
      hints={[
        <Hint number={1}>
          <ContentText text="Every symmetric veil leaves traces when an operation is applied back onto itself. Study the mathematical property of the transformation." />
        </Hint>,
        <Hint number={2}>
          <ContentText text="Shadows often echo at fixed intervals when cast against a repetitive cycle. Pay attention to periodicity." />
        </Hint>,
        <Hint number={3}>
          <ContentText text="A known anchor at the horizon can map out an otherwise invisible landscape. Use the environment policy to your advantage." />
        </Hint>,
        <Hint number={4}>
          <ContentText text="When the starting boundary meets the raw stream, the hidden rhythm reveals itself step by step." />
        </Hint>
      ]}
      
      onUnlock={onUnlock}
    />
  );
}