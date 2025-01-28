import React, {useContext}  from 'react';
import {Form} from 'react-bootstrap';
import { NotesContext } from '../utils/NotesContext';

class FormFindNotes extends React.Component {
    static  contextType  = NotesContext;

    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
        };

    }

    searchNotes = () => {
        const { findNotes } = this.context; 
        findNotes({title: this.state.title});
    }


    onTitleChangeHandler = (e) => {
        this.setState({ title: e.target.value }, () => {
            this.searchNotes(); 
          })
    }

    render() {

        return (
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control value={this.state.title} onChange={this.onTitleChangeHandler} className='rounded-pill' type="text" placeholder="cari..." width={ 100 }/>
            </Form.Group>
        );
    };
}

export default FormFindNotes;
 