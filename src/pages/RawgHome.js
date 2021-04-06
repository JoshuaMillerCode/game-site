import React from 'react';
import { useState, useEffect } from 'react';


export default function RawgHome(props) {
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`https://api.rawg.io/api/games?key=\${secrets.apiKey}&search=mario`);
                const data = await res.json()
                await setData(data.results[0])
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    return(
        <>
            <div>
                <h1>Example Fetch Data</h1>
                <div className='exampleData'>
                    <h3>Game Title: {data.name}</h3>
                    <img style={{width: '100vw', height: '100vh'}}src={data.short_screenshots[1].image}/>
                </div>
            </div>
        </>
    )
}