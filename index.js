// import express from 'express';  
// import bodyParser from 'body-parser';

// const app = express();
// const port = 700;


// // Middleware
// app.use(bodyParser.json());

// // Dummy data
// const items = [
//   {
//     id: 1,
//     name: 'issarapap Sengdang',
//     phoneNumber: '0814590922',
//     business: 'Chopaya',
//     date: '15 พ.ค. 2566 12.34 น.'
//   }
// ];

// // Routes
// app.get('/api/items', (req, res) => {
//   res.json(items);
// });

// app.post('/api/items', (req, res) => {
//   const newItem = req.body;
//   newItem.id = items.length + 1;
//   items.push(newItem);
//   res.status(201).json(newItem);
// });

// app.put('/api/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const updatedItem = req.body;

//   const index = items.findIndex(item => item.id === itemId);
//   if (index !== -1) {
//     items[index] = updatedItem;
//     res.json(updatedItem);
//   } else {
//     res.status(404).json({ message: 'Item not found' });
//   }
// });

// app.delete('/api/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const index = items.findIndex(item => item.id === itemId);
//   if (index !== -1) {
//     items.splice(index, 1);
//     res.json({ message: 'Item deleted' });
//   } else {
//     res.status(404).json({ message: 'Item not found' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });