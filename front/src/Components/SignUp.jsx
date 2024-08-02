import {useState } from 'react';
//import Header from '../PageComponents/Header';
import axios from 'axios'
import Header from '../PageComponents/Header';
const SignUp = () => {
        const [formData, setFormData] = useState({
        UserName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        state: '',
        LinkedIn: '',
        github: '',
        resume: null,
    });


   
        
        const handleChange = (e) => {
        
        // const { name, value } = e.target;
        
        setFormData({...formData, [e.target.name]: e.target.value });
        
        };
        
        const handleSubmit = async (e) => {
            
        e.preventDefault();
        window.location.href = "/login";
        try {
        
        const formDataSend = new FormData();
        formDataSend.append('UserName', formData.UserName);
        formDataSend.append('firstName', formData.firstName);
        formDataSend.append('lastName', formData.lastName);
        formDataSend.append('email', formData.email);
        formDataSend.append('password', formData.password);
        formDataSend.append('confirmPassword', formData.confirmPassword);
        formDataSend.append('address', formData.address);
        formDataSend.append('city', formData.city);
        formDataSend.append('state', formData.state);
        formDataSend.append('LinkedIn', formData.LinkedIn);
        formDataSend.append('github', formData.github);
        formDataSend.append('resume', formData.resume);

        const response = await axios.post('http://172.17.15.233:5001/auth/register', formDataSend);
        window.location.href = "/login";
        console.log("Form data submitted successfully:", response.data);
        
        } catch (error) {
        
        console.error("Error submitting form data:", error);
        
        }
        
        };



















   

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };



    return (
        <div className="container mx-auto p-32 pt-10">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
               
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            required
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />

                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            required
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            required
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Create Password</label>
                        <input
                            required
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            required
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="address">Address</label>
                        <input
                            required
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div> */}
                    <div>
                        <label htmlFor="city">City</label>
                        <input
                            required
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    {/* <div>
                        <label htmlFor="state">State</label>
                        <input
                            required
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div> */}
                    <div>
                        <label htmlFor="linkedin">LinkedIn url</label>
                        <input
                            required
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"/>
                    </div>
                    <div>
                        <label htmlFor="github">Github url</label>
                        <input
                            required
                            type="text"
                            id="github"
                            name="github"
                            value={formData.github}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="resume">Upload Resume</label>
                        <input
                            required
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
                {/* <Header firstname={formData.firstName} phoneNumber={formData.phoneNumber} email={formData.email} linkedIn={formData.LinkedIn} github={formData.github} /> */}
            </form>
            {/* {<Header firstName={formData.firstName} phoneNumber={formData.phoneNumber} email={formData.email}  linkedIn={formData.LinkedIn} github={formData.github} /> } */}

            
        </div>
    );
}

export default SignUp;