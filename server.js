const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Sert les fichiers HTML/CSS/JS du dossier public (ou src)
app.use(express.static(path.join(__dirname, 'src')));

// Démarre le serveur
app.listen(port, () => {
  console.log(`Panel bot en ligne sur le port ${port}`);
});
