import './NewWorkoutPost.css';
import Card from 'react-bootstrap/Card';

export default function NewWorkoutPost(props) {
  return (
    <div className="NewWorkoutPost">
      <Card>
        <Card.Header>(Date) {props.workout.date} | At: {props.workout.time}</Card.Header>
        <Card.Body>
          <Card.Text as="h5">Workout:</Card.Text>
          <Card.Text as="p">{props.workout.type}</Card.Text>
          <Card.Text as="p">{props.workout.duration} mins</Card.Text>
          <Card.Text as="p">For Next Time: {props.workout.comment}</Card.Text>
        </Card.Body>
      </Card>
  </div>
  )
};
