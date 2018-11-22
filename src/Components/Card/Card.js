import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card as MUICard} from "@material-ui/core/";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import * as actions from "../../Reducers/CardActions";
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

class Card extends Component {
  render() {
    const { classes, cardData, dispatch, history } = this.props;
    return (
      <MUICard className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            align="left"
          >
            {cardData.coreData.state}
          </Typography>
          <Typography
            className={classes.name}
            variant="h5"
            component="h2"
            align="left"
          >
            {cardData.coreData.number}
          </Typography>
          <Typography
            className={classes.pos}
            align="left"
            color="textSecondary"
          >
            Application: {cardData.coreData.application}
            <br />
            Assignee:{cardData.coreData.assignee}
          </Typography>
          <Typography component="p" align="left" className={classes.des}>
            {cardData.coreData.shortDescription.length > 66
              ? cardData.coreData.shortDescription.slice(0, 66).concat("......")
              : cardData.coreData.shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              dispatch(actions.setCurrentCard(cardData));
              history.push("/card/" + cardData.coreData.number);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </MUICard>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currCard: state.currCard
});

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Card)));
