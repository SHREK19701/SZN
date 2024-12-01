// Nactení modulu
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Testovací databáze (pro jednoduchost)
let users = [];

// Hlavní stránka
app.get('/', (req, res) => {
    res.send('Vítejte na serveru seznamky "SZN"!');
});

// Registrace uživatele
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Vyplnte všechna pole!' });
    }

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'E-mail je již registrován.' });
    }

    const newUser = { username, email, password, coins: 150 };
    users.push(newUser);
    res.status(201).json({ message: 'Registrace probehla úspešne!', user: newUser });
});

// Prihlášení uživatele
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Nesprávný e-mail nebo heslo.' });
    }

    res.json({ message: 'Prihlášení úspešné!', user });
});

// Zobrazení všech uživatelu (pro úcely testování)
app.get('/users', (req, res) => {
    res.json(users);
});

// Spuštení serveru
app.listen(PORT, () => {
    console.log(`Server beží na http://localhost:${PORT}`);
});

