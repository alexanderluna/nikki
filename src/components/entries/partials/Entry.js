import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardActions, CardContent, Link, Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 345,
    gridRowEnd: 'span 8',
  },
}));

export default function Entry({ id, content }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
        <CardActions>
          <Link
            to={`/edit/${id}`}
            component={RouterLink}
          >
            Edit
          </Link>
          <Link
            to={`/delete/${id}`}
            color="secondary"
            component={RouterLink}
          >
            Delete
          </Link>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
