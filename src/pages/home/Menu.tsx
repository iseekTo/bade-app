import React, { useState } from 'react'
import { Menu } from 'antd'
import { ClickParam } from 'antd/lib/menu'
import { useHistory } from 'react-router'

import routes from '../../router/route'
import '../../assets/menu.css'
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'

const { SubMenu } = Menu 
const menuStyle: React.CSSProperties = {
    height: '100vh',
}

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

    const onClickToRoute = ({ key }: Pick<ClickParam, 'key'>) => {
        history.push(key)
    }

    return (
        <div className='menu-box'>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={menuStyle}
            >
                <SubMenu
                    key="sub_one"
                    title={
                        <span>
                            {/* <MailOutlined /> */}
                            <span>Fruit MM</span>
                        </span>
                    }
                >
                    <Menu.Item key="fruit" onClick={onClickToRoute}>Add Fruit</Menu.Item>
                    <Menu.Item key="2">Fruit List</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub_two"
                    title={
                        <span>
                            {/* <AppstoreOutlined /> */}
                            <span>Other Page</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">O-MM</Menu.Item>
                    <Menu.Item key="4">L-MM</Menu.Item>
                </SubMenu>

            </Menu>
        </div>
    )
}

export default MenuWall
