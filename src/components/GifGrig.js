import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GifGridItem } from './GifGridItem'
import { useFechGifs } from '../hooks/useFechGifs'
import { getGifs } from '../helpers/getGifs'

const GifGrig = ({ category }) => {

    // const [images, setImages] = useState([])

    //!usa el useEfect poeque si tengo useState que es un boton y esta ariba de la funcion me va a ejecutar la funcion getFifs cada vez que lo toque porque el el state esta arriba del todo

    //custoom hook ("rembre data a images")
    const { data: images, loading } = useFechGifs(category)

    /*
    useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [category])//le puse category como denpendencia para evitar un warning
    */

    return (
        <>

            <h3>{category}</h3>

            {loading ? 'Cargando...' : 'Data cargada'}

            <div className='container-targeta'>

                {
                    images.map((img) => (
                        <GifGridItem key={img.id} {...img} />//si pongo los trs puntos puedo utilizar to las
                        //priedades de img > id,title,url
                    ))
                }
            </div>
        </>


    )
}


export default GifGrig
