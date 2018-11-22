import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

const styles = {
  form: {
    width: 800
  },
  fullList: {
    width: "auto"
  },
  formTitle: {
    marginLeft: "10px",
    marginBottom: "30px",
    marginTop: "30px",
    color: "#000000"
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    marginLeft: "10px"
  },
  formLabel: {
    width: "100px",
    marginRight: "20px",
    color: "#000000"
  },
  labelContainer: {
    marginTop: "8px",
    marginBottom: "4px"
  },
  textField: {
    width: "600px",
    color: "#000000"
  },
  closeBtn: {
    position: "absolute",
    right: "20px",
    marginTop: "15px",
    fontSize: "20px",
    cursor: "pointer",
    color: "rgba(0, 0, 0, 0.40)",
    fontWeight: "600"
  }
};

class TemporaryDrawer extends React.Component {
  render() {
    const { classes, currCardData } = this.props;
    if (currCardData.coreData === undefined){
      return <Redirect to="/" />
    }
    return (
      <Drawer anchor="right" open={true}>
        <div tabIndex={0} role="button">
          <Button
            mini
            className={classes.closeBtn}
            onClick={() => this.props.history.push("/")}
          >
            x
          </Button>
          <form className={classes.form}>
            <Grid container direction="column">
              <Typography variant="display1" className={classes.formTitle}>
                {currCardData.coreData.number}
              </Typography>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>
                  Assigned to
                </InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.coreData.assignee}
                  margin="none"
                />
                <br />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>
                  Short description
                </InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.coreData.shortDescription}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>
                  Application
                </InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.coreData.appication}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>made_sla</InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.serviceData.made_sla}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>
                  upon_reject
                </InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.serviceData.upon_reject}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>opened_by</InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.serviceData.opened_by}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>priority</InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.serviceData.priority}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>
                  activity_due
                </InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.serviceData.activity_due}
                  margin="none"
                />
              </div>
              <div className={classes.inputContainer}>
                <InputLabel className={classes.formLabel}>approval</InputLabel>
                <TextField
                  id="standard-name"
                  className={classes.textField}
                  value={currCardData.serviceData.approval}
                  margin="none"
                />
              </div>
            </Grid>
          </form>
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  currCardData: state.currCardData
});

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(TemporaryDrawer))
);
