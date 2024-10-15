
// Exercise 1

const express = require('express');
const app = express();

// Listening on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get('/greetings/:username', (req, res) => {
    res.send(`<h4>Hello there, ${req.params.username}</h4>`);
});

// Exercise 2

app.get('/roll/:number', (req, res) => {
    const number = parseFloat(req.params.number);

    if (number) {
        randomNum = Math.floor(Math.random()* number);
        res.send(`You rolled a ${randomNum}`);
    } else {
        res.send(`You must specify a number`);
    }
});

// Exercise 3

app.get('/collectibles/:index', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];
    const index = parseInt(req.params.index);

    if (index >= 0 && index < collectibles.length) {
        const selecteCollectible = collectibles[index];
        res.send(`So, you want the ${selecteCollectible.name}? For ${selecteCollectible.price}, it can be yours!`);
    } else {
        res.send(`This item is not yet in stock. Check back soon!`);
    }
});

// Exercise 4

app.get('/shoes', (req, res) => {
    const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
  
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const type = req.query.type;
    let filteredShoe = shoes;
  
    filteredShoe = filteredShoe.filter(shoe => {
        if (minPrice && shoe.price < parseFloat(minPrice)) {
          return false;
        }
  
        if (maxPrice && shoe.price > parseInt(maxPrice)) {
            return false;
        }
  
        if (type && shoe.type !== type) {
            return false;
        }

        if (!minPrice || !maxPrice || !type) { 
            return true;
        }

    });
    res.send(filteredShoe);
});
    