import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import styles from "./gallery.module.css";

export const metadata = {
  title: "Gallery | Castaway STA Charter Fishing",
  description:
    "View Castaway STA fishing charter photos from St. Augustine, Florida.",
};

const projectGroups = [
  {
    title: "St. Augustine charter days",
    description: "Recent photos from the Castaway STA gallery.",
    layout: "three",
    photos: [
      {
        src: "https://static.wixstatic.com/media/8bd968_d5a320352e9545de8e8b5d03fb0cc8cb~mv2.jpeg",
        alt: "Castaway STA fishing charter in St. Augustine",
        label: "Charter",
        caption: "Castaway STA charter photo",
      },
      {
        src: "https://static.wixstatic.com/media/8bd968_8228d83ea455433a962fe04eb09c5348~mv2.jpeg",
        alt: "Fish caught during a Castaway STA charter",
        label: "Catch",
        caption: "St. Augustine fishing photo",
      },
      {
        src: "https://static.wixstatic.com/media/8bd968_111a21e832e9477ba473ea0571172b08~mv2.jpeg",
        alt: "Castaway STA fishing photo",
        label: "Fishing",
        caption: "Castaway STA gallery photo",
      },
      {
        src: "https://static.wixstatic.com/media/8bd968_5d3176914eee4c399639f62159aec4f3~mv2.jpeg",
        alt: "Castaway STA charter fishing catch",
        label: "Catch",
        caption: "On the water with Captain Joe",
      },
      {
        src: "https://static.wixstatic.com/media/8bd968_084d7c2abc774b63971ed736c5404e47~mv2.jpeg",
        alt: "Castaway STA St. Augustine fishing trip",
        label: "Trip",
        caption: "St. Augustine charter fishing",
      },
      {
        src: "https://static.wixstatic.com/media/8bd968_81e2a91ade3146e5b076cb568ed664a7~mv2.jpeg",
        alt: "Castaway STA fishing gallery image",
        label: "Fish",
        caption: "Castaway STA fishing photo",
      },
    ],
  },
];

const additionalPhotos = [
  "https://static.wixstatic.com/media/8bd968_d60d452246224fc38ed64ad5a4809ca1~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_8649a2f12e794c88bf39ea225feed8bf~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_c06fb37f3f1044b3852f60b42165f97c~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_739ee347391d4512b73e2d249d13ddf0~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_6d1b993d12d049a39d3b57b21ae8edf8~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_aac41a89ce6341b2b936f7fce86f8069~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_575703f2ea944708a5a40acffdb15d15~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_d8d4290809014db9a020ea2e384bf9c6~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_17d5dc9855ae49e091b81653523ac864~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_ec30c050dbef40199c1c0d2effe814bb~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_fe1954f3dbe54b8abe80589a307c0fd7~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_7e83f8e8904a4c8cb04b708665d2f5a9~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_40a4a1d3a28645d382e32d21e14c6ced~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_116d351b5ee3483985b52072a46a6687~mv2.jpg",
  "https://static.wixstatic.com/media/8bd968_403505cc1f5d4dd08b3eb057f8754b88~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_659883873656421d86cc957bf326d799~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_9781ec6eb5f840f3bdd67d0bb6f3d7bc~mv2.jpeg",
  "https://static.wixstatic.com/media/8bd968_fd204eb16d194a0ab9cf8e4ed24caa04~mv2.jpeg",
];

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Castaway gallery</p>
          <h1>Photos from Castaway STA.</h1>
          <p>
            A look at charter fishing days with Captain Joe in St. Augustine.
          </p>
          <Link href="/#book">Book a trip</Link>
        </div>
      </section>

      <section className={styles.gallerySection} aria-label="Castaway STA fishing gallery">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Featured work</p>
          <h2>Fishing charter photos</h2>
        </div>

        <div className={styles.projectStack}>
          {projectGroups.map((project, projectIndex) => (
            <article className={styles.projectGroup} key={project.title}>
              <div className={styles.projectHeader}>
                <span>{String(projectIndex + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div
                className={`${styles.groupedPhotos} ${
                  project.layout === "pair" ? styles.photoPair : ""
                }`}
              >
                {project.photos.map((photo, photoIndex) => (
                  <figure className={styles.groupPhoto} key={photo.src}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={720}
                        height={560}
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        priority={projectIndex === 0 && photoIndex < 2}
                      />
                      <span>{photo.label}</span>
                    </div>
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>More photos</p>
          <h2>Additional trip moments</h2>
        </div>

        <div className={styles.galleryGrid}>
          {additionalPhotos.map((photo) => (
            <article className={styles.photoCard} key={photo}>
              <Image
                src={photo}
                alt=""
                width={720}
                height={560}
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
