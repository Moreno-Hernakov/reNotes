import React from 'react';
import {Container, Navbar, Button, Row, Col} from 'react-bootstrap';

import FormFindNotes from './FormFindNotes';

function NavbarNotes(props) {
    const { onShow } = props
    
    return (
        <Navbar sticky="top" expand="xl" className="bg-info-subtle p-3">
            <Container>
                <Navbar.Brand className='fw-bold text-info fs-3'>
                    reNotes <i className="fa-solid fa-file-pen"></i>
                </Navbar.Brand>

                <Row>
                    <Col sm={7} xs={6}>
                        <FormFindNotes />
                    </Col>
                    <Col>
                        <Button onClick={onShow} variant="info" size='sm' className='px-4 mt-1 text-white rounded-pill'>
                            <i className="fa-solid fa-plus"></i> Tambah
                        </Button>
                    </Col>
                </Row>

            </Container>
        </Navbar>
    );
}
 
export default NavbarNotes;