import React from 'react'
import {connect} from 'react-redux'
import DeclarationForm from './components/DeclarationForm'
import Declarations from './containers/Declarations'


class App extends React.Component {  
    render() {     
        return (
            <div>
                <div>
                 <h1>Declarations Header </h1>
                 </div>
                 <DeclarationForm/>
                 <Declarations/>
            </div>
            
              
        )
    }
} 
export default connect()(App);
