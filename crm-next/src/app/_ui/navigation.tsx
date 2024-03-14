import NavLink from "./nav-link";
import SignInButton from "./signin-button";
export default function Navigation() {

  return (
    <>
      <header className="my-4">
        <nav>
          <ul className="list-none inline">
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

          <SignInButton></SignInButton>
        </nav>
      </header>
    </>
  );
}