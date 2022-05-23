import Image from "next/image";

import styles from "./Sponsors.module.css";

export default function Sponsors() {
  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.sponsorsContainer}>
        <h2>Sponsored By:</h2>
        <div>
          <span>
            <Image 
              src="/images/lbs logo-black.png"
              alt="LBS logo"
              width={271}
              height={84}
            />
          </span>
          <span>
            <Image
              src="/images/boi logo-lg.png"
              alt="BOI logo"
              width={321}
              height={100}
            />
          </span>
        </div>
      </div>
    </section>
  )
}