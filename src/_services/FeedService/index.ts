import * as DevagramApiService from '../DevagramApiService'
const getPosts = async (id?: string) => {
    let url = '/feed'
    if(id){
        url = `/feed?id=${id}`
    }
    return await DevagramApiService.get(url)
}

const toggleLike = async (postId: string) => {
    return await DevagramApiService.put(`like?id=${postId}`)
}

const sendComment = async (postId: string, message: string) => {
    return await DevagramApiService.put(`comentario?id=${postId}`, { "comentario": message})
}

export {getPosts, toggleLike, sendComment}