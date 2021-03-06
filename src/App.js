import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; import './App.css';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

function App() {
  const auth = getAuth();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }

  const handleEmailChange = e =>{
    console.log(e.target.value);
  }

  const handlePasswordChange = e =>{
    console.log(e.target.value);
  }

  const handleRegistration = e => {
    console.log('registration is added');
    e.preventDefault();
  }
  return (
    <div className="mx-5 my-3">
    <form onSubmit={handleRegistration}>
      <h3 className="text-primary">Please Registration</h3>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input onBlur={handleEmailChange} type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" onBlur={handlePasswordChange} class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
      <br /><br /><br />
      <div>------------------------------------</div>
      <br /><br /><br />
      <button onClick={handleGoogleSignIn}>Google Sign In</button>

    </div>
  );
}

export default App;
