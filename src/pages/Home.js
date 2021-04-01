import React from 'react';
import { useState, useEffect } from 'react';
import OurContext from '../context/index';

export default function Home(props) {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            try{
                const res = await fetch(`https://api.rawg.io/api/games?key=API_KEY_GOES_HERE&search=prey`);
                const data = await res.json()
                await setData(data.results[0])
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    console.log(data)
    return(
        <OurContext.Provider value={data}>

        </OurContext.Provider>
    )
}