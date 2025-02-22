import React from 'react';

function Signup() {
  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
