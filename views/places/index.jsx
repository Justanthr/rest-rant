const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className='col-sm-6'>
                <h2 className='text-center'>{place.name}</h2>
                <p className='text-center'>
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}></img>
                <p className='text-center'>
                    Located in {place.city}, {place.state}
                </p>
                <a className='visit text-center' href={`/places/${index}`}>Visit</a>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Index Page</h1>
                 <div className='row'>
                     {placesFormatted}
                 </div>
            </main>
        </Def>
    )
  }  

module.exports = index