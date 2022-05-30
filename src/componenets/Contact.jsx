import React, {Component} from "react";
import ContactService from '../Services/ContactService'
export default class Contact extends Component{
    constructor(props)
    {
        super(props)

        this.state={
            firstName:' ',
            lastName:' ',
            email:' ',
            mobile:' ',
            msg:' ',
            error:' '
        }
    }

    handleFirstName=(event)=>
    {
        this.setState({
            firstName:event.target.value
        })
    }
    handleLastName=(event)=>
    {
        this.setState({
            lastName:event.target.value
        })
    }
    handleEmail=(event)=>
    {
        this.setState({
            email:event.target.value
        })
    }
    handleMobile=(event)=>
    {
        this.setState({
            mobile:event.target.value
        })
    }
    handleFormSubmission=(event)=>
    {
        event.preventDefault();
        this.saveCustomer(this.state)
    }

    saveCustomer(contact)
    {
        ContactService.addContact(contact).then(response=>
            {
                console.log(response) 
                this.setState({
                  
                        firstName:' ',
                        lastName:' ',
                        email:' ',
                        mobile:' ',
                        msg:response.data,
                        error:' '
                   
                })
                
            })
            .catch(error=>console.log(error))
    }
    render(){
        return(
        <div className="container">
            <h2 className="text-info"> Contact Us</h2>
            <hr/>
            <form onSubmit={this.handleFormSubmission}>
                <div className="form-group">
                    <label>FirstName</label>
                    <input onChange={this.handleFirstName} value={this.state.firstName} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>LastName</label>
                    <input onChange={this.handleLastName} value={this.state.lastName} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={this.handleEmail} value={this.state.email} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input onChange={this.handleMobile} value={this.state.mobile} className="form-control"/>
                </div>
                <br/>
                
                    <button className="btn-btn-primary ">Send Enquiry</button>
                
            </form>
                 {
                 this.state.msg && <h5 className="alert alert-success">{this.state.msg}</h5>
                 }
        </div>
        )

    }
}