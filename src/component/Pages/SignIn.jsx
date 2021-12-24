import React, {useState} from "react";
import {Modal, Form} from "react-bootstrap";
import '../../App.css';

const SignIn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow (true);

    return (
        <>


            <a  className="button9" onClick={handleShow} >Log In</a>
            <button  className="button9" onClick={handleClose}>Log out</button>

            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header>
                    <Modal.Title className="form__title">Вход</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="form"  >
                        <Form.Group className="form__input-wrapper">
                            <Form.Label className='form__label'>Login</Form.Label>
                            <Form.Control
                                className="form__input"
                                type="text"
                                placeholder="Введите Login" />

                        </Form.Group>
                        <Form.Group className="form__input-wrapper" controlId="formBasicPassword">
                            <Form.Label className='form__label'>Password</Form.Label>
                            <Form.Control  className="form__input" type="text" placeholder="Введите пароль" />

                        </Form.Group>
                        <Form.Group className="form__checkbox-wrapper" controlId="formBasicCheckbox">
                            <Form.Check className="form__checkbox"  type="checkbox" />
                            <Form.Label className="form__checkbox-label" for="checkbox">
                                Я согласен с <a href="" > Правилами пользования приложением</a>
                            </Form.Label>

                        </Form.Group>
                        <button className="button9" type="submit">Вход</button>

                    </Form>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default SignIn;