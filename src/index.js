import React from 'react';
import { render } from 'react-dom';
import {
  LoggedOut,
  LoggedIn,
  AuthButton,
  Value,
  Image,
  Link,
  Name,
  List
} from '@solid/react';

const App = () => (
  <div>
    <h1>Solid words</h1>

    <p>
      <LoggedIn>Yeah!</LoggedIn>
      <LoggedOut>Please log in</LoggedOut>
    </p>

    <AuthButton />

    <LoggedIn>
      <p>
        Welcome back, <Value src="user.firstName" />
      </p>
      <Image src="user.image" defaultSrc="profile.svg" className="pic" />
      <ul>
        <li>
          <Link href="user.inbox">Your inbox</Link>
        </li>
        <li>
          <Link href="user.homepage">Your homepage</Link>
        </li>
      </ul>

      <h2>
        Random friend of <Name src="user" />
      </h2>
      <Value src="user.friends.firstName" />
    </LoggedIn>

    <h2>
      Random friend of <Name src="[https://ruben.verborgh.org/profile/#me]" />
    </h2>
    <Value src="[https://ruben.verborgh.org/profile/#me].friends.firstName" />

    <h2>All friends</h2>
    <List src="[https://ruben.verborgh.org/profile/#me].friends.firstName" />

    <h2>Random blog post</h2>
    <Link href="[https://ruben.verborgh.org/profile/#me].blog[schema:blogPost]" />

    <h2>All blog posts</h2>
    <List src="[https://ruben.verborgh.org/profile/#me].blog[schema:blogPost].label" />
  </div>
);

render(<App />, document.getElementById('app'));
