import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from './Alert';

class Checkout extends Component{

    constructor(props) {
        super(props);
        this.state = { openAlert:false ,vertical: 'bottom',horizontal: 'center',fields: {},errors: {}, isChecked:false};
        this.handleClick=this.handleClick.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      /* if it leaves, sutract the shipping from the total */
    componentWillUnmount() {
         if(this.state.isChecked===true)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
            this.setState({isChecked: true});
        }
        else{
            this.props.substractShipping();
            
            this.setState({isChecked: false});
        }
    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }

    /* click checkout button */
    handleClick = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["email"] = "";
            this.setState({fields:fields});
            this.setState({ openAlert: true})
        }
      };

      validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email.";
        }
        this.setState({
          errors: errors
        });
        return formIsValid;
      }


      handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({ openAlert: false});
      };

    render(){
  
        let vertical =this.state.vertical;
        let horizontal= this.state.horizontal;
        return(
            <Paper elevation={5} className="checkoutContainer" >
                    <TextField type="email" label="Email" variant="outlined" name="email" value={this.state.fields.email} onChange={this.handleChange} className="txtFields" /> 
                    <div className="errorMsg">{this.state.errors.email}</div>
                   {/*  <TextField  label="List any allergies" variant="outlined" name="allergies" value={this.state.fields.allergies} onChange={this.handleChange} className="txtFields" /> 
                    <div className="errorMsg">{this.state.errors.emailid}</div> */}
                    <Typography variant="h6">  <Checkbox checked={this.state.isChecked} ref="shipping" onChange= {this.handleChecked}/>Shipping FEE ( $10.00 )</Typography>
                        <Typography variant="h6"> Total: ${this.props.total}</Typography>
                    <div className="checkoutBtn">
                        <Button variant="contained" onClick={this.handleClick}>Checkout</Button>
                    </div>

                    <Snackbar open={this.state.openAlert} autoHideDuration={6000} onClose={this.handleClose} anchorOrigin={{ vertical, horizontal }} >
        <Alert onClose={this.handleClose} sx={{ width: '100%' }}>Thank you for ordering</Alert>
      </Snackbar>
            </Paper> 
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
