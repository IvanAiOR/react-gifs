import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GridImagenes } from './GridImagenes';

export const GifExpertApp = ({DefaultCategorias=[]}) => {
// const categorias =[`Gatos`, `perros`, `Anime`]
const [categorias, setCategorias] = useState(DefaultCategorias)
    


return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            {/* <AddCategory /> */}
            <AddCategory setCategorias={setCategorias}/>
            <ol>
                {
                    
                    DefaultCategorias.map(
                        (categoria,indice)=>{
                            console.log('categoria en gridexpertapp: ',categoria)
                            return(
                                <
                                    GridImagenes 
                                    categoria={categoria}
                                    key={categoria}
                                />
                            );
                        }
                    )
                }
            </ol>

        </div>
    )
}
