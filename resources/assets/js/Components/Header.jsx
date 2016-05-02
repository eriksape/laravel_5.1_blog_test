import React from 'react'

export default React.createClass({
  render(){
    let listas = _.map(this.props.menu, (m) => (
      <li key={m.id}>
        <a href="#">{m.title}</a>
      </li>
    ))
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Start Bootstrap</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">

                    {listas}
                  </ul>
              </div>
          </div>
      </nav>
    )

  }
})
