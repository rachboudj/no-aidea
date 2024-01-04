import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            { 
                role: 'system', 
                content: 'You give great project idea for webdeveloper. When a user gives you his specificity (front-end developer, back-end developer, fullstack...) you give him an idea for a project based on that.' 
            },
            { 
                role: 'user', 
                content: 'front-end'
            }
        ],
        model: 'gpt-3.5-turbo',
    });

    console.log(chatCompletion.choices[0].message.content);
}

main();