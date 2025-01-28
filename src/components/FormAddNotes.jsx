import React  from 'react';
import {Modal, Form} from 'react-bootstrap';

class FormAddNotes extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notes: {
                title   : '',
                body    : '',
            },
            isValidTitle: false,
        };
    }


    onBodyChangeHandler = (e) => {
        this.setState(state => ({
            notes : {
                ...state.notes,
                body: e.target.value
            }
        }));
    }

    onTitleChangeHandler = (e) => {
        if(e.target.value.length <= 50){
            this.setState(state => ({
                notes : {
                    ...state.notes,
                    title: e.target.value
                }
            }));
        }else{
            this.setState({ isValidTitle: true })
            setTimeout(() => this.setState({ isValidTitle: false }), 1000)
        }
    }

    remainingChar = () => 50 - this.state.notes.title.length
    getNotes      = () => this.state.notes;

    render() {
        return (
            <Modal.Body>
                <Form>
                    <Form.Control isInvalid={this.state.isValidTitle} value={this.state.notes.title} onChange={this.onTitleChangeHandler} type="text" placeholder="Judul Catatan" />
                    <Form.Control.Feedback type="invalid">
                        Judul Tidak boleh Lebih Dari 50 karakter
                    </Form.Control.Feedback>

                    <Form.Control value={this.state.notes.body} onChange={this.onBodyChangeHandler} className='mt-3' as="textarea" placeholder="Tambahkan isi catatan disini" rows={3} />
                </Form>
                <p className='text-muted text-end fs-6 mt-3'>Sisa karakter judul: {this.remainingChar()}</p>
            </Modal.Body>
        );
    }
}

export default FormAddNotes;
 