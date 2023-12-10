import React from 'react';
import '../styles/home.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div class="jumbotron">
      <p class="title">Stay On Track, Anywhere, Anytime!</p>
      <p class="sub-title">Stay connected throughout the process for updates and assistance.</p>
      <p class="content">
        We understand the frustration and inconvenience that comes with unexpected vehicle breakdowns. That&#39;s why
        we&#39;ve crafted a comprehensive breakdown resolution system that&#39;s tailored to keep you on the move,
        regardless of where the road takes you.
      </p>
      
      <Button variant="primary" style={{top: "450px", position: "absolute", left: "121px"} }>
        Sign in
      </Button>
      <Button variant="primary" style={{top: "450px", position: "absolute", left: "220px"} }>
        Create an account
      </Button>
      
    </div>

  );
}

export default Home;
