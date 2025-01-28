import React from 'react';
import {Col, Card,} from 'react-bootstrap';
import NotesItemHeader from './NotesItemHeader';
import { showFormattedDate } from '../utils/index';

function NotesItem({ createdAt, body, title, archived, id}) {

    const dataHeader    = {archived, title, id}
    
    return (
        <Col className='mb-3' md='6' lg='4'>
            <Card className='border-info-subtle h-100 rounded-4 shadow border-2 p-0'>
                <Card.Body>
                    <NotesItemHeader {...dataHeader}></NotesItemHeader>

                    <Card.Text className=''>
                        { body }
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <p style={{fontSize:'0.7rem'}} className='text-muted text-end align-self-end mb-0 '>
                        {showFormattedDate(createdAt)}
                    </p>
                </Card.Footer>
            </Card>
        </Col>
    );
}
 
export default NotesItem;