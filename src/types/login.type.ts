
// -- login --

namespace Login {
    export interface web {
        username: string
        password: string
    }

    export interface other {
        [x: string]: string
    }
}


export interface i_loginType {
    // path: string
    Component: any
    [key: string]: any
}

