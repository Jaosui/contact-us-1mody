import React from "react";
import { Card } from "antd";
import { Form, Input, InputNumber, Button } from "antd";
import Theme from "../styles/Theme.module.css";
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const onFinish = (values) => {
    console.log(values);// values เป็น obj,json อย่แล้ว
    const userPrev = JSON.parse( localStorage.getItem('user') ) || [];
    const key = Object.keys(userPrev).length
    const user = Object.assign({id: key},values);
    const userNew = Object.assign({},values);
    console.log(user)
    userPrev[ key ] = user;
    localStorage.setItem('user', JSON.stringify(userPrev));
    console.log('----------------')
    // localStorage.clear()
    router.push('/UsersDetails')
  }
  
  return (
    <div className={Theme.center}>
      <Card title="Contact Us" style={{ width: 500, height: 500 }}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input id="Name"/>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input id="email" />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="website" label="Website">
            <Input />
          </Form.Item>
          <Form.Item name="introduction" label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit" >
              Send
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
