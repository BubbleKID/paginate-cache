import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "./SimpleCard";
import Pagination from "./Pagination";
import TemporaryDrawer from "./TemporaryDrawer";
import axios from "axios";
const styles = theme => ({
  root: {
    flexGrow: 1,
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
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      cards: [],
      total: 0,
      cardsPerPage: 12,
      currPage: 1,
      totalPage: 0,
      currCardData: "",
      drawerOpen: false
    };
    this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
  }
  handleOpenDrawer(value) {
    this.setState({
      currCardData: value,
      drawerOpen: true
    });
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
            "https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=0&perPage=12",
            {
              headers: {
                apiToken: self.state.token,
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            }
          )
          .then(function(response) {
            const totalPage =
              Math.ceil(
                parseInt(response.headers["x-total-count"]) /
                  self.state.cardsPerPage
              ) - 1;
            self.setState({
              cards: response.data,
              total: parseInt(response.headers["x-total-count"]),
              totalPage: totalPage
            });
          })
          .catch(function(error) {
            console.log(error);
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
        {this.state.currCardData.coreData && <TemporaryDrawer
          coreData={this.state.currCardData.coreData}
          serviceData={this.state.currCardData.serviceData}
          drawerOpen={this.state.drawerOpen}
        />}
       
        <Grid container className={classes.root} justify="center">
          <Grid item>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={16}
            >
              {this.state.cards.map(card => (
                <Grid key={card.coreData.id} item>
                  <SimpleCard
                    card={card}
                    handleOpenDrawer={this.handleOpenDrawer}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Pagination
            totalPage={this.state.totalPage}
            currPage={this.state.currPage}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

CardsView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardsView);
