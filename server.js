// Nactení modulu
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Nastavení statických souboru
app.use(express.static(path.join(__dirname, 'public')));

// Hlavní stránka
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Spuštení serveru
app.listen(PORT, () => {
    console.log(`Server beží na http://localhost:${PORT}`);
});

