import { Button, Form, Input, Modal } from 'antd';
import React, { useRef } from 'react';
import { useState } from 'react';

// export default function AddToDo({ addTask }) {

//     const [name, setName] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if(name.trim().length)
//         {
//             addTask(name);
//             setName('');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <input type="text" value={name} onChange={(e)=>{ setName(e.target.value) }}/>
//                 <button>Add</button>
//             </form>
//         </div>
//     )
// }


export default function AddToDo({ addTask }) {

    const form = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    function submitHandler(values) {
        addTask(values.name)
        form.current.resetFields();
        handleCancel();
    }

    return (
        <>
            <Button
                type="primary"
                onClick={showModal}
            >
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    onFinish={submitHandler}
                    ref={form}
                >
                    <Form.Item name='name' rules={[{ required: true }]}>
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