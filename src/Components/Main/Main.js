import React from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css'

function Main() {
    const {Header, Footer, Sider, Content} = Layout
    return (
        <>
        <Layout>
                <Sider className='theSider'>This is the sider</Sider>
            <Layout>
                <Header className='theHeader'>This is the Header</Header>
                <Content className='theContent'>This is the Content</Content>
                <Footer className='theFooter'>THis is the Footer</Footer>
            </Layout>
        </Layout>
        </>
    )
}

export default Main
