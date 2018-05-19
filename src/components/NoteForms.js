import React, {Component} from 'react';

class NoteForms extends Component {
    constructor(){
        super()
        this.addNote=this.addNote.bind(this);

    }

    addNote() {
//  console.log(this.textInput.value);
        if(this.textInput.value !=''){
            this.props.addNote(this.textInput.value);
            this.textInput.value ='';
            this.textInput.focus();
        }else{
            alert('POR FAVOR INGRESE UNA TAREA !!');
        }
    }
    
    render() {
        return(
            <div className="NoteForms">
               <input ref={input => {this.textInput= input;}} type="text" placeholder="write a note"/>
               <button onClick={this.addNote}>add Notes</button>
            </div>
        )
    }
}

export default NoteForms;