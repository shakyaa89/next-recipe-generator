// src/app/recipes/page.tsx
import React from "react";
import { recipes } from "../../data/Recipes";
import RecipeCard from "../../components/RecipeCard";

const RecipesPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesPage;
