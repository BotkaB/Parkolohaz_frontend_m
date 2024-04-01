import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "../api/axios";
import useAuthContext from "../contexts/AuthContext";


export default function Regisztracio() {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
  
    const { loginReg, errors } = useAuthContext();


   
    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
     
        const adat = {
            name:name,
            email: email,
            password: password,
            password_confirmation:password_confirmation,
            _token: token,
      };
     
      loginReg(adat, "/register");
     
        
    };
        

    let token = "";
 
    const csrf = () =>
          axios.get("/token").then((response) => {
              
              token = response.data;
          });
       
       
    
  
 

    

  return (
    <div className="m-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Regisztráció</h1>
      <form onSubmit={handleSubmit}>

      <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Név:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
            id="name"
            placeholder="név"
            name="name"
          />
        </div>
        <div>
            {errors.email && (
              <span className="text-danger">{errors.name[0]}</span>
            )}
          </div>


        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="email"
            placeholder="email"
            name="email"
          />
        </div>
        <div>
            {errors.email && (
              <span className="text-danger">{errors.email[0]}</span>
            )}
          </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Jelszó:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="pwd"
            placeholder="jelszó"
            name="pwd"
          />
          <div>
            {errors.password && (
              <span className="text-danger">{errors.password[0]}</span>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pwd2" className="form-label">
            Jelszó mégegyszer:
          </label>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
            className="form-control"
            id="pwd2"
            placeholder="jelszó mégegyszer"
            name="pwd2"
          />
          <div>
            {errors.password && (
              <span className="text-danger">{errors.password_confirmation[0]}</span>
            )}
          </div>
        </div>

        <div className=" text-center">
          <button type="submit" className="btn btn-primary w-100">
            Regisztrálok
          </button>

         
        </div>
      </form>
    </div>
  );
}