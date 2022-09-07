import '../../css/style.css';

import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';


export default function Cover(props) {
    return (
        <>
            <Head title="Recipe Web App" />
            
            <div >
                <header className="bg-header fixed top-0 left-0 px-6 py-4 md:block">
                    <div className="flex justify-end">
                        {props.auth.user ? (
                            <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="text-sm text-gray-700 underline">
                                    Log in
                                </Link>

                                <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </header>
                <section className='bg-brand pt-32 h-screen'>
                    <div className='container-center text-white py-32'>
                        <h1 className="py-4 text-5xl text-bold text-center">Recipe Search</h1>
                        <p className="py-4 text-center text-2xl">
                        Look for the recipes you want to cook. This website provides a recipe api to help or guide our fellow aspiring cooks.
                        </p>
                        <div className="py-4 text-center">
                            <Link href={route('login')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full">
                                    Get Started
                            </Link>
                        </div>
                    </div>
                </section>
                <footer className="bg-footer fixed bottom-0 right-0 px-6 py-4 sm:block">
                    <div>
                        <p className="flex justify-center">Copyrights Reserved ©2022</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
