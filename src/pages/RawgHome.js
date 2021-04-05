import React from 'react';
import { useState, useEffect } from 'react';
import OurContext from '../context/index';

export default function RawgHome(props) {
    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`https://api.rawg.io/api/games?key=b122395149de44309782af9bcebb7090&search=prey`);
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