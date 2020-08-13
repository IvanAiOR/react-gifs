const { useFetchGifs } = require("../../hooks/useFetchGifs")
import { renderHook } from "@testing-library/react-hooks"


describe('Pruebas en el hook useFetchGifs', () => {
    test('debe retornar el estado inicial',  async() => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('ejemplo') );
        const {data, loading} = result.current;
        await waitForNextUpdate();
        // console.log(data, loading)
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    })
    
    test('debe retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('ejemplo') );//se extrae de la herramienta de react hooks la funcion render

        await waitForNextUpdate();
        const {data, loading} = result.current;
        // console.log(data, loading)
        expect(data.length).toBe(10);
        expect(loading).toEqual(false);
    })
    
})
