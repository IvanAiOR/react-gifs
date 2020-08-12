import React from 'react';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../componentes/AddCategory")
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory/>', () => {
    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategorias={setCategory} />);
    beforeEach(()=>{
        jest.clearAllMocks();//esta funcion limpia todos los valores que hayamos usado en una prueba anterior en el mismo documento
        wrapper= shallow(<AddCategory setCategorias={setCategory} />);
    })
    
    test('debe mostrarse correctamente', () => {
            expect(wrapper).toMatchSnapshot();
    })
    
    test('debe mostrar un texto en la caja', () => {
        const input= wrapper.find('input');
        const value='hola mundo';

        input.simulate('change',{target:{value}})// no es necesario escribir el value como propiedad y valor porque automaticamente react lo interpreta
        
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('debe señalar el submit limpio', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategory).not.toHaveBeenCalled(); //sile quitas el not, consulta por las veces que se llamo el submit, pero por el "preventDefault" lo tomará como error
    })
    
})
