import { Select, Row, Col, Form, Layout, Menu, Breadcrumb, Input, Button } from "antd"
import Link from "next/link";

const { Header, Content, Footer } = Layout;
const { Option } = Select


const FormPage = () => {
    const [FormUser] = Form.useForm()

    return (
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
                                label: (<Link href='/home'>Home</Link>),

                            }
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
                <Form
                    form={FormUser}
                >
                    <Row
                        style={{
                            padding: '20px 0'
                        }}
                        gutter={20}
                    >
                        <Col lg={12} xs={24}>
                            <Form.Item
                                name='username'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Basic usage"

                                />
                            </Form.Item>
                        </Col>
                        <Col lg={12} xs={24}>
                            <Form.Item
                                name='password'
                            >
                                <Input placeholder="Basic usage" />
                            </Form.Item>
                        </Col>
                        <Col lg={12} xs={24}>
                            <Form.Item
                                name='type'
                            >
                                <Select
                                    mode="multiple"
                                    labelInValue={true}
                                    onChange={(e)=>{
                                        console.log(e)
                                    }}
                                    options={
                                        [
                                            {
                                                'value': 0,
                                                'label': 'Admin'
                                            },
                                            {
                                                'value': 1,
                                                'label': 'User'
                                            }
                                        ]
                                    }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>


                <Button
                    onClick={() => {
                        console.log(FormUser.getFieldsValue())
                    }}
                >
                    Login
                </Button>
            </Content>
        </Layout >
    )
}

export default FormPage