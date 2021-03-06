import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/taskActions';
import Tasks from './tasks.jsx';

const mapStateToProps = ( state ) => ({
  tasks: fetchTasks
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
