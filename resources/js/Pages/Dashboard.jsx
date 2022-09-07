import React, {useState, useEffect} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import RecipeList from '../../js/components/RecipeList';
import Pagination from '@/Components/Pagination';

export default function Dashboard(props) {
    
    // edamam api id and keys
    const APP_ID = "6bb7fc6c";
    const APP_KEY = "3ed382e10877598830cb16c8939ca7ad";

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState('chicken')

    // pagination 
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setitemsPerPage] = useState(8)

    const lastDataIndex = currentPage * itemsPerPage
    const firstDataIndex = lastDataIndex - itemsPerPage
    const currentData = recipes.slice(firstDataIndex, lastDataIndex)

    useEffect( () => {
        getRecipes()
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json()
        setRecipes(data.hits)
    };

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const getSearch = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
                    </div>
                </div>
            </div>
            {/* search bar below */}
            <div className="flex justify-center">
                <div className="mb-3 xl:w-1/2">
                    <form onSubmit={getSearch}>
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input 
                                onChange={updateSearch} 
                                value={search} 
                                type="search" 
                                className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                                placeholder="Search" 
                                aria-label="Search" 
                                aria-describedby="button-addon3" 
                            />
                            <button type="submit" className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" id="button-addon3">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* recipe list below */}
            <div className="px-32">
                <RecipeList recipes={currentData} />
            </div>
            {/* pagination below */}
            <div className="pt-14 pb-9">
                <Pagination totalData={recipes.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
        </Authenticated>
    );
}
