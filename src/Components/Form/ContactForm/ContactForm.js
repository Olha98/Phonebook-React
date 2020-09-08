import React from 'react';
import css from './ContactForm.module.css'


const ContactForm = ({ name, number, handleChange }) => {
  return (
  
 <div className={css.boxContact}>
      <form className={css.formContact}>
        <h2>Phonebook</h2>
      <label>
        <p>Name</p>
        <input type="text" name="name" onChange={handleChange} value={name} className={css.nameInput}/>
      </label>
      <label>
        <p>Number</p>
        <input type="text" name="number" onChange={handleChange} value={number} className={css.nameInput}/>
      </label>
      <button type="submit" className={css.submitInput}>Add</button> 
    </form>

    </div>
  )
}

export default ContactForm
