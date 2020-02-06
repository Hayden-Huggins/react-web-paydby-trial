import Main from './Main'
import {connect} from 'react-redux'

// mapping the user state down to all components of this app 
function mapStateToProps(state)
{
    return {user: state}
}

const App = connect(mapStateToProps)(Main)

export default App