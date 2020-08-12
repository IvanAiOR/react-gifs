

export const getGifs = async(categoria)=> {
    
        if(categoria===''){
            throw new Error('Se esperaba una categoría y se recibió vacio');
        }
        // console.log('categoria en grid imagen:',categoria)
        const url=`https://api.giphy.com/v1/gifs/search?q=${categoria}&api_key=LuB38YvUHKLgeTS8XchkLY8oFTDmJi6P&limit=10`;
        
            
        const respuesta= await fetch(url);
        const {data} = await respuesta.json();
        //console.log(data);
    
        const urlGifs = data.map(img=>{
            return(
                {
                    id:img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }
            )   
        });
        // console.log(urlGifs);
        return urlGifs
        
    
    

}
