import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItemPeople from './ListItemPeople/ListItemPeople';
import style from './ListPeople.module.css'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import selections from '../../../Redux/Selections/selections'

const ListPeople = ({ contacts}) => {
console.log(contacts, "contacts")
  return (
    <div className={style.listPeopleBox}>
    <TransitionGroup className={style.list}>

      {contacts.map(contact =>
        <CSSTransition
          key={contact.id}
          timeout={500}
          classNames={style}>
          <ListItemPeople key={uuidv4()} {...contact}/>
        </CSSTransition>

      )}
    </TransitionGroup>
    </div>
  )
}

const mapStateToProps = ({state}) => ({
 contacts: selections.getContactFilterSelection(state)
})

export default connect(mapStateToProps)(ListPeople)

