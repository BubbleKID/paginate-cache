import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "./SimpleCard";
import Pagination from "./Pagination";

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 30,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 30,
    backgroundColor: "#eeeeee",
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class CardsView extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container className={classes.root} justify="center">
          <Grid item>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={16}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => (
                <Grid key={value} item>
                  <SimpleCard />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Pagination />
        </Grid> 
      </React.Fragment>
    );
  }
}

CardsView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardsView);
