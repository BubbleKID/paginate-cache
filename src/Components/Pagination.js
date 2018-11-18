import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 5
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Pagination extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Button className={classes.button}>Back</Button>
        <Typography>Page 1 of 414</Typography>
        <Button className={classes.button}>Next</Button>
      </div>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pagination);
