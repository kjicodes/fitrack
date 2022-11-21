import './NewWorkoutPost.css';
import Card from 'react-bootstrap/Card';

export default function NewWorkoutPost(props) {
  return (
    <div className="NewWorkoutPost">
      <Card>
        <Card.Header>(Date) {props.workout.date} | At: {props.workout.time}</Card.Header>
        <Card.Body>
          <Card.Text id="card-title">Workout: </Card.Text>
          <Card.Text id="card-text">
            {props.workout.type} | 
            {props.workout.duration} mins | 
            Next goal(s): {props.workout.comment}
          </Card.Text>
        </Card.Body>
      </Card>
  </div>
  )
};
