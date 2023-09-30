import React, { Fragment, useContext } from "react";
import Create from "../components/Create/Create";
import { AuthContextStore } from "../context/AuthContextStore";
import {Login} from "./Login";

const CreatePage = () => {
  const { user } = useContext(AuthContextStore);

  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreatePage;
