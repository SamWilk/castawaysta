import Link from "next/link";
import styles from "./AuditCta.module.css";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Book a trip</p>
        <h2>Ready to fish St. Augustine with Captain Joe?</h2>
        <p>
          Book through FishingBooker for the online reservation flow, or call
          Castaway STA with questions about weather, timing, and target species.
        </p>
      </div>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/#book">
          Book online
        </Link>
        <a
          className={styles.secondaryButton}
          href="tel:+19042379269"
        >
          Call Captain Joe
        </a>
        <a
          className={styles.secondaryButton}
          href="https://fishingbooker.com/charters/view/39735"
          target="_blank"
          rel="noopener noreferrer"
        >
          FishingBooker
        </a>
      </div>
    </section>
  );
}
