import React from 'react'
import { isEqual } from 'lodash'

const ButtonNavigation = React.createClass({
  render(){
    const { className, description, show } = this.props
    if( show ){
      return ( <div style={{display:'none'}}/> )
    }
    else{
      return(
        <li className={className}>
          <a href="#">{description}</a>
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
        <ButtonNavigation show={isEqual(current_page, last_page)} className="previous" description="&larr; Older" />
        <ButtonNavigation show={isEqual(current_page, 1)} className="next" description="Newer &larr;" />
      </ul>
    )
  }
})
