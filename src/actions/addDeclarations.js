export const addDeclaration = declaration => {
    return{
        type: 'ADD_DECLARATION',
        declaration: Object.assign({}, declaration, {likes: 0})
    }
}