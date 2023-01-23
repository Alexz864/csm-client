// pages
import Home from './pages/Home';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Matches from './pages/Matches';
import NotFound from './pages/NotFound';

// styled components
import {StyledContainer} from './components/Styles';

// router
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Players from './pages/Players';
import About from './pages/About';


function App({checked}) {

  return (
    <Router>
      <Navbar/>
      { checked &&
      <StyledContainer>
        <Routes>
          <Route element={<AuthRoute/>}>
            <Route element={<AdminDashboard/>} path="/admin-dashboard" />
          </Route>

          <Route element={<BasicRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/matches" element={<Matches/>}/>
            <Route path="/players" element={<Players/>}/>
            <Route path="/about" element={<About/>}/>
          </Route>

          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </StyledContainer>
      }
      <Footer/>
    </Router>
  );
}
const mapStateToProps = ({session}) => ({
  checked:  session.checked
})

export default connect(mapStateToProps)(App);