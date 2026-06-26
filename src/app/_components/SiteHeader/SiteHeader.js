import Link from "next/link";
import Image from "next/image";
import styles from "./SiteHeader.module.css";

export default function SiteHeader({ variant = "light" }) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link className={styles.brand} href="/" aria-label="Castaway STA home">
        <Image
          src="/castaway-logo.png"
          alt="Castaway STA"
          width={208}
          height={81}
          priority
        />
      </Link>
      <nav className={styles.navLinks} aria-label="Main navigation">
        <Link href="/#captain">Captain</Link>
        <Link href="/#trips">Trips</Link>
        <Link href="/#book">Book</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/#contact-form">Contact</Link>
      </nav>
    </header>
  );
}
