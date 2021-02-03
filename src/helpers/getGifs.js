    export const getGifs = async(category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=71bQw1Z8mPeipljs7TL5kZSMB2tkICOk`;

        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifts = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return gifts;
    }