import crypto from 'crypto';

const SECRET_KEY = process.env.GAME_SECRET || 'perecastor';

function verifySignature(data, signature) {
  try {
    const expectedSignature = crypto.createHmac('sha256', SECRET_KEY).update(data).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expectedSignature, 'hex'));
  } catch (e) {
    return false;
  }
}

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const cookieHeader = req.headers.cookie || '';
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(c => {
      const index = c.indexOf('=');
      return [c.substring(0, index), c.substring(index + 1)];
    })
  );

  const token = cookies['game_progress'];

  if (!token) {
    return res.status(200).json({ maxStep: 2 }); // Par défaut niveau 1 accessible (maxStep = 2)
  }

  const [payload, signature] = token.split('.');
  if (!payload || !signature || !verifySignature(payload, signature)) {
    return res.status(200).json({ maxStep: 2 });
  }

  const savedMaxStep = parseInt(payload, 10);
  return res.status(200).json({ maxStep: isNaN(savedMaxStep) ? 2 : savedMaxStep });
}