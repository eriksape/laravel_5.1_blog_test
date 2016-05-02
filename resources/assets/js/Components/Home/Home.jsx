import React from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import _ from 'lodash'
import Post from './Post.jsx'
import Pagination from './Pagination.jsx'

export default React.createClass({
  render(){
    const { posts, page, reload } = this.props
    return(
      <div className="container">

        <div className="row">

            {/*<!-- Blog Entries Column -->*/}
            <div className="col-md-8">

                <h1 className="page-header">
                    Page Heading
                    <small>Secondary Text</small>
                </h1>

                <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1500} transitionLeaveTimeout={1300}>
                  { _.map(posts, post => <Post key={post.id} post={post} />) }
                </ReactCSSTransitionGroup>

                {/*<!-- Pager -->*/}
                <Pagination page={page} reload={reload}/>

            </div>

            {/*<!-- Blog Sidebar Widgets Column -->*/}
            <div className="col-md-4">

                {/*<!-- Blog Search Well -->*/}
                <div className="well">
                    <h4>Blog Search</h4>
                    <div className="input-group">
                        <input type="text" className="form-control" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-search"></span>
                        </button>
                        </span>
                    </div>
                    {/*<!-- /.input-group -->*/}
                </div>

                {/*<!-- Blog Categories Well -->*/}
                <div className="well">
                    <h4>Blog Categories</h4>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled">
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                            </ul>
                        </div>
                        {/*<!-- /.col-lg-6 -->*/}
                        <div className="col-lg-6">
                            <ul className="list-unstyled">
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                                <li><a href="#">Category Name</a>
                                </li>
                            </ul>
                        </div>
                        {/*<!-- /.col-lg-6 -->*/}
                    </div>
                    {/*<!-- /.row -->*/}
                </div>

                {/*<!-- Side Widget Well -->*/}
                <div className="well">
                    <h4>Side Widget Well</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
                </div>

            </div>

        </div>
        {/*<!-- /.row -->*/}

        <hr />
        </div>
    )
  }
})
