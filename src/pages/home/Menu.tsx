import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';


import menuRoute from '../../util/menu'
import '../../assets/menu.css'
import ArrayMenuType from '../../types/menu.type';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'


const { SubMenu } = Menu
const { Sider } = Layout;


const MenuWall = () => {
    const subKeys: string[] = ['sub_one', 'sub_two', 'sub_three']
    const history = useHistory()
    const [openKeys, setOpenKeys] = useState<string[]>(['sub_one'])


    const onOpenChange = (keys: string[]) => {
        const lastOpenKey: any = keys.find((key: string) => !openKeys.includes(key))
        if (!subKeys.includes(lastOpenKey)) {
            setOpenKeys(keys)
        } else {
            setOpenKeys([lastOpenKey] || [])
        }
    }


    const repeatMenu = (menuRoute: ArrayMenuType) => {
        return menuRoute.map(({ path, title, children, icon }) => {
            if (children) {
                return (
                    // 可加入鉴权，丢失token或者未存在用户信息不可访问
                    <SubMenu
                        key={path}
                        title={
                            <span>
                                {/* render icon here  <MailOutlined /> */}
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
                        {/* render icon here  <MailOutlined /> */}
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
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256, height: '100vh' }}
                defaultOpenKeys={[menuOpened]}
                defaultSelectedKeys={[pathname]}
            >
                {
                    repeatMenu(menuRoute)
                }
            </Menu>
        </Sider>
    )
}

export default MenuWall
