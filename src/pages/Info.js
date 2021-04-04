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
                    <li>/creators-roles</li>
                    <li>/creators</li>
                    <li>/developers</li>
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
        <h1>Photo Attributes</h1>
        <div className ='PhotoAttributesDiv'>
          
            <p className='nasaParagraphDiv'>
            Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000. If instead you prefer to search by the Earth date on which a photo was taken, you can do that too.
            </p>
            <p className='nasaParagraphDiv'>
            Along with querying by date, results can also be filtered by the camera with which it was taken. Each camera has a unique function and perspective, and they are named as follows:
            </p>
        
        </div>
        <br />
        <br />
        <br />
        <h1>Perseverance rover cameras:</h1>
        <div className='rover-info'>
            <div className='rover-cameras'>
                <img className='roverPic' src='img/perseverance-cameras.jpg'></img>
            </div>
            <div className='camera-table'>
                <table className='cameraTable'>
                    <tr className='tableTitles'>

                    <td><b>Abbreviation</b> </td> <td><b>Camera</b></td></tr>
                    <tr><td>EDL_RUCAM	 </td> <td> Rover Up-Look Camera</td></tr>
                    <tr><td>EDL_RDCAM	</td> <td> Rover Down-Look Camera</td></tr>
                    <tr><td>EDL_DDCAM	</td> <td> Descent Stage Down-Look Camera</td></tr>
                    <tr><td>EDL_PUCAM1	</td> <td> Parachute Up-Look Camera A</td></tr>
                    <tr><td>EDL_PUCAM2</td> <td> 	Parachute Up-Look Camera B</td></tr>
                    <tr><td>NAVCAM_LEFT</td> <td> 	Navigation Camera - Left</td></tr>
                    <tr><td>NAVCAM_RIGHT	</td> <td> Navigation Camera - Right</td></tr>
                    <tr><td>MCZ_RIGHT</td> <td> 	Mast Camera Zoom - Right</td></tr>
                    <tr><td>MCZ_LEFT </td> <td> 	Mast Camera Zoom - Left</td></tr>
                    <tr><td>FRONT_HAZCAM_LEFT_A	</td> <td> Front Hazard Avoidance Camera - Left</td></tr>
                    <tr><td>FRONT_HAZCAM_RIGHT_A	</td> <td> Front Hazard Avoidance Camera - Right</td></tr>
                    <tr><td>REAR_HAZCAM_LEFT</td> <td> 	Rear Hazard Avoidance Camera - Left</td></tr>
                    <tr><td>REAR_HAZCAM_RIGHT	</td> <td> Rear Hazard Avoidance Camera - Right</td></tr>
                    <tr><td>SKYCAM </td> <td> 	MEDA Skycam</td></tr>
                    <tr><td>SHERLOC_WATSON </td> <td> 	SHERLOC WATSON Camera</td></tr>
                </table>
            </div>
        </div>
        <br />

        <h1> Curiosity, Opportunity, and Spirit cameras:</h1>
        <table className='cameraTable'>
        <tr className='tableTitles'><td><b>Abbreviation</b></td><td>	<b>Camera</b></td><td>	<b>Curiosity</b></td>	<td><b>Opportunity</b></td>	<td><b>Spirit</b></td></tr>
        <tr><td>FHAZ</td><td>Front Hazard Avoidance Camera</td>	<td>✔</td><td>✔</td><td>✔</td></tr>
        <tr><td>RHAZ</td>		<td>	Rear Hazard Avoidance Camera</td><td>✔</td><td>✔</td><td>✔</td></tr>
        <tr><td>MAST</td>			<td>Mast Camera</td>	<td>✔</td><td></td><td></td></tr>
        <tr><td>CHEMCAM</td>		<td>	Chemistry and Camera Complex</td><td>✔</td><td></td><td>	</td></tr>
        <tr><td>MAHLI</td>		<td>Mars Hand Lens Imager</td>		<td>✔	</td><td> </td><td>	</td></tr>
        <tr><td>MARDI</td>		<td>	Mars Descent Imager</td>	<td>✔</td><td>	</td><td>	</td></tr>
        <tr><td>NAVCAM</td>			<td>Navigation Camera</td><td>✔	</td><td>✔</td><td>	✔</td></tr>
        <tr><td>PANCAM</td>		<td>Panoramic Camera</td>	<td>✔</td><td>✔</td><td></td></tr>
        <tr><td>MINITES</td>			<td>Miniature Thermal Emission Spectrometer (Mini-TES)</td><td>✔</td><td>✔</td><td></td></tr>
        </table>
        <br />
        <br />
        <br />
        <h1>Querying the API</h1>
        <div className='queryExamplesDiv'>



        <h3>The API can be queried in the following format:</h3>
        <h2>Queries by Martian sol:</h2>

        <p>Queries by sol can range from 0, which is the date of landing, up to the current maximum in the database. The current max sol for each rover can be found at that rover's endpoint.
        </p>

        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&sol=1</h4></i>
        <br />
        <br />
        <hr className='exampleHr' />
        <h2>Querying by Earth date:</h2>

        <p>Dates should be formatted as 'yyyy-mm-dd'. The earliest date available is the date of landing for each rover.</p>

        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&earth_date=2021-3-28</h4></i>
        <br />
        <br />
        <hr className='exampleHr' />
        <h2>Filtering Queries by Camera:</h2>
        <p>The camera parameter is not case sensitive, but must be one of the camera abbreviations listed in the table above for the respective rover.</p>

        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&sol=22&camera=MCZ_RIGHT</h4></i>
        <br />

        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?api_key=DEMO_KEY&earth_date=2021-3-05&camera=MCZ_RIGHT</h4></i>
        <br />
        <br />
        <hr className='exampleHr' />
        <h2>Query For Latest Photos</h2>
        <p> you just want to receive photo data for the most recent Sol for which photos exist for a particular rover, you can visit the /latest_photos endpoint.</p>

        <i><h4>https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=DEMO_KEY</h4></i>
        <br />
        </div>
  </>
    )
}