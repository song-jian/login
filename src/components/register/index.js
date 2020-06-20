import React from 'react'
import { Input, Button, Form, message } from 'antd';
import server from '../../api';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    onFinished = async (values) => {
        if (this.state.loading) return;
        try {
            const res = await server("/user/register", 'post', values);
            message.success(res || 'success')
        } catch (error) {
            message.error(error ? error.msg : 'error')
        }
    }
    onFinishFailed = () => {
    }

    onRegister = () => {
        this.props.history.push({
            pathname: "/register"
        })
    }

    validatePassword = (rule, value, cb) => {
        if (value == undefined || value == "") {
            return cb(new Error("请输入确认密码"))
        } else {
            const password = this.refs.form.getFieldValue("password")
            if (password === value) {
                return cb()
            } else {
                return cb('两次输入密码不一样')
            }
        }
    }

    render() {

        console.log(this.props.form);
        let { loading } = this.state;
        // console.log(form)
        return (
            <Form
                {...layout}
                ref="form"
                onFinish={this.onFinished}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱" name="email" rules={[{ required: true, message: "请输入用户名" }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码" }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item label="确认密码" name="passwordConfirm" rules={[{
                    required: true, validator: this.validatePassword,
                    validateTrigger: 'onBlur'
                }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        注册
        </Button>
                </Form.Item>
            </Form>

        )
    }
}

export default Register