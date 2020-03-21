
/**
 * -- login --
 * @created 2020/03/15
 * @author lyb
 */

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

