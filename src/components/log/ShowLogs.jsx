import styles from "../../css/ShowLog.module.css";

export const ShowLogs = ({logs}) => {

    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {logs.map((log)=> (
                    <li>{log}</li>
                ))}
            </ul>
        </div>
    )
}