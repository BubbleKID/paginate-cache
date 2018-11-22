import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import * as actions from "../SimpleCard/SimpleCardActions";
import { connect } from "react-redux";

const styles = {
  card: {
    width: "300px",
    height: "240px"
  },
  title: {
    fontSize: "14px"
  },
  name: {
    marginTop: "15px"
  },
  pos: {
    marginBottom: "15px"
  },
  des: {
    height: "40px"
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
            onClick={() => {
              this.props.dispatch(actions.setCurrentCard(card));
              this.props.history.push("/card/" + card.coreData.number);
            }}
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

const mapStateToProps = state => ({
  currCard: state.currCard
});

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(SimpleCard))
);
