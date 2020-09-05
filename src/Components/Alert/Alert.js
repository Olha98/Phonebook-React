import React from 'react';
import css from './Alert.module.css'


const AlertModal = () => {
  return (
    <div>
      <div  className={css.boxAlert}>
        <p>Contact already exists!Oh snap! You got an error!</p>
      </div>
    </div>
  )
}

export default AlertModal

