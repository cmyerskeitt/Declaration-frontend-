import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component {  
    render() {     
        return (
            <h1>Hello World</h1>     
        )
    }
} 
export default connect()(App);
