import Image from "next/image";
import styles from "./page.module.css";
import ganesha from "../../../public/images/mainPage/ganesha.avif";
import pallakiAbbay from "../../../public/images/mainPage/pallaki_abbay-removebg-preview.avif";
import pallakiAmmayi from "../../../public/images/mainPage/Pallaki_Ammay_Fin-removebg-preview.avif";

const Invitation = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image src={pallakiAbbay} alt="image" width={133} height={83} />
          <Image src={pallakiAmmayi} alt="image" width={126} height={83} />
        </div>
        <div className={styles.ganeshaWrapper}>
          <Image src={ganesha} alt="image" width={65} height={65} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Wedding Invitation</div>
          <div className={styles.subTitle}>
            Join us to celebrate our wedding
          </div>
        </div>

        <div className={styles.groomDetailsWrapper}>
          <div className={styles.name}>Vinay Varma</div>
          <div className={styles.context}>S/o Vegesna Venkata Subba Raju</div>
          <div className={styles.context}>&</div>
          <div className={styles.context}>Smt Sitamani</div>
        </div>
        {/* <div className={styles.and}>&</div> */}
        <div className={styles.brideDetailsWrapper}>
          <div className={styles.name}>Tanvi </div>
          <div className={styles.context}>D/o Suresh</div>
          <div className={styles.context}>&</div>
          <div className={styles.context}>Smt Bhavani</div>
        </div>
        <div className={styles.sumuhurthamWrapper}>
          <div className={styles.name}>Sumuhurtham</div>
          <div className={styles.context}>On Sunday</div>
          <div className={styles.context}>16, Aug,2026</div>
          <div className={styles.context}>Night at 12.23 am</div>
          <div className={styles.context}>{`(Early hours of 17th aug)`}</div>
        </div>
        <div className={styles.venueWrapper}>
          <div className={styles.name}>Venue</div>
          <div className={styles.context}>Adabala Gardens</div>
          <div className={styles.context}>Palakollu, West Godavari</div>
          <div className={styles.context}>Andhra Pradesh</div>
        </div>
        <div className={styles.dinnerWrapper}>
          <div className={styles.name}>Dinner</div>
          <div className={styles.context}>On Sunday, 16 Aug, 2026</div>
          <div className={styles.context}>From 7:00 pm at venue</div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
