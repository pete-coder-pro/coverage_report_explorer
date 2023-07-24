import React, { useEffect } from "react";
import { Amplify, API } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  useEffect(() => {
    const apiName = "apidc09751e";
    const path = "/items";
    const getObj = {
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {
        name: "Peter", // OPTIONAL
        age: 29, // OPTIONAL
      },
    };
    const postObj = {
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      body: {
        name: "Peter",
        age: 29,
      },
    };

    // Test GET method
    API.get(apiName, path + "/object", getObj)
      .then((response) => {
        console.log("GET response:", response);
      })
      .catch((error) => {
        console.log("GET error:", error);
      });

    // Test POST method
    API.post(apiName, path, postObj)
      .then((response) => {
        console.log("POST response:", response);
      })
      .catch((error) => {
        console.log("POST error:", error);
      });

    // // Test PUT method
    // API.put(apiName, path, myInit)
    //   .then((response) => {
    //     console.log("PUT response:", response);
    //   })
    //   .catch((error) => {
    //     console.log("PUT error:", error);
    //   });

    // // Test DELETE method
    // API.del(apiName, path, myInit)
    //   .then((response) => {
    //     console.log("DELETE response:", response);
    //   })
    //   .catch((error) => {
    //     console.log("DELETE error:", error);
    //   });
  }, []);

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

const withAuthenticatorOptions = {
  hideSignUp: true,
};

export default withAuthenticator(App, withAuthenticatorOptions);
