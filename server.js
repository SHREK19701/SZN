// Nacten� modulu
const express = require('express');
const path = require('path');
const app = express();
const PORT = 10000;

// Hlavn� str�nka
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Spu�ten� serveru
app.listen(PORT, () => {
    console.log(`Server be�� na http://localhost:${PORT}`);
});

