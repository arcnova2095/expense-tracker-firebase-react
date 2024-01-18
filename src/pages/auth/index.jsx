import {auth, provider} from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
import {useNavigate, Navigate} from "react-router-dom"
import "./styles.css"
import { useGetUserInfo } from "../../hooks/useGetUserInfo"
const Auth = () => {
    const{isAuth}= useGetUserInfo()
    const navigate= useNavigate()
    const signInWithGoogle = async () => {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.photoURL,
        isAuth: true,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));
      navigate("/expense-tracker");
    };

    if(isAuth){
      return<Navigate to="/expense-tracker"/>
    }
  return (
    <div className="login-page">
      <p>Sign in with Google to continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        {" "}
        Sign In With Google
      </button>

    </div>
  )
}

export default Auth