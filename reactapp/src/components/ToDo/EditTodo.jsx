import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react'

export default function EditTodo({task, editTask, setEditing}) {
    const [form] = Form.useForm();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOk = () => { setIsModalOpen(false); setEditing(false)};
    const handleCancel = () => { setIsModalOpen(false); setEditing(false) };

    function submitHandler(values) {
        editTask(task.id ,values.name)
        form.current.resetFields();
        handleCancel();
    }
    
    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    onFinish={submitHandler}
                    ref={form}
                    // initialValues={}
                >
                    <Form.Item initialValue={task.name} name='name' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary' value='Save' />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
