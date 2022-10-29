import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from './actions/actions'
import Checkout from './Checkout';
import './styling/css_all.css';
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Item } from "./Item";

class Cart extends Component{

    
    //add item
    increaseQty = (id)=>{
        this.props.addQuantity(id)
        var result = this.props.items.filter(obj => {return obj.id === id})[0].quantity;
        ;
        
        this.setState({ qty: result });
    }


    //minus item
    decreaseQty = (id)=>{this.props.subtractQuantity(id); }

    //to completely remove the item 
    handleRemove = (id)=>{ this.props.removeItem(id);
    }

 


    render(){

        console.log("props item: ", this.props.items)
        /* returns all the items in the cart */
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                                <Grid item xs={12} sm={6} md={4} >
                                <Item>
                                    <Card
                                    sx={{ maxWidth: 400 }}
                                    key={item.id}
                                    style={{margin: '0 auto'}}
                                    >
                                    <CardHeader title={item.name} subheader={item.sku} />
                                    <CardMedia
                                        component="img"
                                        minHeight="300"
                                        image={item.primary_image.url_standard}
                                        alt={item.primary_image.description}
                                    />
                                  
                                    <CardContent>
                                    <Typography variant="body1"> Price: ${item.price} </Typography>
                                    <Typography variant="body1"> Quantity: {item.quantity} </Typography>
                                    <div className="add-remove">
                                            <Link to="/cart"><AddCircleOutlineOutlinedIcon fontSize="large" onClick={()=>{this.increaseQty(item.id)}}/></Link>
                                            <Link to="/cart"><DoNotDisturbOnOutlinedIcon fontSize="large" onClick={()=>{this.decreaseQty(item.id)}}/></Link>
                                        </div>
                                        <Button variant="contained" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button>
                                    </CardContent>
                                    </Card>
                                </Item>
                                </Grid>
                    )
                })
            ):
                /* If there's no item in the cart, notify the user*/
             (
             <div className="cartContainer"><Typography variant="h4"> Your have an empty cart.</Typography></div>
             )
       return(

            <div className="homeContainer">
                <section className="homeSection">
                <Typography variant="h4" component="div"> Your Orders</Typography
                ></section>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {addedItems}
            </Grid>
            {/* Only shows the Checkout if there's an item in the cart */}
                {
                this.props.items.length>0 ?
                <Checkout /> :<React.Fragment/>
                }
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return {
        items: state.cartReducer.addedItems
      }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)