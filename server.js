
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Dossier statique (facultatif si tu veux charger d'autres fichiers comme des images, css, etc)
app.use(express.static(path.join(__dirname, 'src')));

// Route spéciale pour GET /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Pour toutes les autres routes non trouvées
app.use((req, res) => {
  res.status(404).send('Page non trouvée.');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
