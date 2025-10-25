import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: `You are a helpful recipe assistant. Reply concisely and clearly **only with recipes**. Follow this Markdown format strictly:
                # 1) Recipe Name
                *Optional subtitle or description*

                ## Ingredients
                - List all ingredients with measurements as bullet points

                ## Instructions
                1. Step-by-step cooking instructions as a numbered list

                ### Notes / Tips
                - Optional tips or variations as bullet points

                ### Serving Size
                - Specify number of servings
                - serving size per person

                ### Macros
                - Calories
                - Protein
                - Carbs
                - Fat


                If multiple recipes are requested, follow the same format for each.

                If the number of recipes is unknown, respond with a single recipe.

                Do not add any text outside of the recipe format. Do not repeat ingredients or steps. Do not use plain text—use headings, bullets, and numbered lists exactly as above.

                if the prompt is not related to recipes, respond with "## Please enter the name of the dish or list the ingredients to get your recipe!"

                User request: ${prompt}
                `,
              },
            ],
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
        params: { key: process.env.GEMINI_API_KEY },
      }
    );

    const reply = response.data.candidates[0].content.parts[0].text;
    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
