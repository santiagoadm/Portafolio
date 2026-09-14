import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import { appendFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { profile } from './data/profile';

const app = express();
const port = Number(process.env.PORT ?? 3000);
const corsOrigin = (process.env.CORS_ORIGIN ?? 'http://localhost:4200').split(',').map((o) => o.trim());
const messagesFile = process.env.CONTACT_STORE ?? 'data/contact-messages.jsonl';

const MAX_LENGTHS = { name: 120, email: 254, message: 5000 };

app.use(cors({ origin: corsOrigin }));
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/api/profile', (_req: Request, res: Response) => {
  res.json(profile);
});

app.get('/api/skills', (req: Request, res: Response) => {
  const category = req.query['category'];
  const skills =
    typeof category === 'string' ? profile.skills.filter((s) => s.category === category) : profile.skills;
  res.json(skills);
});

app.get('/api/experience', (_req: Request, res: Response) => {
  res.json(profile.experience);
});

app.get('/api/education', (_req: Request, res: Response) => {
  res.json(profile.education);
});

app.get('/api/certifications', (_req: Request, res: Response) => {
  res.json(profile.certifications);
});

app.get('/api/projects', (_req: Request, res: Response) => {
  res.json(profile.projects);
});

app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body ?? {};
  const isValid =
    typeof name === 'string' &&
    name.trim().length > 0 &&
    name.length <= MAX_LENGTHS.name &&
    typeof email === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    email.length <= MAX_LENGTHS.email &&
    typeof message === 'string' &&
    message.trim().length >= 10 &&
    message.length <= MAX_LENGTHS.message;

  if (!isValid) {
    res.status(400).json({ error: 'name, email y message son obligatorios y deben tener un formato válido' });
    return;
  }

  const entry = { receivedAt: new Date().toISOString(), name, email, message };

  try {
    await mkdir(dirname(messagesFile), { recursive: true });
    await appendFile(messagesFile, `${JSON.stringify(entry)}\n`, 'utf8');
  } catch (error) {
    console.error('No se pudo guardar el mensaje de contacto', error);
    res.status(503).json({ error: 'No se pudo registrar el mensaje, inténtalo más tarde' });
    return;
  }

  console.log(`[contacto] nuevo mensaje recibido (${entry.receivedAt})`);
  res.status(201).json({ received: true });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
