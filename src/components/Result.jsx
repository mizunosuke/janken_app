import styles from "../css/ShowResult.module.css";

export const Result = ({result, text, victory, lose}) => {

    return (
        <div className={styles.container}>
            <div className={styles.result}>
                {result}
            </div>
            <div className={styles.showDamage}>
                { text ? victory : lose }
            </div>
        </div>
    )
}