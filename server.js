// Nacten� modulu
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Nastaven� statick�ch souboru
app.use(express.static(path.join(__dirname, 'public')));

// Hlavn� str�nka
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Spu�ten� serveru
app.listen(PORT, () => {
    console.log(`Server be�� na http://localhost:${PORT}`);
});

