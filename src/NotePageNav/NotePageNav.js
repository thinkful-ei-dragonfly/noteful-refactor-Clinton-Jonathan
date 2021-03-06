import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import './NotePageNav.css'
import Context from '../Context'
import { findNote, findFolder } from '../notes-helpers'

export default class NotePageNav extends React.Component {
  
  static defaultProps = {
    history: {
      goBack: () => {}
    },
    match: {params: {}}
  }

  static contextType = Context;

  render(){

    const note = findNote(notes, noteId) || {};
    const folder = findFolder(folders, note.folderId);
    const {notes, folders} = this.context;
    const {noteId} = this.props.match.params;

    return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='NotePageNav__back-button'
        >
          <FontAwesomeIcon icon='chevron-left' />
          <br />
          Back
        </CircleButton>
        {folder && (
          <h3 className='NotePageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
    )
  }
}

