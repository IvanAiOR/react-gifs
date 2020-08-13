import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetImagenes";


export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{
        getGifs(categoria).then(urlGifs=>{
            setstate({
                data: urlGifs, loading :false
            }); 
        });
    },[]);

    return state;
}

