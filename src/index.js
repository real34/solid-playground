import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import useSolidAuth from "./useSolidAuth";
import Login from "./Login";
import Logout from "./Logout";
import FoafProfile from "./FoafProfile";

const TestApp = () => {
  const [webId, { login, logout }] = useSolidAuth();

  const [profileOpened, setProfileOpened] = useState(false);
  const handleRefresh = () => setProfileOpened(true);

  const [person, setPerson] = useState(
    "https://ruben.verborgh.org/profile/#me"
  );
  const handleChange = e => setPerson(e.target.value.trim());
  useEffect(() => setPerson(webId), [webId]);

  console.log({ person });
  return (
    <div>
      <h1>Welcome on the Solid playground</h1>

      {webId ? (
        <Logout onClick={logout}>{webId}</Logout>
      ) : (
        <Login onClick={login} />
      )}

      <div>
        <h2>Profile viewer</h2>
        <p>
          <label htmlFor="profile">Profile: </label>
          <input
            placeholder="https://me.com/profile/card#me"
            value={person || ""}
            onChange={handleChange}
          />
          <button onClick={handleRefresh}>Refresh</button>
        </p>

        {profileOpened && <FoafProfile person={person} />}
      </div>
    </div>
  );
};

render(<TestApp />, document.querySelector("#app"));
