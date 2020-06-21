import React from 'react'
import { Input, Button, Form, message } from 'antd';
import { login } from "../../action/login"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import server from "../../api"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  onFinished = async (values) => {
    if (this.state.loading) return;
    try {
      const res = await server("/user/login", 'post', values);
      if (res) {
        this.props.login(res);        
      }
    } catch (error) {
      message.error(error.msg || 'error')
    }
  }

  onFinishFailed = () => {
  }

  onRegister = () => {
    this.props.history.push({
      pathname: "/register"
    })
  }

  render() {
    let { loading } = this.state;
    return (
      <Form
        {...layout}
        name="login"
        onFinish={this.onFinished}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            登录
        </Button>
          <Button onClick={this.onRegister}>注册</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default withRouter(connect(null, { login })(Login))
