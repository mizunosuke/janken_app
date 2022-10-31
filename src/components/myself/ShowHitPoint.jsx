import hitpointImage from "../../images/hitpoint.png";
import styles from "../../css/Showhitpoint.module.css";

export const ShowHitPoint = ({myHitPoint}) => {
    return (
        <div className={styles.container}> 
            <div className={styles.hitpoint_image}>
                <img src={hitpointImage} alt="" />
                <p>残りHP</p>
            </div>
            <div className={styles.showMyHitpoint}>
                {myHitPoint}
            </div>
        </div>
    )
}