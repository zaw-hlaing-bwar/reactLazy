import React from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends React.Component{
    render(){
        return(
            <div>
                <Link to="/page-one">Page One</Link> - 
                <Link to="/page-two">Page Two</Link> - 
                <Link to="/page-three">Page Three</Link> - 
                <Link to="/page-four">Page Four</Link>
            </div>
        )
    }
}