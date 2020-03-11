import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import { createFromIconfontCN } from '@ant-design/icons'


import menuRoute from '../../util/menu'
import '../../assets/menu.css'
import ArrayMenuType from '../../types/menu.type'


const { SubMenu } = Menu
const { Sider } = Layout

// iconfront图标库里的icon
const IconFront = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
})


const MenuWall = () => {
    const history = useHistory()


    const repeatMenu = (menuRoute: ArrayMenuType) => {
        return menuRoute.map(({ path, title, children, icon }) => {
            if (children) {
                return (
                    // 可加入鉴权，丢失token或者未存在用户信息不可访问
                    <SubMenu
                        key={path}
                        title={
                            <span>
                                {icon || ''}
                                <span>{title}</span>
                            </span>
                        }
                    >
                        {repeatMenu(children)}
                    </SubMenu>
                )
            }
            return (
                // 可加入鉴权，丢失token或者未存在用户信息不可访问
                <Menu.Item key={path}>
                    <Link to={path} >
                        {icon || ''}
                        <span>{title}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }


    const { pathname } = history.location
    const menuOpened = `/${pathname.split('/')[1]}`;

    return (
        <Sider width={256} className="site-layout-background">
            <Menu
                mode="inline"
                style={{ width: 256, height: '100vh' }}
                defaultOpenKeys={[menuOpened]}
                defaultSelectedKeys={[pathname]}
            >
                {repeatMenu(menuRoute)}
            </Menu>
        </Sider>
    )
}

export default MenuWall
