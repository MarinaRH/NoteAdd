import React, {Component} from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteId=props.noteid;
    this.noteContent=props.notecontent;
  }

  handleRemove(id){
    // console.log('ooo',this.noteId);
    const response = window.confirm('deseas eliminarlo?');
    if(response){
      this.props.removeNote(id);
    }
    return
  }

  render(){

    return(
   <div className="Note">
      <span onClick={()=>this.handleRemove(this.noteId)}>&times; </span>
      <p>{this.noteContent}</p>
   </div>
    )
  }
}
export default Note;