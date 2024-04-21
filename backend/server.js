const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors()); 

const url = 'mongodb://0.0.0.0:27017';
const databaseName = 'Collage';

async function fetchNewsArticles() {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(databaseName);
        const collection = db.collection('CollageData');
        const newsData = await collection.find({}).toArray();
        return newsData;
    } catch (error) {
        console.error('Error fetching news articles:', error);
        throw error;
    } finally {
        await client.close();
    }
}

app.get(`/api/CollageData`, async (req, res) => {
    try {
        const newsArticles = await fetchNewsArticles();
        res.json(newsArticles);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});