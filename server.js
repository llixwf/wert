const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors()); // For production, specify origins: app.use(cors({ origin: 'https://yourdomain.com' }));

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const models = [
  {
    image: 'IMAGE_2025-03-05_17_26_23-removebg-preview.png',
    name: 'Starfish',
    information: 'Starfish, or sea stars, are marine invertebrates belonging to the class Asteroidea. They typically have five arms, though some species have more, and a central disc. Their sizes range from a few centimeters to over 1 meter in diameter. Starfish use tube feet for movement and have a unique water vascular system. They lack a brain and blood, instead circulating seawater through their bodies for respiration and movement. Starfish can regenerate lost arms, a crucial survival trait. They are predators and scavengers, mainly feeding on mollusks like clams and oysters.',
    size: '30cm-1m',
    class: 'Asteroidea',
    weight: '0.1-5kg',
    color: 'blue'
  },
  {
    image: 'IMAGE_2025-03-05_17_06_35-removebg-preview.png',
    name: 'Turtle',
    information: 'Turtles are reptiles with hard shells that protect them from predators. They have existed for over 200 million years and live in various habitats, including oceans, rivers, and forests. Turtles are known for their slow movement and long lifespan, with some species living over 100 years. They lay eggs on land, and baby turtles must make their way to water after hatching. Many species, like sea turtles, are endangered due to habitat destruction, pollution, and poaching.',
    size: '6cm-2.5m',
    class: 'Reptilia',
    weight: '40-700kg',
    color: 'green'
  },
  {
    image: 'IMAGE_2025-03-05_17_11_28-removebg-preview.png',
    name: 'Manta Ray',
    information: 'Manta rays are large, graceful marine creatures belonging to the Mobulidae family. They have broad, triangular pectoral fins, allowing them to glide effortlessly through the ocean. With wingspans reaching up to 7 meters (23 feet), they are among the largest rays. Manta rays are filter feeders, consuming plankton and small fish. They are highly intelligent, social, and often seen interacting with divers. Found in tropical and subtropical waters, these gentle giants play a vital role in marine ecosystems.',
    size: '3-7m',
    class: 'Chondrichthyes',
    weight: '1350-3000kg',
    color: 'skyblue'
  },
  {
    image: 'IMAGE_2025-03-05_17_18_04-removebg-preview.png',
    name: 'Dolphin',
    information: 'Dolphins are intelligent marine mammals known for their playful behavior and strong social bonds. They belong to the family Delphinidae and can be found in oceans and rivers worldwide. Dolphins communicate using clicks, whistles, and body movements. They have excellent echolocation abilities, allowing them to navigate and hunt efficiently.',
    size: '1.2-9.8m',
    class: 'Mammalia',
    weight: '50-650kg',
    color: 'pink'
  },
  {
    image: 'IMAGE_2025-03-05_17_24_17-removebg-preview.png',
    name: 'Jellyfish',
    information: "Jellyfish have been around for over 500 million years, making them one of the oldest living creatures on Earth. They come in various shapes, sizes, and colors, ranging from tiny, barely visible species to massive ones like the lion's mane jellyfish. Their bodies are mostly water, and they use their bell-shaped, umbrella-like body to pulse and swim through the water. Jellyfish feed primarily on plankton, small fish, and larvae.",
    size: '8-100feet',
    class: 'Scyphozoa',
    weight: '200kg',
    color: 'darkblue'
  }
];

// Route to get all models
app.get('/api/models', (req, res) => {
  res.json(models);
});

// Route to get a specific model by name
app.get('/api/models/:name', (req, res) => {
  const model = models.find(m => m.name.toLowerCase() === req.params.name.toLowerCase());
  if (model) {
    res.json(model);
  } else {
    res.status(404).json({ error: 'Model not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
