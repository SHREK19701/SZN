// Nacten� modulu
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Testovac� datab�ze (pro jednoduchost)
let users = [];

// Hlavn� str�nka
app.get('/', (req, res) => {
    res.send('V�tejte na serveru seznamky "SZN"!');
});

// Registrace u�ivatele
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Vyplnte v�echna pole!' });
    }

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'E-mail je ji� registrov�n.' });
    }

    const newUser = { username, email, password, coins: 150 };
    users.push(newUser);
    res.status(201).json({ message: 'Registrace probehla �spe�ne!', user: newUser });
});

// Prihl�en� u�ivatele
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Nespr�vn� e-mail nebo heslo.' });
    }

    res.json({ message: 'Prihl�en� �spe�n�!', user });
});

// Zobrazen� v�ech u�ivatelu (pro �cely testov�n�)
app.get('/users', (req, res) => {
    res.json(users);
});

// Spu�ten� serveru
app.listen(PORT, () => {
    console.log(`Server be�� na http://localhost:${PORT}`);
});

