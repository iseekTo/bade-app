import React from 'react'
import { Layout, Breadcrumb } from 'antd'
import Menu from './Menu'

// import Routes from '../router/index'

const { Header, Content, Sider } = Layout

//-- Index --
const Home = () => {

    return (
        <Layout>
            <Layout>
                <Menu />
            </Layout>

        </Layout>
    )
}

export default Home
