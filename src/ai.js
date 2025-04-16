import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every single ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a webpage.`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

// console.log("HUGGING FACE -> ", hf)
export async function getRecipeFromAI(ingredientsArr) {
    console.log("inside ai func", ingredientsArr)
    const ingredientsString = ingredientsArr.join(",")
    console.log("str========", ingredientsString)
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}, Please give me a recipe you'd recommend I make.` },

            ],
            max_tokens: 1024
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
    // console.log("response -> ", response)
}