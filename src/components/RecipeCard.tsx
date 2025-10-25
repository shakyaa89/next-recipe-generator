// src/components/RecipeCard.tsx
import React from "react";
import ReactMarkdown from "react-markdown";
import { Recipe } from "../data/Recipes";

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "350px",
      }}
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold my-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-semibold my-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold my-2" {...props} />
          ),
          p: ({ node, ...props }) => <p className="text-lg my-1" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="ml-5 list-disc text-lg mb-3" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="ml-5 list-decimal text-lg mb-3" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          em: ({ node, ...props }) => <em className="italic" {...props} />,
          strong: ({ node, ...props }) => (
            <strong className="font-semibold" {...props} />
          ),
        }}
      >
        {recipe.markdown}
      </ReactMarkdown>
    </div>
  );
};

export default RecipeCard;
