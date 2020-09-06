import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'
import routes from './routes'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ContactsPage from './Pages/ContactsPage'
import NotFoundPage from './Pages/NotFoundPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import authOperations from './Redux/Operations/authOperations'

class App extends Component {

  // useEffect(() => {
  //   console.log("gthtpfuhepbkjcm")
  //   isCurrentUser()
   
  // }, [])
  componentDidMount(){
    console.log("componentDidMount")
      this.props.isCurrentUser()
  }
  
  render() {
    return (
      <Container fluid="md">
      <div>
        <Header />
        <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route  path={routes.register}  component={RegisterPage} />
        <Route  path={routes.login} component={LoginPage} />
        <Route  path={routes.contacts}  component={ContactsPage} />
        <Route  component={NotFoundPage}/>
        </Switch>
      </div>
      </Container>
    )
  }
};

export default connect(null, { isCurrentUser: authOperations.currentUser })(App)
