import React from "react"
import {connect} from 'react-redux'
import uuid from 'uuid'
import {addDeclaration} from '../actions/addDeclarations'

class DeclarationForm extends React.Component {
    state = {
         content: '',
         author: '',
         category: '',
         
    }


    handleOnChange = event => {
    const { value, name } = event.target 
    this.setState({
        [name]: value
    })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const declaration ={...this.state, id: uuid }
        this.props.addDeclaration(declaration)
        this.setState({
            content: '',
            author: '',
            category: '',
            likes: 0
        })
    }


 
    render(){
        return(
            <div>
                <form>
                    <p>
                    <label>Declaration:</label><br></br>
                    <textarea  name="content" onChange={this.handleOnChange} value={this.state.name}></textarea>
                    <br></br>
                    <label>Author:</label>
                    <input type="text" name="author" onChange={this.handleOnChange} value={this.state.author}/>
                    <br></br>
                    <label>Category:</label>
                    <input type="text" name="category" onChange={this.handleOnChange} value={this.state.category}/>
                    </p>
                    <button type="submit" onSubmit={this.handleOnSubmit}>Add Declaration</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addDeclaration})(DeclarationForm)