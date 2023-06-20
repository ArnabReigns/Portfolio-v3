import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="content">
        <h3>What's Next?</h3>
        <h2>GET IN TOUCH</h2>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <button onClick={()=>window.open('mailto:arnabchatterjee912@gmail.com')}>Say Hello</button>
      </div>
      <div className="sub">

      <p>Designed and Built by Arnab Chatterjee</p>
      <p>2023</p>
      </div>
    </div>
  );
};

export default Footer;
