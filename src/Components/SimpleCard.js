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
    height: 240
  },
  title: {
    fontSize: 14
  },
  name: {
    marginTop: 15
  },
  pos: {
    marginBottom: 15
  },
  des: {
    height: 40
  }
};

class SimpleCard extends Component {
  render() {
    const { classes, card } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            align="left"
          >
            {card.coreData.state}
          </Typography>
          <Typography
            className={classes.name}
            variant="h5"
            component="h2"
            align="left"
          >
            {card.coreData.number}
          </Typography>
          <Typography
            className={classes.pos}
            align="left"
            color="textSecondary"
          >
            Application: {card.coreData.application}
            <br />
            Assignee:{card.coreData.assignee}
          </Typography>
          <Typography component="p" align="left" className={classes.des}>
            {card.coreData.shortDescription.length > 66
              ? card.coreData.shortDescription.slice(0, 66).concat("......")
              : card.coreData.shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={()=>this.props.handleOpenDrawer(card)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
