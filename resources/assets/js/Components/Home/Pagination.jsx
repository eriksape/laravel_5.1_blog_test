import React from 'react'
import { isEqual } from 'lodash'

const ButtonNavigation = React.createClass({
  reload(url){
    const { reload } = this.props
    console.log(url)
    fetch(url.replace('localhost:8000', 'localhost:3000')).then( response => response.json() ).then( json => {
      console.log(json)
      reload(json);
    } )
  },
  render(){
    const { className, description, show, url } = this.props
    if( show ){
      return ( <div style={{display:'none'}}/> )
    }
    else{
      return(
        <li className={className}>
          <a href="#" onClick={this.reload.bind(this,url)}>{description}</a>
        </li>
      )
    }
  }
})

export default React.createClass({
  render(){
    const { current_page, last_page, prev_page_url, next_page_url } = this.props.page
    return (
      <ul className="pager">
        <ButtonNavigation url={ next_page_url } reload={this.props.reload} show={isEqual(current_page, last_page)} className="previous" description="&larr; Older" />
        <ButtonNavigation url={ prev_page_url } reload={this.props.reload} show={isEqual(current_page, 1)} className="next" description="Newer &larr;" />
      </ul>
    )
  }
})
