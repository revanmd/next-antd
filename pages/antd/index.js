import { Select, Row, Col, Form, Layout, Menu, Breadcrumb } from "antd"
import Link from "next/link";

const { Header, Content, Footer } = Layout;
const { Option } = Select


const AntdPage = () => {
    return (
        <>

            <Layout>
                <Header
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={
                            [
                                {
                                    label:(<Link href='/home'>Home</Link>),

                                },
                                {
                                    label:'About',
                                    children:[
                                        {
                                            label:'Biodata',
                                            children:[
                                                {
                                                    label:'Nama'
                                                }
                                            ]
                                        }
                                    ]
                                },

                            ]
                        }
                    />
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 380,
                        }}
                    >
                        Content
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
            {/* <Form>
                <Row>
                    <Col span={8}>
                        <Form.Item>
                            <Select
                                showSearch
                                placeholder="Select a person"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                </Row>
            </Form> */}
        </>
    )
}

export default AntdPage