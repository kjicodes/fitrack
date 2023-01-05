import './NewWorkoutPost.css';
import 'semantic-ui-css/semantic.min.css'
import { Card, Image } from 'semantic-ui-react';

import HeartIcon from '../../fit-heart-icon-favicon.png';

export default function NewWorkoutPost(props) {
  return (
    <div className="NewWorkoutPost">
      <Card color="yellow">
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={HeartIcon}
            draggable={false}
          />
          <Card.Header>{props.workout.startDate}</Card.Header>
          <Card.Meta>At {props.workout.time}</Card.Meta>
          <Card.Description>
            {props.workout.type} <span>| </span> {props.workout.duration} mins <span>| </span>Goal(s): {props.workout.comment}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
};
