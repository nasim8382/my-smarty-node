const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788676767'},
    {id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788676712'},
    {id: 3, name: 'Popy', email: 'popy@gmail.com', phone: '01788676723'},
    {id: 4, name: 'Mahi', email: 'mahi@gmail.com', phone: '01788676734'},
    {id: 5, name: 'Bubly', email: 'bubly@gmail.com', phone: '01788676745'},
    {id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01788676756'},
    {id: 7, name: 'Mithila', email: 'mithila@gmail.com', phone: '01788676778'},
    {id: 8, name: 'Shrabonti', email: 'shrabonti@gmail.com', phone: '01788676789'},
]

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello dear!! This message is from my smarty smarty node');
});

app.get('/users', (req, res) => {
    // filter by search query parameter
    if(req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'pineapple', 'watermalon']);
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});