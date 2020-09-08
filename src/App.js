import React, { Component, Suspense } from 'react'
import { Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import routes from './routes'
import Header from './Components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import authOperations from './Redux/Operations/authOperations'
import authSelector from './Redux/Selections/authSelector'
import PrivateRoute from './Components/PrivateRoute'
import PublicRoute from './Components/PublicRoute'


class App extends Component {

  componentDidMount() {
    this.props.isCurrentUser()
  }

  render() {
    return (
      <Suspense fallback={<h2>Load</h2>}>
      <Container fluid="md">
        <div>
          <Header />
          <Switch>
            {routes.map(route =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                ),
              )}
          </Switch>
        </div>
      </Container>
      </Suspense>
    )
  }
};

const mapStateToProps = state => ({
  isAuth: authSelector.isAuthenticated
 })

export default connect(mapStateToProps, { isCurrentUser: authOperations.currentUser })(App)
