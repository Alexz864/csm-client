// Admin-Dashboard can be accesed by anyone
import { Outlet, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({authenticated}) => {
    return(
        !authenticated ? <Outlet /> : (
            <Navigate to='/admin-dashboard' />)
    );
}

const mapStateToProps = ({session}) => ({
    authenticated: session.authenticated
})

export default connect(mapStateToProps)(AuthRoute);