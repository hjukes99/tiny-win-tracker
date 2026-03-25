import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'tiny-win-tracker' });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`tiny-win-tracker listening on :${port}`);
  });
}

export default app;
