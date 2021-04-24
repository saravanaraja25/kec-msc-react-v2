import React,{useState} from 'react'
import {db} from '../firebase';
import emailjs from 'emailjs-com';

const Admission = () => {
    const [loading,setLoading]=useState(false);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[mark10,setMark10]=useState("");
    const[mark11,setMark11]=useState("");
    const[fathername,setFatherName]=useState("");
    const[mothername,setMotherName]=useState("");
    const[dob,setdob]=useState("");
    const[address,setAddress]=useState("");
    const[district,setDistrict]=useState("");
    const[state,setState]=useState("");
    const[pincode,setPincode]=useState("");
    const[phone,setPhone]=useState("");
    const[query,setQuery]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        setLoading(true)
        db.collection("enquiry").add({
            name: name,
            email:email,
            fathername: fathername,
            mothername: mothername,
            dob: dob,
            address: address,
            district: district,
            state: state,
            pincode: pincode,
            phone: phone,
            mark10:mark10,
            mark11:mark11,
            query:query
        }).then(()=>{
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then(() => {
                alert("Your Form Submitted. We'll Contact You Back Soon.")
                setName("")
                setEmail("")
                setMark10("")
                setMark11("")
                setQuery("")
                setFatherName("")
                setMotherName("")
                setdob("")
                setAddress("")
                setDistrict("")
                setState("")
                setPincode("")
                setPhone("")
                setLoading(false)
            }, (error) => {
                console.log(error.text);
            });
        }).catch((error)=>{
            console.log(error)
            alert("Form Submission Failed");
        })
    }
    return (
        <div data-aos="fade-up" className="admission">
            <div className="breadcrumb py-5 mb-3">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-6">
                            <h2>Admission Enquiry</h2>
                        </div>
                        <div className="col-6 text-right">
                            <h6 className="mt-2">Home / Admission</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="p-5" onSubmit={handleSubmit}  >
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} name="name" className="form-control mb-4" placeholder="Enter Your Name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control mb-4" placeholder="Enter Your E-Mail ID" required />
                            <label htmlFor="fathername">Father Name:</label>
                            <input type="text" id="fathername" value={fathername} onChange={(e)=>setFatherName(e.target.value)} name="fathername" className="form-control mb-4" placeholder="Enter Your Father Name" required />
                            <label htmlFor="mothername">Mother Name:</label>
                            <input type="text" id="mothername" value={mothername} onChange={(e)=>setMotherName(e.target.value)} name="mothername" className="form-control mb-4" placeholder="Enter Your Mother Name" required />
                            <label htmlFor="dateofbirth">Date of Birth:</label>
                            <input type="date" id="dateofbirth" value={dob} onChange={(e)=>setdob(e.target.value)} name="dateofbirth" className="form-control mb-4" placeholder="Pick Your Date of Birth" required />
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" className="form-control mb-4" placeholder="Enter Your Address" required />
                            <label htmlFor="district">District:</label>
                            <input type="text" id="district" value={district} onChange={(e)=>setDistrict(e.target.value)} name="district" className="form-control mb-4" placeholder="Enter Your District" required />
                            <label htmlFor="state">State:</label>
                            <input type="text" id="state" value={state} name="state" onChange={(e)=>setState(e.target.value)} className="form-control mb-4" placeholder="Enter Your State" required />
                            <label htmlFor="pincode">Pincode:</label>
                            <input type="number" id="pincode" value={pincode} name="pincode" onChange={(e)=>setPincode(e.target.value)} className="form-control mb-4" placeholder="Enter Your Pincode" required />
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="number" id="phone" value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} className="form-control mb-4" placeholder="Enter Your Phone Number" required />
                            <label htmlFor="10thmark">10th Mark(in %):</label>
                            <input type="number" id="10thmark" value={mark10} name="10mark" onChange={(e)=>setMark10(e.target.value)} className="form-control mb-4" placeholder="Enter Your 10th Standard Mark (in %)" min="0" max="100" required />
                            <label htmlFor="11thmark">11th Mark:</label>
                            <input type="number" id="11thmark" value={mark11} name="11mark" onChange={(e)=>setMark11(e.target.value)} className="form-control mb-4" placeholder="Enter Your 11th Standard Mark " min="0" required />
                            <label htmlFor="query">Any Query?</label>
                            <textarea name="query" className="form-control" value={query} onChange={(e)=>setQuery(e.target.value)} id="query" cols="30" rows="3"></textarea>
                            <button disabled={loading} className="btn btn-dark btn-block my-4" type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6"></div>                    
                </div>
            </div>
        </div>
    )
}

export default Admission
