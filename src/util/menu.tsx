import React from 'react'
import { SmileOutlined,  AppleOutlined} from '@ant-design/icons'

import ArrayMenuType  from '../types/menu.type'

const menuRoute: ArrayMenuType = [
    {
        path: '/welcome',
        title: '欢迎你',
        icon: <SmileOutlined />
    },
    {
        path: '/fruit',
        title: '水果',
        icon: <AppleOutlined />,
        children: [
            {
                path: '/fruit/handle',
                title: 'add fruit'
            },
            {
                path: '/fruit/list',
                title: '水果列表'
            }
        ]
    }
]

export default menuRoute
