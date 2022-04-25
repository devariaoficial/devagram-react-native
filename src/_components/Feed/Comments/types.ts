import { IUser } from '../../../_services/UserService/types';
export interface IComment {
    name: string
    message: string
    userId: string
}

export interface ICommentsComponent {
    idPost: string
    comments: IComment[]
    inputCommentIsActive: boolean
    userLogged: IUser,
}