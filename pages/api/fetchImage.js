import fetch from 'node-fetch';

export default async function handler(req, res) {
    const imageUrl = req.query.url;

    try {
        const response = await fetch(imageUrl);
        const imageBuffer = await response.buffer();
        
        res.setHeader('Content-Type', 'image/png');
        res.send(imageBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching image');
    }
}
