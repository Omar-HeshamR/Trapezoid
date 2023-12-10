export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { generationPrompt } = req.body;

        try {
            console.log("started");
            console.log(generationPrompt);

            // Configure OpenAI
            const OpenAI = require("openai")
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY,
              })
            // Generate image
            const response = await openai.images.generate({
                model: 'dall-e-3',
                prompt: `I NEED to test how the tool works with 
                extremely simple prompts. DO NOT add any detail, just use it AS-IS: ${generationPrompt}`,
                n: 1,
                size: "1024x1024"
            });

            console.log("response", response);
            res.status(200).json({ image: response.data[0] });
        } catch (error) {
            console.error("Error generating image", error);
            res.status(500).json({ error: 'Error generating image.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
