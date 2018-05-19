import React, {Component} from 'react';
import Note from './components/Note'
import NoteForms from './components/NoteForms'

class App extends Component {
  constructor() {
    super();
    this.state= {
      notes:[      
      {noteId:1, noteContent:'note1'},
      {noteId:2, noteContent:'note2'}
    ]
  }
  this.addNot=this.addNot.bind(this);
}

addNot(note) {
  let {notes}=this.state;
  notes.push({
    noteId:notes.length +1,
    noteContent:note
  })
  this.setState({
    notes:notes
  });
}
  render(){

    return(
    <div className="notesContainer">
      <div className="notesHeader">
        <h1>react y firebase app</h1>
      </div>

      <div className="notesBody">
      <ul>
        {
          this.state.notes.map(note =>{
          return(
            <Note 
            noteid={note.noteId}
            notecontent={note.noteContent}
            key={note.noteId}
            />
          )
        })
        }
      </ul>
      </div>
      <div className="notesFooter">
      <NoteForms 
      addNote={this.addNot}
      />
      </div>
    </div>
   )
  }
}


export default (App);