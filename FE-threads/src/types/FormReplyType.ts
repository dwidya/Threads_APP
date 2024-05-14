import { UserType } from "./UserType";


export type ReplyType = {
    id?: number
    user?: UserType
    content?: string
}

export type ReplyPostType = {
    thread_id?: number
    content?: string
}
