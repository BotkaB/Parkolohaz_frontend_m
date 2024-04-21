import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import useAuthContext from "../contexts/AuthContext";
import "../css/bejelentkezes.css"

export default function Bejelentkezes() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginReg, errors, hibaNullaz } = useAuthContext();

    useEffect(()=>{hibaNullaz();},[])

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        const adat = {
          email: email,
          password: password,
          _token: token,
      };
        console.log(adat);
        loginReg(adat, "/login");
    };
  
  let token = "";
  const csrf = () =>
    axios.get("/token").then((response) => {
      //console.log(response);
      token = response.data;
    });

    

  return (
    <div className="m-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Bejelentkezés</h1>
      <form className="bejelentkezesForm" onSubmit={handleSubmit}>
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

        <div className=" text-center">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p>
            Még nincs felhaszálóneve?
            <Link className="nav-link text-info" to="/regisztracio">
              Regisztráció
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}