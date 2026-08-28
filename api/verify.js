import crypto from "crypto";

const SECRET_KEY = process.env.GAME_SECRET || "perecastor";

const correctAnswers = {
  0: "skip",
  1: "I OPEN THE DOOR",
  2: 'Click on """""me"""""',
  3: "Odoo-steganography",
  4: "hx992_sec_token_v4",
  5: "opensesame",
  6: "0doo4ever<3",
  7: "Jérôme",
  8: "Never Gonna Give You Up",
  9: "Q61go2it",
  10: "Loki",
  11: "What a drag",
  12: "Emptiness",
  13: "Ctrl c + ctrl v",
  14: "ODOO{3_byte_key}",
  15: "access_granted_9921",
  16: "Coin",
  17: "42",
  18: "Easy",
  19: "technofuturtic",
  20: "X98G26",
  21: "Beware of odin",
  22: "Hey you cheated !",
};

function signData(data) {
  return crypto.createHmac("sha256", SECRET_KEY).update(data).digest("hex");
}

// Calcule le prochain maxStep requis selon ton App.tsx
function getNextMaxStep(levelNum) {
  if (levelNum == 0) {
    return 25;
  } else if (levelNum < 11) {
    return levelNum * 2 + 1; // Débloque la page intern correspondante
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
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { level, answer } = req.body;
  const levelNum = parseInt(level, 10);

  if (isNaN(levelNum) || !correctAnswers[levelNum] || !answer) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid level or missing parameters" });
  }

  const expected = correctAnswers[levelNum];
  const isCorrect = answer.trim().toLowerCase() === expected.toLowerCase();

  if (!isCorrect) {
    return res.status(400).json({ success: false, error: "Incorrect answer" });
  }

  const nextMaxStep = getNextMaxStep(levelNum);
  const payload = `${nextMaxStep}`;
  const signature = signData(payload);
  const token = `${payload}.${signature}`;

  res.setHeader(
    "Set-Cookie",
    `game_progress=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`,
  );

  return res.status(200).json({ success: true, nextMaxStep });
}
