import React from 'react';
import css from './ContactForm.module.css'
import './ContactForm.module.css'

const ContactForm = ({ name, number, handleChange }) => {
  return (
    <div className={css.containerUser}>
      <label>
        <p>Name</p>
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        <p>Number</p>
        <input type="text" name="number" onChange={handleChange} value={number} />
      </label>
      <button type="submit">Add</button>
    </div>
  )
}

export default ContactForm

