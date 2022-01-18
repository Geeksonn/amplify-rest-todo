import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";

import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";
import Banner from "../components/banner";

Amplify.configure(awsconfig);

function MyApp({ Component, signOut, user, pageProps }) {
  //return <Component {...pageProps} />
  return (
    <div>
      <Banner user={user} signOut={signOut} />
      <Component user={user} {...pageProps} />
    </div>
  );
}

export default withAuthenticator(MyApp);
