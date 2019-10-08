import React from 'react';
import Nav from './../components/Nav'

export default class PageOne extends React.Component{
    render(){
        return([
            <Nav/>,
            <div>
                Hello PageOne
            </div>
        ]
        )
    }
}