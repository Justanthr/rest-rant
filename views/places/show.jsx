const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <section className='show-sec'>
            <img className='show-img' src={data.place.pic} alt={data.place.name} />
            <div className='show-ratedisc'>
              <div className='show-rate'>Rating</div>
              <div className='show-disc'>Discription</div>
            </div>
            </section>
            <div className='show-com'>Comments</div>
            <div className='show-btn'>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>  
              <form method="POST" action={`places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
              </form>    
            </div>
          </main>

        </Def>
    )
}

module.exports = show
