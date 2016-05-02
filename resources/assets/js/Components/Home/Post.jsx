import React from 'react'

export default React.createClass({
  render(){
    const { title, published_at, slug, content } = this.props.post
    return (
      <div>
        <h2>
            <a href="#">{title}</a>
        </h2>
        <p className="lead">
            by <a href="index.php">Start Bootstrap</a>
        </p>
        <p><span className="glyphicon glyphicon-time"></span> Posted on {published_at}</p>
        <hr/>
        <img className="img-responsive" src="http://placehold.it/900x300" alt=""/>
        <hr/>
        <p>{content}</p>
        <a className="btn btn-primary" href="#">Read More <span className="glyphicon glyphicon-chevron-right"></span></a>

        <hr/>
      </div>
    )
  }
})
