//!cuando pongo el nombre (use) en un archivo significa que es un hook (pero no es nesesarip\o)
import { useState, useEffect,useRef} from 'react'
import { getGifs } from '../helpers/getGifs'
//los hook no son mas que funciones

export const useFechGifs = (category) => {

    const ref = useRef(true);

    const [state, setstate] = useState({
        data: [],
        loading: true,
    })


    //comprobar de que el componente se a desmontado
    useEffect(()=> {
      return () => ref.current(false)
    })

    useEffect(() => {  //los efectos no pueden ser async

        getGifs(category)
            .then(imgs => {
                setstate({
                    if(ref){
                        data: imgs,  //recuerda aser lo en el mismo orden
                        loading: false
                    }
                })
            })


    }, [category])//este efecto va ejecutar uicamente cuando la categoria cambie


    return state
}