import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Logo from "../../../images/logo.jpg";
import "./auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // custom hook
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const { data } = await axios.post(`/login`, { email, password });
      if (data?.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, user: data.user });
        toast.success("Login Successful");
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login faild, Try again.");
      setLoading(false);
    }
  };

  const LoginForm = () => {
    return (
      <>
        <div className="form-box">
          <h1 className="text-start mb-3">Sign in</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mb-3 text-start">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control p-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 text-start">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control p-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              className="btn btn-warning mt-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Sign in"}
            </button>

            <div className="my-3">
              <p>
                By continuing, you agree to Amazon's{" "}
                <span className="text-primary">Conditions of Use</span> and{" "}
                <span className="text-primary">Privacy Notice</span>.
              </p>
            </div>
            <hr />
            <span className="text-muted">New to Amazon</span>
            <Link to="/register" className="nav-link">
              <button className="btn btn-outline-warning my-1">
                Create your Amazon account
              </button>
            </Link>
          </form>
        </div>
      </>
    );
  };

  return <div className="text-center">{LoginForm()}</div>;
};

export default Login;
