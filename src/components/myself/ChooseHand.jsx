import useSound from "use-sound";
import effect from "../../sounds/キック（強烈な打撃や衝撃）.mp3";
import styles from "../../css/Choose.module.css";

export const ChooseHand = ({handleClick}) => {

    const [play] = useSound(effect);

    return (
        <div className={styles.container}>
            <ul>
                <li onClick={()=>{
                    handleClick();
                    play();
                }} >しばく</li>

                <li onClick={()=>{
                    handleClick();
                    play();
                }} >どつく</li>

                <li onClick={()=>{
                    handleClick();
                    play();
                }} >はりたおす</li>
            </ul>
        </div>
    )
}