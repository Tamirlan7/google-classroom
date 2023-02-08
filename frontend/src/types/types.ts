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
    conditionName: string
}