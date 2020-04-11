import React from 'react'
import { Layout } from 'antd'
import { Header as HeaderWall, Menu, Content } from '../../pages/home/ExportTsx'


//-- Index --
const Home = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderWall />
            <Layout>
                <Menu />
                <Content />
            </Layout>
        </Layout>
    )
}

export default Home
