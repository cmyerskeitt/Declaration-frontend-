export default function declarationReducer(state = [{declarations: []}], action){
    // let i
    // let declaration
    // debugger
    switch (action.type){
        case 'ADD_DECLARATION':
            return state.concat(action.declaration)
        default:
            return state   
    }
    
}

