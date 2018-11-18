import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Button onClick={this.toggleDrawer("right", true)}>Open Right</Button> */}
        <Drawer
          anchor="right"
          open={this.state.right}
          //onClose={this.toggleDrawer("right", false)}
        >
          <div
            tabIndex={0}
            role="button"
            //onClick={this.toggleDrawer("right", false)}
            //onKeyDown={this.toggleDrawer("right", false)}
          >
            <Button
              
              mini
              
              className={classes.closeBtn}
              onClick={this.toggleDrawer("right", false)}
            >
              x
            </Button>
            <form className={classes.form}>
              <Grid container direction="column">
                <Typography variant="display1" className={classes.formTitle}>
                  INCXXXXXXXX
                </Typography>
                <div className={classes.inputContainer}>
                  <InputLabel className={classes.formLabel}>
                    Assigned to
                  </InputLabel>
                  <TextField
                    id="standard-name"
                    className={classes.textField}
                    value={"sing.le"}
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
                    value={
                      "Cron Task: create ticket (time: Mon Apr 9 06:52:16 2018)"
                    }
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
                    value={"System"}
                    margin="none"
                  />
                </div>
                <div className={classes.inputContainer}>
                  <InputLabel className={classes.formLabel}>
                    made_sla
                  </InputLabel>
                  <TextField
                    id="standard-name"
                    className={classes.textField}
                    value={"true"}
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
                    value={"System"}
                    margin="none"
                  />
                </div>
                <div className={classes.inputContainer}>
                  <InputLabel className={classes.formLabel}>
                    opened_by
                  </InputLabel>
                  <TextField
                    id="standard-name"
                    className={classes.textField}
                    value={"Cancel all futrue Tasks"}
                    margin="none"
                  />
                </div>
                <div className={classes.inputContainer}>
                  <InputLabel className={classes.formLabel}>
                    priority
                  </InputLabel>
                  <TextField
                    id="standard-name"
                    className={classes.textField}
                    value={"5 - Not Urgent"}
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
                    value={"In 1 Day"}
                    margin="none"
                  />
                </div>
                <div className={classes.inputContainer}>
                  <InputLabel className={classes.formLabel}>
                    approval
                  </InputLabel>
                  <TextField
                    id="standard-name"
                    className={classes.textField}
                    value={"Not Yet Requested"}
                    margin="none"
                  />
                </div>
              </Grid>
            </form>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
