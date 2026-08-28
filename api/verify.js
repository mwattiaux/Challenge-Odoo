import crypto from 'crypto';

const SECRET_KEY = process.env.GAME_SECRET || 'perecastor';

const correctAnswers = {
  1: "test", 2: "test", 3: "test", 4: "test", 5: "test",
  6: "test", 7: "test", 8: "test", 9: "test", 10: "test",
  11: "test", 12: "test", 13: "test", 14: "test", 15: "test",
  16: "test", 17: "test", 18: "test", 19: "test", 20: "test",
  21: "test", 22: "test",
};

function signData(data) {
  return crypto.createHmac('sha256', SECRET_KEY).update(data).digest('hex');
}

// Calcule le prochain maxStep requis selon ton App.tsx
function getNextMaxStep(levelNum) {
  if (levelNum < 11) {
    return (levelNum * 2) + 1; // Débloque la page intern correspondante
  } else if (levelNum === 11) {
    return 24; // Débloque TeamTransition
  } else if (levelNum >= 12 && levelNum < 22) {
    return levelNum + 14; // Débloque le niveau Act 2 suivant
  } else if (levelNum === 22) {
    return 36; // Débloque Congratulations
  }
  return 36;
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { level, answer } = req.body;
  const levelNum = parseInt(level, 10);

  if (isNaN(levelNum) || !correctAnswers[levelNum] || !answer) {
    return res.status(400).json({ success: false, error: 'Invalid level or missing parameters' });
  }

  const expected = correctAnswers[levelNum];
  const isCorrect = answer.trim().toLowerCase() === expected.toLowerCase();

  if (!isCorrect) {
    return res.status(400).json({ success: false, error: 'Incorrect answer' });
  }

  const nextMaxStep = getNextMaxStep(levelNum);
  const payload = `${nextMaxStep}`;
  const signature = signData(payload);
  const token = `${payload}.${signature}`;

  res.setHeader(
    'Set-Cookie', 
    `game_progress=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`
  );

  return res.status(200).json({ success: true, nextMaxStep });
}