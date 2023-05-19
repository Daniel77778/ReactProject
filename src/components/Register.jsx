//import the things we need
import { useEffect, useState } from "react";
import axios from "axios";

//Definimos y exportamos la funcion register 
export function Register(props) {
//Declare a state variable named username and its update function setUsername
  const [username, setUsername] = useState("");
//Declare a state variable named password and its update function setPassword
  const [password, setPassword] = useState("");

// Now we use the useffect for when the component is mounted and when it is unmounted
  useEffect(() => {
    console.log("Register montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  //Declare a function called handleForm that is executed when the form is submitted. It takes the event ev as an argument. Stop the form's default action with ev.preventDefault(). Then it displays an alert with the username and password values. It then makes an HTTP POST request using Axios to a specific URL on the endpoint, sending the username and password in the request body. If the request is successful, it displays the response obtained in the console. If there is an error, it displays the error on the console.
  function handleForm(ev) {
    ev.preventDefault();
    alert(`Username: ${username} || Password: ${password}`);

    
// Make the HTTP request with Axios
    axios.post("URL_DEL_ENDPOINT", { username, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  //Declare a function called handleInput that is executed when an input event occurs in the text fields. It takes the event ev as an argument. Depending on the id of the input field, update the corresponding state (username or password) using the setUsername or setPassword state update functions
  function handleInput(ev) {
    switch (ev.target.id) {
      case "username":
        setUsername(ev.target.value);
        break;

      case "password":
        setPassword(ev.target.value);
        break;

      default:
        break;
    }
  }

//Returns the JSX structure that will be rendered. This structure represents the registration form with the "Username" and "Password" fields. When the form is submitted, the handleForm function is called
  return (
    <>
      <div className="registerContainer">
        <div className="row">
          <div className="card">
            <div className="card-header display-3 bg-warning">Register</div>
            <div className="card-body">
              <form onSubmit={handleForm} method="post">
                <div className="row">
                  {" "}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1" 
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      onInput={handleInput}
                      className="form-control"
                      id="username"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onInput={handleInput}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
