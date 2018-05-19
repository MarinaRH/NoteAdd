import React, {Component} from 'react';
import firebase from 'firebase';
import {DB_CONFIG} from './config';
import 'firebase/database';
import Note from './components/Note';
import NoteForms from './components/NoteForms';

class App extends Component {
  constructor() {
    super();
    this.state= {
      notes:[      
    ]
  }

  this.app=firebase.initializeApp(DB_CONFIG);
  this.db=this.app.database().ref().child('note');
  this.addNot=this.addNot.bind(this);
  this.removeNote=this.removeNote.bind(this);
}

  componentDidMount(){
  const {notes}= this.state;
  this.db.on('child_added', snap => {
    notes.push({
      noteId: snap.key,
      noteContent: snap.val().noteContent
    })
    this.setState({notes});
  });

  this.db.on('child_removed', snap =>{
    for(let i=0; i<notes.length; i++){
      if(notes[i].noteId = snap.key){
        notes.splice(i, 1);
      }
    }
 
     this.setState({notes});
   })
  }

  addNot(note) {
  // let {notes}=this.state;
  // notes.push({
  //   noteId:notes.length +1,
  //   noteContent:note
  // })
  // this.setState({
  //   notes:notes
  // });
  this.db.push().set({noteContent:note})
  }

  removeNote(noteId){
    this.db.child(noteId).remove();
  }
  render(){

    return(
    <div className="notesContainer">
      <div className="notesHeader">
        <h1>react y firebase app</h1>
      </div>

      <div className="notesBody">
      <h2>Agrega y elimina tus notas </h2>

      <ul>
        {
          this.state.notes.map(note =>{
          return(
            <Note 
            noteid={note.noteId}
            notecontent={note.noteContent}
            key={note.noteId}
            removeNote={this.removeNote}
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