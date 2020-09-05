import React from 'react';
import style from './ListItemPeople.module.css'
import { connect } from 'react-redux';
import operations from '../../../../Redux/Operations/operations'

const ListItemPeople = ({ name, number, id, onRemoveContact }) => {
  return (
    <>
      <li className={style.listItem}>{name}: {number}
      <button type="button" onClick={onRemoveContact} name={id}>Delite</button>
      </li>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveContact: (e) => {
      dispatch(operations.removeContactOperation(e.target.name))},
  } 
};

export default connect(null, mapDispatchToProps)(ListItemPeople)

