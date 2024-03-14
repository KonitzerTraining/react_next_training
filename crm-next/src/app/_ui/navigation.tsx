import Link from "next/link";
import classes from './navigation.module.css'
import NavLink from "./nav-link";

export default function Navigation() {

  return (
    <>
      <header className="my-4">
        <nav>
          <ul className="list-none">
            <NavLink href="/start">
              Start
            </NavLink>
            <NavLink href="/dashboard">
              Dashboard
            </NavLink>
            <NavLink href="/about">
              About
            </NavLink>
            <NavLink href="/help">
              Help
            </NavLink>
            <NavLink href="/register">
              Register
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}