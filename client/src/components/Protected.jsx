import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("com.cblpu.app.login");

    if (!login) {
      navigate("/");
    }
  }, [navigate]);

  return component;
};

export default Protected;
