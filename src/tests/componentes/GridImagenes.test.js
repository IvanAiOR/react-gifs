import React from 'react';
import { shallow } from 'enzyme';
import { GridImagenes } from '../../componentes/GridImagenes';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GridImagenes/>', () => {
    const categoria= 'ejemplo';
    
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

    let wrapper= shallow(<GridImagenes categoria={categoria}/>);
    
    test('debe mostrarse correctamente el componente ', () => {
        wrapper= shallow(<GridImagenes categoria={categoria}/>);

        expect(wrapper).toMatchSnapshot();
    })  

    test('debe mostrar items cuando se carga la imagen de useFetchGifs', () => {
        const arrImgs= [{
            id: 1,
            title: 'prueba1',
            url: 'www.asd.asd/algo.png'
        },
        {
            id: 2,
            title: 'prueba2',
            url: 'www.asd.asd/algo2.png'
        }
    ];
    useFetchGifs.mockReturnValue({
        data: arrImgs,
        loading: false
    });
    wrapper= shallow(<GridImagenes categoria={categoria}/>);
    expect(wrapper).toMatchSnapshot();

    })

    test('debe observar si existe el componente  ', () => {
        const arrImgs= [{
                id: 1,
                title: 'prueba1',
                url: 'www.asd.asd/algo.png'
            },
            {
                id: 2,
                title: 'prueba2',
                url: 'www.asd.asd/algo2.png'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: arrImgs,
            loading: false
        });
        wrapper= shallow(<GridImagenes categoria={categoria}/>);
            expect(wrapper.find('GridItem').length).toBe(arrImgs.length) //espera que la cantidad de componente de grid imagenes sea la misma cantidad de objetos en la lista de imagenes
    })
    
    
    
})
