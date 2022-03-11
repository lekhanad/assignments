import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Protected() {
  const auth = useAuth();
  const navigate = useNavigate()
  const handleLogout = () =>{
    auth.logout()
    navigate("/")
  }
  return (
    <>
      <div>Wellcome {auth.user} this is a Protected components</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
