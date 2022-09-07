import Authenticated from "@/Layouts/Authenticated"
import React from "react"
import { Head } from '@inertiajs/inertia-react';

export default function RecipeDetails(props) {
    
    return (
        <Authenticated 
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Recipe Details" />
            <div>
                <h1>Recipe Details {props.recipeId}</h1>
            </div>
            
        </Authenticated>
    )
}