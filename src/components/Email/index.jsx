import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Body_Email } from "./index.style";

export function Email({ show, setShow }) {

    const handleClose = () => setShow(false);

    return (
        <Body_Email>
            <Modal show={show} onHide={handleClose} centered style={{ color: "#252525" }}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-container">
                        <FloatingLabel controlId="floatingSelect" label="Select a type of message">
                            <Form.Select
                                aria-label="Floating label select example"
                                onChange={(e) => { setMessageType(e.target.value) }}
                            >
                                <option>Select a type</option>
                                <option value="Technical Issues">Technical Issues</option>
                                <option value="Game Questions">Game Questions</option>
                                <option value="Suggestions and Feedback">Suggestions and Feedback</option>
                                <option value="Accounts and Bans">Accounts and Bans</option>
                                <option value="Reports">Reports</option>
                                <option value="Purchase Questions">Purchase Questions</option>
                                <option value="Purchase Issues">Purchase Issues</option>
                                <option value="Refunds and Returns">Refunds and Returns</option>
                                <option value="Chargebacks and Fraud">Chargebacks and Fraud</option>
                                <option value="Store Account">Store Account</option>
                                <option value="Others">Others</option>
                            </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subject"

                        >
                            <Form.Control type="text" placeholder="Enter subject" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Message">
                            <Form.Control
                                className="textarea"
                                placeholder="Leave you message here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Form.Group controlId="formFileMultiple">
                            <Form.Control type="file" multiple size="lg" />
                        </Form.Group>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Body_Email>
    )
}