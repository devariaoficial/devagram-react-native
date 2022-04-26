import * as DevagramApiService from '../DevagramApiService'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ILogin, IUser } from './types'

const login = async (body: ILogin) => {
    const {data} = await DevagramApiService.post('/login', body)
    await AsyncStorage.setItem('token', data.token)
    updateCurrentUser()
}

const register = async (body: FormData) => {
    await DevagramApiService.post('/cadastro', body, {"content-Type": "multipart/form-data"})
}

const updateCurrentUser = async () => {
    const user = await DevagramApiService.get('/usuario')
    await AsyncStorage.setItem('name', user.data.nome)
    await AsyncStorage.setItem('email', user.data.email)
    await AsyncStorage.setItem('id', user.data._id)
    await AsyncStorage.setItem('avatar', user.data.avatar)
}

const getCurrentUser = async () => {
    const user: IUser = {
        name: await AsyncStorage.getItem('name'),
        id: await AsyncStorage.getItem('id'),
        email: await AsyncStorage.getItem('email'),
        avatar: await AsyncStorage.getItem('avatar'),
        token: await AsyncStorage.getItem('token')
    }

    return user
}

const search = async (filter: string) =>  {
    return await DevagramApiService.get(`/pesquisa?filtro=${filter}`)
}

const getProfile = async (id: string) =>  {
    return await DevagramApiService.get(`/pesquisa?id=${id}`)
}

const toggleFollow = async (id: string) => {
    return await DevagramApiService.put(`/seguir?id=${id}`)
}

export {login, getCurrentUser, register, search, getProfile, toggleFollow}