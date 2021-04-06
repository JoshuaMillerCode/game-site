import React from 'react';
import { useState, useEffect } from 'react';

export default function LastFmHome (props){

    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=believe&api_key=\${secrets.apiKey}&format=json`);
                const data = await res.json()
                await setData(data.results.albummatches.album)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])
    return (
        <>
            <div>
                <h1>Example Display Data:</h1>
                <div className='exampleDatas'>
                    { 
                        data.map((data) => {
                            return (
                                <>
                                    <h2> Album Title: {data.name}</h2>
                                    <h3>Album Artist: {data.artist}</h3>
                                    <img src={data.image[3]['#text']}/>
                                </>
                            )
                        }) 
                    }
                </div>
            </div>
        </>
    )
}