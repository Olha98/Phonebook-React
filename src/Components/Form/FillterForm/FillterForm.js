import React from 'react';
import style from './FillterForm.module.css'
import { connect } from 'react-redux';
import Actions from '../../../Redux/Actions/Actions'

const FillterForm=({value, onfilterChange})=>{
return(
  <>
    <h2>Contacts</h2>
      <label>
      <p className={style.contactsTitle}>Find contacts by name</p>
          <input type="text" name="filter"  value={value} onChange={(e) => {
            onfilterChange(e.target.value)
            }}/>
      </label>
</>
)}

const mapDispatchToProps = {
  onfilterChange: Actions.filterChange,
};

export default connect(null, mapDispatchToProps)(FillterForm)

