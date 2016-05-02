import React from 'react'
import _ from 'lodash'
import fetch from 'isomorphic-fetch'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home/Home.jsx'

const HolaMundo = React.createClass({
  getInitialState: function() {
    return {
      menu:[
        {
          title:'Acerca de',
          id:1
        },
        {
          title:'Servicios',
          id:2
        },
        {
          title:'Contacto',
          id:3
        }
      ],
      posts: [],
      page:{}
    }
  },
  componentDidMount() {
    fetch('blog')
    .then(response => response.json())
    .then(json => { this.setState({ posts:json.data, page:_.omit(json, ['data']) }) } )
  },
  reload(json){
    this.setState({ posts:json.data, page:_.omit(json, ['data']) })
  },
  render(){
    return (
      <div>
        <Header menu={this.state.menu} />
        <Home posts={this.state.posts} page={this.state.page} reload={this.reload} />
        <Footer />
      </div>
    )
  }
})

export default HolaMundo
