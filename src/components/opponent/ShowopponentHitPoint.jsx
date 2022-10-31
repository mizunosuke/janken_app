import styles from "../../css/ShowOpponent.module.css";
import hitpointImage from "../../images/hitpoint.png";

export const ShowOpponentHitPoint = ({opponentHitPoint}) => {
    return (
        <div className={styles.container}>
            <div className={styles.hitpoint_image}>
                <img src={hitpointImage} alt="" />
                <p>残りHP</p>
            </div>
            <div className={styles.showMyHitpoint}>
                {opponentHitPoint}
            </div>
        </div>
    )
}