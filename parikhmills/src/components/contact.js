import React , { Component, useState} from 'react';
import axios from 'axios';

class Contact extends Component{

    state={
        name:"",
        email:"",
        phone:"",
        company:"",
        sent:false
    }


    // handle inputs
    handleName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleEmail = (e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handlePhone = (e)=>{
        this.setState({
            phone:e.target.value
        })
    }
    handleCompany = (e)=>{
        this.setState({
            company:e.target.value
        })
    }
    // 

    //Form submit
    formSubmit = (e)=>{
        e.preventDefault();

        let data = {
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            company:this.state.company
        }
        axios.post("/api/forma",data)
        .then(res=>{
            this.setState({
                sent:true, 
                },this.resetForm())
            }).catch(()=>{
                console.log('Message not sent');
            })
    
    }
    //
    //reset initial data 
    resetForm=()=>{
        this.setState({
            name:'',
            email:'',
            phone:'',
            company:'',
        })

        setTimeout(()=>{
            this.setState({
                sent:false
            })
        })
    }
    // 
    render(){
        return(
            <>
            <div class="contact-box">
                <h2>Call Us +91 94091-47272 </h2>
                <div class="contact-inner">
                    <div class="contact-item item-1">
                        <form action="" method="">
                            <h3>Contact Us</h3>
                            <input type="name"  name="name"placeholder="Full Name" value={this.state.name} onChange={this.handleName} required=" "/>
                            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} required=" "/>
                            <input type="tel" name="phone" placeholder="Phone Number"value={this.state.phone} onChange={this.handlePhone} required=" "/>
                            <input type="text" name="company" placeholder="Company" value={this.state.company} onChange={this.handleCompany} required=""/>
                            <button>Submit</button>
                        </form>
                    </div>
                    <div class="contact-item item-2">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14732.696884514036!2d73.46259081297198!3d22.609968425584025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e29ff2250f3dd%3A0x63aa40e498f37ec3!2sKalol%2C%20Gujarat%20389330!5e0!3m2!1sen!2sin!4v1642486876240!5m2!1sen!2sin" 
                    width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
                    </div>

                </div>
            </div>
            </>
        )
    }
}
export default Contact;