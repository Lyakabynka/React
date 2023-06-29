import { Button, Form, Input } from 'antd'
import React, { useRef } from 'react'

export default function Forms() {

    const form = useRef(null);

    const submitHandler = (values) => {
        console.log(values);
        form.current.resetFields();
    }

    const initialValues = {
        name: "",
        amount: 1,
        price: 0
    }

    return (
        <div>
            <Form
                ref={form}
                onFinish={submitHandler}
                initialValues={initialValues}
                labelCol={{ span: 8, }}
                wrapperCol={{ span: 16, }}
                style={{ maxWidth: 600, }}>
                <Form.Item
                    name="name"
                    label="Product Name: "
                    rules={[
                        { required: true, message: "Name is required" },
                        { min: 3 },
                        { max: 50 },
                        { pattern: /^[a-z ]+$/, message: 'Number is not supported' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="name" label="Product Name: "
                    rules={[
                        { required: true, message: "Name is required" },
                        { min: 3 },
                        { max: 50 },
                        { pattern: /^[a-z ]+$/, message: 'Number error' }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="name" label="Product Name: ">
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16
                    }}>
                    <Button htmlType='submit' value='Save' />
                </Form.Item>
            </Form>
        </div>
    )
}
