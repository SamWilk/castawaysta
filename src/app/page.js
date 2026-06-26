import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import ContactForm from "./_components/ContactForm/ContactForm";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import styles from "./page.module.css";

const serviceAreas = [
  "St. Augustine",
  "St. Johns County",
  "Up to 5 guests",
  "Licenses included",
];

const proofPoints = [
  {
    metric: "20+",
    label: "years experience",
    detail: "Captain Joe brings decades of local saltwater knowledge to every charter.",
  },
  {
    metric: "26'",
    label: "Mako center console",
    detail: "A roomy 2023 boat powered by a 300 horsepower Yamaha engine.",
  },
  {
    metric: "5",
    label: "passenger capacity",
    detail: "Comfortable fishing room from bow to stern for small groups.",
  },
];

const services = [
  {
    title: "Bottom Fishing",
    copy: "Target productive local water with the right gear, bait, and tackle for the day.",
    href: "#book",
  },
  {
    title: "Seasonal Trolling",
    copy: "When conditions line up, troll for the species moving through St. Augustine waters.",
    href: "#book",
  },
  {
    title: "Family Charters",
    copy: "Rods, reels, bait, tackle, licenses, and fish cleaning are handled for the group.",
    href: "#book",
  },
];

const checklist = [
  "Rods, reels, bait, and tackle",
  "Cooler with ice",
  "Party fishing licenses",
  "Legal catch cleaned and packed",
  "Weather updates before departure",
  "Bring water, sunglasses, and sunscreen",
];

const bookingSteps = [
  "Choose your date and trip details on FishingBooker.",
  "Review availability, charter information, and guest details.",
  "Confirm the trip through FishingBooker's booking flow.",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>St. Augustine charter fishing</p>
            <h1>Fish St. Augustine with Castaway STA.</h1>
            <p className={styles.heroText}>
              Spend the day with Captain Joe Driscoll chasing redfish, snapper,
              kingfish, cobia, grouper, flounder, and more aboard a fully
              equipped 2023 Mako center console.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#book">
                Book a trip
              </a>
              <Link className={styles.secondaryButton} href="#trips">
                View trips
              </Link>
            </div>
            <div className={styles.businessTypes} aria-label="Service areas">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className={styles.section} id="proof">
        <SectionIntro
          eyebrow="On the water"
          title="A local charter built around experienced guidance and a comfortable boat."
        />
        <div className={styles.winGrid}>
          {proofPoints.map((point) => (
            <article className={styles.winCard} key={point.label}>
              <strong>{point.metric}</strong>
              <h3>{point.label}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.splitSection} id="captain">
        <div>
          <p className={styles.eyebrow}>Meet the captain</p>
          <h2>Captain Joe Driscoll knows these waters from years of daily fishing.</h2>
          <p>
            Joe started fishing as a kid in Massachusetts, moved to Florida in
            2000, and traded freshwater shores for the rich saltwater fishery
            around St. Augustine.
          </p>
        </div>
        <div className={styles.checkPanel}>
          {checklist.map((item) => (
            <div className={styles.checkItem} key={item}>
              <span aria-hidden="true">+</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} id="trips">
        <SectionIntro
          eyebrow="Trip style"
          title="Bottom fishing, seasonal trolling, and a charter setup that handles the details."
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Book this trip</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.bookingSection} id="book">
        <div className={styles.bookingContent}>
          <p className={styles.eyebrow}>Online booking</p>
          <h2>Reserve your Castaway STA trip through FishingBooker.</h2>
          <p>
            FishingBooker handles the booking flow for Castaway STA, so guests
            can review the charter listing, trip details, and booking steps in
            one place.
          </p>
          <div className={styles.bookingActions}>
            <a
              className={styles.primaryButton}
              href="https://fishingbooker.com/charters/view/39735"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on FishingBooker
            </a>
            <a className={styles.secondaryDarkButton} href="tel:+19042379269">
              Call (904) 237-9269
            </a>
          </div>
        </div>

        <div className={styles.bookingPanel} aria-label="FishingBooker booking steps">
          <div className={styles.bookingBadge}>FishingBooker</div>
          {bookingSteps.map((step, index) => (
            <div className={styles.bookingStep} key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
