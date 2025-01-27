import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ContactUs = () => {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phoneNumber: ""
    })
    let { name, email, phoneNumber, message } = formData;

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/enquiry', formData)
            .then((res) => {
                toast.success("Your Query has been submitted successfully")
            })
            .catch((err) => {
                console.log(err)
            })
        console.log(formData);

    }
    return (
        <div>
            <div>
                <h3>Contact Us</h3>
                <p>#384 Sai Raksha Enclave ,RR Nagar </p>
                <p>+91 8095460172</p>
                <p>prajwalpavan01@gmail.com</p>

            </div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name='name' required placeholder='Enter your Name' value={name} onChange={handleChange} />
                    <label>Email:</label>
                    <input type="email" name='email' required placeholder='Enter your Email id' value={email} onChange={handleChange} />
                    <label>Phone Number:</label>
                    <input type="tel" name='phoneNumber' placeholder='Enter your Phone Number' value={phoneNumber} onChange={handleChange} />
                    <label>Message:</label>
                    <textarea rows={5} cols={44} name='message' placeholder='Please Write your Query?' value={message} onChange={handleChange}></textarea>
                    <button>Submit Query</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs