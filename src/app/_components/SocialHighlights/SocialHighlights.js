import styles from "./SocialHighlights.module.css";

const highlights = [
  {
    name: "FishingBooker",
    handle: "Read charter reviews and booking details for Castaway STA",
    href: "https://fishingbooker.com/charters/view/39735",
    icon: "fb",
  },
  {
    name: "Facebook",
    handle: "Follow Castaway STA for fish photos, reports, and updates",
    href: "https://www.facebook.com/CASTAWAYSTA",
    icon: "f",
  },
  {
    name: "Call Captain Joe",
    handle: "Talk through availability, weather, and current fishing conditions",
    href: "/#contact-form",
    icon: "904",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Reviews and updates</p>
        <h2>Follow the bite before you choose a date.</h2>
        <p>
          Castaway STA keeps guests connected through Facebook and FishingBooker,
          with charter details, photos, and trip feedback available before you
          book.
        </p>
      </div>

      <div className={styles.linkGrid}>
        {highlights.map((link) => (
          <a
            className={styles.socialCard}
            href={link.href}
            key={link.name}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className={styles.icon} aria-hidden="true">
              {link.icon}
            </span>
            <span>
              <strong>{link.name}</strong>
              <small>{link.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
