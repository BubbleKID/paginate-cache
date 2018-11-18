import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "./SimpleCard";
import Pagination from "./Pagination";
import axios from "axios";
const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 30,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 30,
    backgroundColor: "#eeeeee"
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});
//const axios = require("axios");
class CardsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .post(
        "https://atr-test-dh1.aiam-dh.com/atr-gateway/identity-management/api/v1/auth/token",
        {
          password: "password",
          username: "frontendtest"
        }
      )
      .then(function(response) {
        console.log(response.data.token);
        self.setState({
          token: response.data.token
        });
        axios
          .get(
            "https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=0&perPage=10",
            {
              headers: {
                apiToken:self.state.token,
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            }
          )
          .then(function(response) {
            // handle success
            console.log(response);
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          })
          .then(function() {
            // always executed
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
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
