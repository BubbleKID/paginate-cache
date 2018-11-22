import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "../SimpleCard/SimpleCard";
import Pagination from "../Pagination/Pagination";
import * as actions from "./CardsViewActions";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5.5,
    paddingRight: theme.spacing.unit * 30,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 30,
    backgroundColor: "#eeeeee"
  },
  control: {
    padding: theme.spacing.unit * 3
  }
});

class CardsView extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCards());
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.root} justify="center">
          <Grid item>
            <Grid
              container
              className={classes.cards}
              justify="center"
              spacing={16}
            >
              {this.props.cards.map(card => (
                <Grid key={card.coreData.id} item xs={3}>
                  <SimpleCard card={card} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Pagination
            totalPage={this.props.totalPage}
            currPage={this.props.currPage}
          />
          
         
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  totalPage: state.totalPage,
  currPage: state.currPage
});

CardsView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(CardsView));
