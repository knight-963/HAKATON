import Link from "next/link";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
      <div className="flex justify-center">

        <div className={styles.nvn}>
        <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/"><img src="logo.png" className="h-[60px]" alt="" /></Link>
        </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Bosh Sahifa</Link></li>
        <li><Link href="/Yechimlar">Yechimlar</Link></li>
        <li><Link href="/About">Registratsiya</Link></li>
      </ul>
    </nav>  
        </div>
      </div>
    );
  }
  