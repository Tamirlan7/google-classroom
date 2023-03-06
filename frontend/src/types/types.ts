export interface ILogin {
    username: string
    password: string
}

export interface IRegister {
    username: string
    password: string
    re_password: string
}

export interface IProfileField {
    fieldName: string
    value: string | undefined
    link: string
}

export interface IProfile {
    name?: string
    surname?: string
    nickname?: string
    birthday?: string
    phone?: string
    email?: string
    avatar?: string | File | null
    gender?: boolean | null
    personal_address?: string
    business_address?: string
    other_addresses?: string
} 

export interface IRoom {
    id: number
    owner_profile: {
        user: number
        name: string
        surname: string
        avatar: string
    }
    title: string
    section: string
    subject: string
    audience: string
    created_at: string
    updated_at: string
    code: string
    cover: string
    theme_color: string
}

export interface IUser {
    id: number
    username: string
    rooms: IRoom[]
}

export interface ITask {
    id: number
    body: string
    video_link: string
    files: string
    link: string
    created_at: string
    updated_at: string
}