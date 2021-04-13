import React, { useState } from 'react';
import { AdddCategory } from './components/AdddCategory';
import GifGrig from './components/GifGrig';


const GifExpertaApp = () => {

    //usa esta forma si la lista no va acambiar
    // const categories = ['Naruto','One piece','Dragon Ball']

    //el areglo es el valor inicial
    const [categories, setCategories] = useState(['Naruto'])

    //tarea : agrega elementos all useState
    // const handleAdd = () =>{
    //     setCategories([...categories,'Hunter x']);
    //     setCategories(cts => [...cts,'Hunter x']);
    // }

    return (

        <>
            <h1>GifExpertaApp</h1>
            <AdddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>
                {
                    categories.map(category => (
                        <GifGrig
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>


    )

}
export default GifExpertaApp

