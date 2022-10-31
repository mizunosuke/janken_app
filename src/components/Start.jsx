import styles from "../css/Start.module.css";
import kaiju from "../images/kaiju.png";
import kaijuman from "../images/gao_pose_man.png";
import { Btn } from "./button/Btn";


export const Start = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_image}>
                    <img src={kaiju} alt="" />
                </div>

                <div className={styles.title}>
                    <h1>運だけで敵を倒せ！運ゲー大戦争！</h1>
                </div>

                <div className={styles.header_image}>
                    <img src={kaijuman} alt="" />
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.main_title}>
                    <h2>この世は運ゲー！！</h2>
                    <h2>君も運だけで勝ち抜いて見て！</h2>
                </div>
            </div>
            <div className={styles.btn}>
                <Btn/>
            </div>
        </div>
    )
}