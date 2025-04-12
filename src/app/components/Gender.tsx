import CustomButton from "./CustomButton";
import styles from "../../styles/pages/home.module.scss";
import Grnderbanner from "../img/korean_art.jpg";
import Male from "../img/male.png";
import Female from "../img/female.png";

export default function Gender({ onNext }: { onNext: () => void }){

    return(
    <div className={styles.gender}>
        <div className={styles.gender_banner}>
            <img src={Grnderbanner.src} alt="Grnderbanner" />
            <div className={styles.gender_title}>
                <h3 className={styles.gender_title_1}>Choose Your K-Vibe!</h3>
                <h3 className={styles.gender_title_2}>Choose Your K-Vibe!</h3>
            </div>
        </div>
        <div className={styles.gender_section}>
            <div className={styles.gender_male}>
                <img src={Male.src} alt="Grnderbanner" />
            </div>
            <div className={styles.gender_female}>
                <img src={Female.src} alt="Grnderbanner" />
            </div>
        </div>

        <div className={styles.next_btn}>
            <CustomButton id="nextBtn" text="Next" onClick={onNext} />
        </div>
    </div>);
}