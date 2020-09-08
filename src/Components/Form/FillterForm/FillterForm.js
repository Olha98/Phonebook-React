import React from 'react';
import style from './FillterForm.module.css'
import './FillterForm.module.css'
import { connect } from 'react-redux';
import Actions from '../../../Redux/Actions/Actions'
import ListPeople from '../ListPeople/ListPeople';

const FillterForm=({value, onfilterChange})=>{
return(
  <div class={style.boxContact}>
  <form className={style.boxFilter}>
    
      <label className={style.label}>
          <input type="text" name="filter" className={style.boxInput}  placeholder="FIND CONTACTS BY NUMBER..." value={value} onChange={(e) => {
            onfilterChange(e.target.value)
            }}/>
      </label>
      <button type="submit" className={style.boxSubmit}></button>
      <ListPeople />
</form>
</div>
)}

const mapDispatchToProps = {
  onfilterChange: Actions.filterChange,
};

export default connect(null, mapDispatchToProps)(FillterForm)



// {/* <div class="d6">
// <form>
//   <input type="text" placeholder="Искать здесь...">
//   <button type="submit"></button>
// </form>
// </div> */}
