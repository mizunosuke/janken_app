import styles from "../css/Content.module.css";
import { useState } from "react";
import { ChooseHand } from "./myself/ChooseHand";
import yarukiman from "../images/yaruki_moeru_man.png";
import bear from "../images/attack_bear.png";
import { ShowHitPoint } from "./myself/ShowHitPoint";
import { Result } from "./Result";
import { ShowOpponentHitPoint } from "./opponent/ShowopponentHitPoint";
import { OpponentHands } from "./opponent/OpponentHands";
import { ShowLogs } from "./log/ShowLogs";
import nowin from "../images/lose_image.jpeg";
import { FadeInContents } from "./FadeInContents";
import useSound from "use-sound";
import bgm from "../sounds/8-bit_Aggressive1.mp3";

export const Contents = () => {

    const [play, {stop}] = useSound(bgm);
    const [ playerHand, setPlayerHand ] = useState();
    const [ opponentHand, setOpponentHand ] = useState();
    //ダメージを管理
    const [ damage, setDamage ] = useState(0);
    //自分の体力を管理
    const [ myHitPoint, setMyHitPoint ] = useState(100);
    //敵の体力を管理
    const [ opponentHitPoint, setOpponentHitPoint ] = useState(100);

    //勝敗を管理
    const [ result, setResult ] = useState("戦闘開始！");
    //boolean型で勝敗に応じて表示する内容を変更するための状態管理
    const [ text, setText ] = useState(false);

    const victory = `相手に${damage}ダメージを与えた！！`;
    const lose = `自分に${damage}ダメージを食らった！！`;
    //ログ表示の状態を管理
    const [ logs, setLogs ] = useState(["ここに戦闘ログが表示されるよ😻"]);

    //選択時に勝敗を決定・ダメージの計算
    const handleClick = () => {

        const playerNumber = Math.floor(Math.random() * 3 + 1);
        const opponentNumber = Math.floor(Math.random() * 3 + 4);
        const vsNumber = opponentNumber - playerNumber;

        setPlayerHand(playerNumber);
        setOpponentHand(opponentNumber);
        const newDamage = Math.floor(Math.random() * 20 + 1);
        const equal = 0;
        

        // console.log(playerNumber);
        // console.log(opponentNumber);
        
        if(vsNumber===4 || vsNumber===1){
            //相手の体力を減らす処理
            setDamage(newDamage);
            setText(true);
            setOpponentHitPoint(opponentHitPoint-newDamage);
            addLog();
            // console.log(damage);
            // console.log(myHitPoint);
            // console.log(opponentHitPoint-damage);
            setResult("勝ち！");
        } else if(vsNumber===5 || vsNumber===2) {
            //自分の体力を減らす処理
            setDamage(newDamage);
            setText(false);
            setMyHitPoint(myHitPoint-newDamage);
            addLog();
            // console.log(damage);
            // console.log(myHitPoint-damage);
            // console.log(opponentHitPoint);
            setResult("負け・・・");
        } else if(vsNumber===3) {
            //あいこの処理
            //console.log("あいこです！")
            addLog();
            setDamage(equal);
            setResult("互角だった！！");
        } else {
            //エラー（それ以外）
            alert("エラーが発生しました!");
        }
    }

    //logs配列にログを追加
    const addLog = () => {
        if(text === true) {
            const newLogs = [victory,...logs];
            setLogs(newLogs);
            console.log(newLogs);
        } else if(text === false) {
            const newLogs = [lose,...logs];
            setLogs(newLogs);
            console.log(newLogs);
        } else {
            setLogs([...logs]);
        }
    }

    const stopSound = () => {
        stop();
    }

    if(myHitPoint>0 && opponentHitPoint>0) {
        return (
            <div className={styles.container}>
                <div className={styles.battle}>
                    <div className={styles.myself}>
                    <ShowHitPoint
                    myHitPoint={myHitPoint}
                    />
                    <img  className={styles.yaruki} src={yarukiman} alt="" />
                    <ChooseHand
                    handleClick={handleClick}
                    />
                    </div>
                    <div className={styles.result}>
                        <Result
                        result={result}
                        damage={damage}
                        text={text}
                        victory={victory}
                        lose={lose}
                        />
                    </div>
                    <div className={styles.opponent}>
                        <ShowOpponentHitPoint
                        opponentHitPoint={opponentHitPoint}
                        />
                        <img  className={styles.yaruki} src={bear} alt="" />
                        <OpponentHands/>
                    </div>
                </div>
                <div className={styles.log}>
                    <ShowLogs
                    logs={logs}
                    />
                </div>
            </div>
        );
    } else if(myHitPoint<=0 && opponentHitPoint>0) {
        return(
            //敵が勝った時のアニメーション
            <FadeInContents animation="fadeIn" rootMargin="100px" triggerOnce>
                {()=>{stopSound()}}
                <div className={styles.loseimage}>
                    <h1>YOU LOSE・・・</h1>
                    <p>運も持ってないなんて君にはガッガリさ・・・</p>
                    <img src={nowin} alt="" />
                    <div className={styles.retry}>
                        <a href="/" className={`${styles.btn} ${styles.btn_border}`}>再戦する</a>
                    </div>
                </div>
            </FadeInContents>
        ) ;       
    } else if(myHitPoint>0 && opponentHitPoint<=0) {
        return (
            //自分が勝った時のアニメーション
            <FadeInContents animation="fadeIn" rootMargin="100px" triggerOnce>
                {()=>{stopSound()}}
                <div className={styles.winimage}>
                        <h1>YOU WIN!!!!</h1>
                        <p>今日はついてるね！！運も味方につけないとね！！</p>
                        <div className={styles.retry}>
                            <a href="/" className={`${styles.btn} ${styles.btn_border}`}>再戦する</a>
                        </div>
                </div>
            </FadeInContents>
        );
    }
}


