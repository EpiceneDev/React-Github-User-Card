import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function UserCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card class={classes.card} >
            <CardContent>
                        <Typography className={classes.title} color="textPrimary" gutterBottom>{props.user.login}</Typography>
                        <Typography className={classes.pos} color="textSecondary">Location: {props.user.location || "unknown"}</Typography>
                        <Typography variant="body2" component="p">Followers: 
                        {props.followers.map(follower => (
                            <div key={follower.id}>{bull}{follower.login}</div>
                        ))}
                        </Typography>
                        <p class="card-text"><small class="text-muted">{props.user.url}</small></p>
            </CardContent>
        </Card>
    )
};
    

export default UserCard;