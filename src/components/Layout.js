import { Link } from "gatsby";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <main>
        <div style={{ display: "flex", gap: 10}}>
          <Link to="/">홈</Link>
          <Link to="/about">어바웃</Link>
        </div>

        {children}

        <div>ⓒ EunJung</div>
      </main>
    </>
  );
}

export default Layout;