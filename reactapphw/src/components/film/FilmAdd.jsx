import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

export default function FilmAdd({ films, setFilms }) {


    const AddFilm = (name, year, image, director, description) => {
        let newFilm = {
            id: uuidv4(),
            name: name,
            year: year,
            image: image,
            director: director,
            description: description
        }

        setFilms([...films, newFilm]);
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     AddFilm(e.target[0].value,
    //         e.target[1].value,
    //         e.target[2].value,
    //         e.target[3].value,
    //         e.target[4].value);
    // }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => { setIsModalOpen(true); };
    const handleOk = () => { setIsModalOpen(false); };
    const handleCancel = () => { setIsModalOpen(false); };

    function submitHandler(values) {
        AddFilm(values.name, values.year, values.image, values.director, values.description);
        form.current.resetFields();
        handleCancel();
    }

    const form = useRef(null);

    return (
        <>
            <Button
                type="primary"
                onClick={showModal}
            >
                Add new Film
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
                    <Form.Item name='year' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='image' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='director' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name='description' rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button htmlType='submit' type='primary' value='Save' >Add</Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* <form onSubmit={submitHandler}>
                <input type='text' defaultValue={'Name'} /> <br />
                <input type='number' defaultValue={0} /> <br />
                <input type='text' defaultValue={'Image'} /> <br />
                <input type='text' defaultValue={'Director'} /> <br />
                <input type='text' defaultValue={'Description'} /> <br />
                <input type='submit' value={'submit'} />
            </form> */}
        </>
    )
}
