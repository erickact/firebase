import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/config";

const useAuthentication = () => {
  const { setUser } = useContext(UserContext);

  const loginSocial = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return { loginSocial };
};

export default useAuthentication;
