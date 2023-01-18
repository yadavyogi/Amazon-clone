import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Name should not be empty");
      return;
    }
    if (email === "") {
      toast.error("Email should not be empty");
      return;
    }
    if (password === "") {
      toast.error("Password should not be empty");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`/register`, { name, email, password });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        toast.success("Registration Successful");
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration faild, Try again.");
      setLoading(false);
    }
  };

  const RefisterForm = () => {
    return (
      <>
        <div className="form-box">
          <h1 className="text-start mb-3">Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-3 text-start">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control mb-4 p-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              className="btn btn-warning"
              type="submit"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Signup"}
            </button>

            <hr />
            <span className="text-muted">Already have an account?</span>
            <Link to="/login" className="nav-link">
              <button className="btn btn-outline-warning my-1">Sign in</button>
            </Link>
          </form>
        </div>
      </>
    );
  };

  return <div>{RefisterForm()}</div>;
};

export default Register;
