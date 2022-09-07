import React from "react"
import RecipeCard from "../../js/components/Recipes"

export default function RecipeList({ recipes }) {
    return (
        <div className="grid grid-cols-4 gap-6">
            {recipes.map(recipes => (
                <RecipeCard 
                    key={recipes.recipe.label}
                    id={recipes.recipe.label}
                    title={recipes.recipe.label}
                    image={recipes.recipe.image}
                />
            ))}
        </div>
    )
}