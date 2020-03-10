import ArrayMenuType  from '../types/menu.type'

const menuRoute: ArrayMenuType = [
    {
        path: '/welcome',
        title: '欢迎你',
        icon: ''
    },
    {
        path: '/fruit',
        title: '水果',
        icon: '',
        children: [
            {
                path: '/fruit',
                title: 'add fruit',
                icon: ''
            }
        ]
    }
]

export default menuRoute
