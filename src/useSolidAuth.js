import { useState, useEffect } from "react";
import auth from "solid-auth-client";

const useSolidAuth = (popupUri = "popup.html") => {
  const [webId, setWebId] = useState();
  useEffect(
    () => auth.trackSession(session => setWebId(session && session.webId)),
    ["neverChanges"]
  );

  const login = () => auth.popupLogin({ popupUri });
  const logout = () => auth.logout();

  return [webId, { login, logout }];
};

export default useSolidAuth;
