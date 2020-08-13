import React from 'react';
const { shallow } = require("enzyme")
const { GifExpertApp } = require("../../componentes/GifExpertApp")

describe('Pruebas en el componente <GifsExpertApp/>', () => {
    test('debe mostrar el componente', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categorias=['gatos','perros'];
        const wrapper = shallow(<GifExpertApp DefaultCategorias={categorias}/>)

        expect(wrapper.find('GridImagenes').length).toBe(categorias.length);

    })
    

    
})
