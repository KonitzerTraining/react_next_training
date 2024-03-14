'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';

export default function NavLink({href, children}: any) {

    const path = usePathname();
    return (
        <li className={`inline p-2 rounded ml-3 ${(path.startsWith(href)) ? classes.active : undefined}`}>
            <Link href={href}>{ children }</Link>
        </li>
    );
}