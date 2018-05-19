import React, {Component} from 'react';

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteId=props.noteid;
    this.noteContent=props.notecontent;
  }

  remove(id){
      console.log('ooo',this.noteId);
  }

  render(){

    return(
   <div className="Note">
       <span onClick={()=>this.remove(this.noteId)}>&times; </span>
       <p>{this.noteContent}</p>
   </div>
    )
  }
}
export default Note;