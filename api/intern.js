import crypto from 'crypto';

const SECRET_KEY = process.env.GAME_SECRET || 'perecastor';

function signData(data) {
  return crypto.createHmac('sha256', SECRET_KEY).update(data).digest('hex');
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { levelNumber } = req.body;
  const levelNum = parseInt(levelNumber, 10);

  if (isNaN(levelNum)) {
    return res.status(400).json({ success: false, error: 'Invalid level number' });
  }

  // Pour les pages d'internes, on calcule l'étape suivante (ex: après intern 1, on débloque level 2 qui demande 4)
  // Si levelNum = 1, on veut passer maxStep à 4 (pour débloquer le level 2 qui demande 4)
  const nextMaxStep = (levelNum + 1) * 2; 

  const payload = `${nextMaxStep}`;
  const signature = signData(payload);
  const token = `${payload}.${signature}`;

  res.setHeader(
    'Set-Cookie', 
    `game_progress=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`
  );

  return res.status(200).json({ success: true, nextMaxStep });
}