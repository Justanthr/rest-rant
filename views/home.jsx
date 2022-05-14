const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/coffee.jpg" alt="Latte art" />
                <div>
                  Photo by <a href="https://unsplash.com/@nate_dumlao">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos">Unsplash</a>
                </div>
              </div>
              <a href='/places'>
                  <button className='btn-primary'>Places Page</button>
              </a>
          </main>
      </Def>
    )
  }  

module.exports = home
