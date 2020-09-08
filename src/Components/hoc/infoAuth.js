import React from 'react'
import authSelector from '../../Redux/Selections/authSelector'
import { connect } from 'react-redux'

const infoAuth = (WrapperComponent) => {
  function infoAuth (props){
    return <WrapperComponent {...props}/>
  }

  
  const mapStateToProps = state => ({
    isAuth: authSelector.isAuthenticated(state),
  });
  
 return connect(mapStateToProps)(infoAuth)
  
}

export default infoAuth

