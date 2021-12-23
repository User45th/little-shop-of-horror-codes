
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";
import { useHistory } from "react-router-dom";
import { removeCart } from "../redux/cartRedux";

const Logout = () =>{
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = ()=>{
        dispatch(logOut())
        dispatch(removeCart())
        history.push("/")
    }

    return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={handleClick} style={{ padding: 10, width:100 }}>
            Logout
          </button>
        </div>
      );
}

export default Logout;