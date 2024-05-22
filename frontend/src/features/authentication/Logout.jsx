import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const { dispatch, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    dispatch({ type: "logout" });
  }
  useEffect(
    // If authenticated, then redirect to home page
    function () {
      if (!isAuthenticated) navigate("/login", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <ButtonIcon onClick={handleClick}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
