type route = {
    path: string
    exact: boolean
    component: React.ComponentType
}

export type routeType = Array<route>