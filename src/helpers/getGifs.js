

/*
helpers van aser funciones que asen un sierto trabajo en spesifico
puden resivir argunmentos lo procesan y asen algun return 
que  falta que redibujen el state
*/


export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=pbhjWS1EHyZ2sU3NSt0R9uezEIyBJ7kV`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // el signo de interrogaciom es para preguntar si vino
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}