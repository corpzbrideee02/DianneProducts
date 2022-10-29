import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/actions";
import Snackbar from "@mui/material/Snackbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ExpandMore } from "./ExpandMore";
import { Item } from "./Item";
import "./styling/css_all.css";
import { Alert } from "./Alert";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      openAlert: false,
      vertical: "bottom",
      horizontal: "center",
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  handleClick = (id) => {
    this.props.addToCart(id);
    this.setState({ openAlert: true });
  };
  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openAlert: false });
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  createMarkup = (item) => {
    return { __html: item.meta_description };
  };

  render() {
    let dd = new DOMParser();
    let vertical = this.state.vertical;
    let horizontal = this.state.horizontal;

    /* return all products */
    let itemList = this.props.products.map((item) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Card
              sx={{ maxWidth: 400 }}
              key={item.id}
              style={{ margin: "0 auto" }}
            >
              <CardHeader title={item.name} subheader={item.sku} />
              <CardMedia
                component="img"
                height="300"
                image={item.primary_image.url_standard}
                alt={item.primary_image.description}
              />
              <Typography variant="h6"> ${item.price} </Typography>
              <CardContent>
                <Typography variant="body2" color="text.secondary"></Typography>

                <div dangerouslySetInnerHTML={this.createMarkup(item)}></div>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  variant="contained"
                  onClick={() => {
                    this.handleClick(item.id);
                  }}
                  style={{ margin: "0 auto" }}
                >
                  Add to Cart
                </Button>

                <ExpandMore
                  expand={this.state.expanded}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="show more"
                  style={{ margin: "0 auto", textAlign: "left" }}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Full Description:</Typography>

                  {/* Convert the html tags into readable string*/}
                  <Typography variant="body2" color="text.secondary">
                    {
                      dd.parseFromString(item.description, "text/html").body
                        .textContent
                    }
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>

          {/* alert open */}
          <Snackbar
            open={this.state.openAlert}
            autoHideDuration={4000}
            onClose={this.handleClose}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Alert onClose={this.handleClose} sx={{ width: "100%" }}>
              An item was Added to your Cart!
            </Alert>
          </Snackbar>
        </Grid>
      );
    });

    return (
      <div className="homeContainer">
        <section className="homeSection">
          <Typography gutterBottom variant="h4" component="div">
            {" "}
            Hooray! We have your products ready.
          </Typography>
        </section>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {itemList}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
