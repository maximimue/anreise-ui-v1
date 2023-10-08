import React from "react"
import Link from 'next/link'
import Image from "next/image"
import Logo from "./logo.png"

export default function NavBar() {
    return (
        <nav>
            <Image 
            src={Logo}
            alt="Strand Logo"
            width={70}
            placeholder="blur"/>
            <h1>STRAND</h1>
            <Link href="/">Home</Link>
        </nav>
    );
}
