import React, { useEffect, useState } from 'react'
import { GridItem } from './GridItem';
import { getGifs } from '../helpers/GetImagenes';
import { useFetchGifs } from '../hooks/useFetchGifs';

import PropTypes from 'prop-types';

export  const GridImagenes = ({categoria}) => {

    
   
    const {data:Gif,loading}=useFetchGifs(categoria);
 
    
    
    return (
        <>
        
            <h3>{categoria}</h3>
            <div className="card-grid">
                {loading && <h5>Cargando...</h5>}
                {
                    Gif.map(
                        (img)=>(
                            <
                                GridItem    
                                key={img.id}
                                {...img}

                            />
                        )
                        
                    )
                }
                
                
            </div>
        </>
    );
}

GridImagenes.prototype={
    categoria: PropTypes.string.isRequired
}