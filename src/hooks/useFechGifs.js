//!cuando pongo el nombre (use) en un archivo significa que es un hook (pero no es nesesarip\o)
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
//los hook no son mas que funciones

export const useFechGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {  //los efectos no pueden ser async

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,  //recuerda aser lo en el mismo orden
                        loading: false
                    })
                }, 2000)
            })


    }, [category])//este efecto va ejecutar uicamente cuando la categoria cambie


    return state
}