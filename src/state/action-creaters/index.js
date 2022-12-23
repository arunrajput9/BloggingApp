// This file contains all the actions of the app are defined here

export const add = (blog)=>{
    return (dispatch)=>{
        dispatch({
            type:'add',
            payload:blog
        })
    }
}

export const edit = (key,blog)=>{
    return (dispatch)=>{
        dispatch({
            type:'edit',
            payload:blog,
            key:key
        })
    }
}


export const deleteBlog = (key)=>{
    return(dispatch)=>{
        dispatch({
            type:'delete',
            payload:key
        })
    }
}






