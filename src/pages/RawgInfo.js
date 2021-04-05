import React from 'react';

export default function Info() {
    
    const exampleData = {
        "slug": "prey",
        "name": "Prey (2017)",
        "playtime": 10,
        "platforms": [],
        "stores": [],
        "released": "2017-05-05",
        "tba": false,
        "background_image": "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg",
        "rating": 4.28,
        "rating_top": 5,
        "ratings": [],
        "ratings_count": 1485,
        "reviews_text_count": 13,
        "added": 6120,
        "added_by_status": {},
        "metacritic": 80,
        "suggestions_count": 633,
        "updated": "2021-02-16T09:48:36",
        "id": 39,
        "score": "65.94736",
        "clip": null,
        "tags": [],
        "esrb_rating": {},
        "user_game": null,
        "reviews_count": 1508,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "short_screenshots": [],
        "parent_platforms": [],
        "genres": []
        }

    return (
        <>            
            <div className='topSection'>
                <div  className='titleImage'>
            <img src='/img/RAWG_logo.jpg'></img>
                </div>
                <div className='apiGoLogoDiv'> 
                    <img src='/img/api-go.png'></img>
                </div>
            </div>
        <br />
        <h2>If you dont' have one yet, get your <a target='_blank' href='https://rawg.io/apidocs'>RAWG Api Key</a></h2>
        <h1>RAWG Video Games Api</h1>
        <div className='exampleIntro'>
            <p>
                RAWG Videos Games Api is a open source database that has over 500,000 games for 50 platforms. As said above, all you need is an api key to access the database and the freedom is yours to do what you want with the information given. The database gives the user everything you need to know about any video and is very powerful.
            </p>
        </div>
        <br />
        <h1>Api Endpoints</h1>
        <div className='endpointsDiv'>
  
  
            <h4>These are the endpoints that would be added to the base URL depending on what the desired search for information is needed</h4>
            <div className='nasaLists'>
                <ul>
                    <li>/games</li>
                    <li>/genres</li>
                    <li>/platforms</li>
                    <li>/publishers</li>
                    <li>/stores</li>
                    <li>/tags</li>
                </ul>
        </div>
            
        Here's an example of the games endpoint that gathers information based upon the query parameters 
            <br />
            <br />
            <i><h4>https://api.rawg.io/api/games?key=API_KEY_GOES_HERE&search=prey</h4></i>
            <br />
            <br />
            Heres an example of the response that you will get back: 


            <pre className='showJson'>
                This is just one of the results from the results key inside the response object:
                {JSON.stringify(exampleData, null, 2)}
            </pre>
        </div>
        <br />
        <br />
        <br />
        <h4> There are different query parameters for each endpoints to help narrow down the search:</h4>
        
        <div className='exampleTables'>
            <table>
                <thead>
                <tr>
                    <th colspan="2">Game Query Parameters</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Parameter</td>
                    <td>Data Type</td>
                </tr>
                <tr>
                    <td>page</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td>page_size</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td>search</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>search_precise</td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td>search_exact</td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td>parent_platforms</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>platforms</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>stores</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>developers</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>publishers</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>genres</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>tags</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>creators</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>dates</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>updated</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>platforms_count</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td>metacritic</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>exclude_collection</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td>exclude_additions</td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td>exclude_parents</td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td>exclude_game_series</td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td>ordering</td>
                    <td>string</td>
                </tr>
                </tbody>
            </table>

            <table>
                <thead>
                <tr>
                    <th colspan="2">Genres, Platforms, and Stores Query Parameters</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Parameter</td>
                    <td>Data Type</td>
                </tr>
                <tr>
                    <td>Ordering</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>page</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td>page_size</td>
                    <td>integer</td>
                </tr>
                </tbody>
            </table>
            
            <table>
                <thead>
                <tr>
                    <th colspan="2">Creator-Roles, Creators, Developers, Tags, and Publishers Query Parameters</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Parameter</td>
                    <td>Data Type</td>
                </tr>
                <tr>
                    <td>page</td>
                    <td>integer</td>
                </tr>
                <tr>
                    <td>page_size</td>
                    <td>integer</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div>
            <h4>Writing out the fetch link</h4>
            <p>While creating the fetch link the correct way to write the will be to put the base URl (https://api.rawg.io/api/) followed by the desired enpoint. The selected NEEDS to be followed a question mark. After the endpoint follows the desired query parameters, between every parameter there needs to be an ampersand (&). Take the search example above for some reference, you can put as many query parameters as desired as long as they are all separated by ambersands (&).</p>
            
            <p><i>For moore information please visit the <a href='https://api.rawg.io/docs/'>RAWG Api Docs</a></i></p>
        </div>
  </>
    )
}