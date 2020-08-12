import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [NuevaCategoria, SetNuevaCategoria] = useState('')

    const handleNewCategory = (e)=>{
        SetNuevaCategoria(e.target.value)
        
    }

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        if (NuevaCategoria==='') {
            
        }
        else{
            console.log(NuevaCategoria)
            setCategorias(categorias=>[NuevaCategoria, ...categorias ]);
            SetNuevaCategoria('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{NuevaCategoria}</p>
            <h3>Ingresa una categoria</h3>
            <input 
                type="text"
                value={NuevaCategoria}
                onChange={handleNewCategory}
            />
            <br/>
            <button type="submit">Agregar</button>
            
        </form>
    )
}
AddCategory.propTypes= {
    setCategorias: PropTypes.func.isRequired
}
