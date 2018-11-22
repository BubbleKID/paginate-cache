import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import * as actions from "../../State/Pagination/PaginationAction";

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
    const { classes, dispatch, currPage, cachedPage, pages } = this.props;
    return (
      <div className={classes.container}>
        <Button
          className={classes.button}
          onClick={() => {
            dispatch(actions.goBack(currPage, cachedPage));
          }}
        >
          Back
        </Button>
        <Typography>
          Page {this.props.currPage} of {this.props.totalPage}
        </Typography>
        <Button
          className={classes.button}
          onClick={() => dispatch(actions.goNext(currPage, cachedPage, pages))}
        >
          Next
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currPage: state.currPage,
  cachedPage: state.cachedPage,
  pages: state.pages
});

Pagination.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  currPage: PropTypes.number.isRequired,
  cachedPage: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Pagination));
