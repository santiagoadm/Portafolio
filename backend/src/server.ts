import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import { profile } from './data/profile';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(cors({ origin: process.env.CORS_ORIGIN ?? '*' }));
app.use(express.json());

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

app.get('/api/certifications', (_req: Request, res: Response) => {
  res.json(profile.certifications);
});

app.get('/api/projects', (_req: Request, res: Response) => {
  res.json(profile.projects);
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, message } = req.body ?? {};
  if (!name || !email || !message) {
    res.status(400).json({ error: 'name, email y message son obligatorios' });
    return;
  }
  console.log(`[contacto] ${name} <${email}>: ${message}`);
  res.status(201).json({ received: true });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
