import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar(){
  const router = useRouter();
  return(
    <nav>
      <Link href="/" style={{color: router.pathname === "/" ? "red" : "blue"}}>
          Home
      </Link>
      <Link href="/about" style={{color: router.pathname === "/about" ? "red" : "blue"}}>
          About
      </Link>

    </nav>
  )
}