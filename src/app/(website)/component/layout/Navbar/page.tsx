// File: Navbar/page.tsx located in app-name/src/app/(website)/componenet/Navbar/

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{display: "flex", gap: "50px"}}>
      <Link href="/">Home</Link>
      <a href="/about">About</a>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  )
};
