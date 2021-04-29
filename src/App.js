import React from 'react'
import {connect} from 'react-redux'
import DeclarationForm from './components/DeclarationForm'
import Declaration from './containers/Declaration'

class App extends React.Component {  
    render() {     
        return (
            <div>
                 <h1>Declaration</h1>
                 <DeclarationForm/>
                 <Declaration/>
            </div>
            
              
        )
    }
} 
export default connect()(App);
