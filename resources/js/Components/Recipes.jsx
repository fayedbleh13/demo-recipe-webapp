import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Recipes({title, image, id}) {
    return (
        <div>
            <div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img className="rounded-t-lg" src={image} alt="recipe_image"/>
                    </a>
                    <div className="flex flex-col justify-center items-center  p-6">
                        <h5 className="text-gray-900 text-base font-medium mb-2 break-all">{id}</h5>
                        <Link href={route('recipe-details')} data={{ recipeId: id }} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">More Details</Link>
                    </div>
                </div>
            </div> 
        </div>
    )
}