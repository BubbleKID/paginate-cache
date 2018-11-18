import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    marginRight: "auto"
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            align="left"
          >
            New
          </Typography>
          <Typography variant="h5" component="h2" align="left">
            INCXXXXXX
          </Typography>
          <Typography
            className={classes.pos}
            align="left"
            color="textSecondary"
          >
            Application:System
            <br />
            Assignee:sing.le
          </Typography>
          <Typography component="p" align="left">
            This is an example of a long short description field that is
            truncat......
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
