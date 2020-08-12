// import PropTypes from 'prop-types';
const { getGifs } = require("../../helpers/GetImagenes");
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';



describe('Prueba del helper getgifs', () => {
    const categoria= 'gatos';

    test('get gifs debe contener 10 categorias ', async() => {
        const gifs= await getGifs(categoria);
        // console.log(gifs);
        expect(gifs.length).toBe(10);
    })
    
    test('debe enviar una categoría ', async() => {
        //Como capturar que lance error en la prueba
        let error;
        try{

            const gifs= await getGifs('');
        }
        catch(e){
            error= e;
        }
        
        expect(error).toBeInstanceOf(Error);
    })
    
})
