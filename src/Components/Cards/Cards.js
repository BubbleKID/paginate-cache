import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as actions from "../../Reducers/CardsActions";

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
  },
  loading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  fechingText: {
    marginBottom: theme.spacing.unit * 2
  },
  body: {
    backgroundColor: "#eeeeee"
  }
});

class Cards extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCards());
  }

  render() {
    const { classes, totalPage, currPage, cards, isLoading } = this.props;
    return (
      <React.Fragment>
        <Grid container className={classes.root} justify="center">
          {isLoading ? (
            <div className={classes.loading}>
              <span className={classes.fechingText}>
                Feching data from server
              </span>
              <CircularProgress className={classes.progress} />
            </div>
          ) : (
            <React.Fragment>
              <Grid item>
                <Grid
                  container
                  className={classes.cards}
                  justify="center"
                  spacing={16}
                >
                  {cards.map(card => (
                    <Grid key={card.coreData.id} item xs={3}>
                      <Card cardData={card} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Pagination totalPage={totalPage} currPage={currPage} />
            </React.Fragment>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  cards: state.cards,
  totalPage: state.totalPage,
  currPage: state.currPage
});

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Cards));
