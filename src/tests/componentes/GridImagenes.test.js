import React from 'react';
import {shallow} from 'enzyme';
import { GridItem } from '../../componentes/GridItem';
import Adapter from 'enzyme-adapter-react-16';

describe('pruebas en GridImagenes', () => {
    
    const url = 'algo.jpg';
    const titulo = 'Titulo';
    
    const wrapper= shallow(<GridItem title={titulo} url={url}/>);
    
    test('Debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener un parrao con el titulo', () => {
        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(titulo);
    })
    
    test('debe tener una imagen con la url', () => {
        const img= wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(titulo);
    })
    
    test('el div debe contener la clase card', () => {
        const div= wrapper.find('div');
        expect(div.prop('className').includes('card')).toBe(true);
    })
    
})
