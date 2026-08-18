const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const FLAG =
  'encryptid{shy4mpR4k45h_w1ll_b3_pr0uD_0f_wh47_y0u_h4v3_4ch13v3d_y0ung_p4d4w4n}';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  return res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const password = String(req.body.password || '');
  if (password.toLowerCase() === 'balthasar') {
    return res.redirect('/thisistherealctflevelunlocked');
  }
  return res.render('login', { error: 'Wrong password. Try again.' });
});

app.get('/thisistherealctflevelunlocked', (req, res) => {
  res.set('X-HeeHee', 'Part 2/4: R4k45h_w1ll_');
  return res.render('level');
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain').send('User-agent: *\nDisallow: /something/very/random/balalalala\n');
});

app.get('/something/very/random/balalalala', (req, res) => {
  res.type('text/plain').send('Part 3/4: b3_pr0uD_0f_wh47_y0u_');
});

app.post('/submit', (req, res) => {
  const guess = String(req.body.flag || '').trim();
  res.render('level', { correct: guess === FLAG });
});

app.listen(PORT, () => {
  console.log(`Balthasar's Vault running on http://localhost:${PORT}`);
});