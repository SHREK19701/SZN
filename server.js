// Nactení modulu
const express = require('express');
const path = require('path');
const app = express();
const PORT = 10000;

// Hlavní stránka
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Spuštení serveru
app.listen(PORT, () => {
    console.log(`Server beží na http://localhost:${PORT}`);
});

