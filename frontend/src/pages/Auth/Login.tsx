import styles from "./Auth.module.css";
import practiceimg from "../../assets/practice.png";
import { useAuth } from "react-oidc-context";

function Login() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }
  

  if (auth.isAuthenticated) {
    return (
      <div className={styles.loggedIn}>
        <h2>Welcome, {auth.user?.profile.email}</h2>
        <p>✅ You are signed in with Practice Solution</p>

        <pre>Email: {auth.user?.profile.email}</pre>


        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  // If not authenticated, show login options
  return (
    <div className={styles.authcontainer}>
      <div className={styles.form}>
        <h1>Login / Register</h1>
        <button onClick={() => auth.signinRedirect()}>Login</button>
      
      </div>

      <div className={styles.imgcontainer}>
        <img src={practiceimg} alt="Practice Solutions" />
      </div>
    </div>
  );
}

export default Login;
