import { useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";

export function Login() {
  const [username, setUsername] = useState("");  // State hook for username
  const [password, setPassword] = useState("");  // State hook for password

  const handleChange = (ev) => {  // Event handler for input changes
    const { id, value } = ev.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleEnter = (ev) => {  // Event handler for login button click
    const rootElement = document.getElementById("registerContainer");
    ReactDOM.createRoot(rootElement).render(
      <Header user={{ username: username, password: password }} />  // Renders the Header component with username and password
    );
  };


  return (
    <>
      <div className="registerContainer" id="registerContainer">
        <div className="row">
          <div className="card">
            <div className="card-header display-3 bg-info">Login</div>
            <div className="card-body">
              <form action="" method="post">
                <div className="row">
                  <div className="mb-3">
                    <label
                      htmlFor="username"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onInput={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onInput={handleChange}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row">
                  <button
                    type="button"
                    onClick={handleEnter}
                    className="btn btn-success"
                  >
                    Login
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
