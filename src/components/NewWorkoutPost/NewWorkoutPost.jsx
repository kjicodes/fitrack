import './NewWorkoutPost.css';
import Card from 'react-bootstrap/Card';

export default function NewWorkoutPost(props) {
  return (
    <div className="NewWorkoutPost">
      <Card as="div">
        <Card.Header>(Date) {props.workout.date} -- {props.workout.time}</Card.Header>
        <Card.Body>
          <Card.Text>
            Workout: {props.workout.type} | 
            Duration (mins): {props.workout.duration} | 
            Goals for next time: {props.workout.comment}
          </Card.Text>
        </Card.Body>
      </Card>
  </div>
  )
};
