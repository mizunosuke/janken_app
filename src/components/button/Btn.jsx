import { Link } from "react-router-dom";
import styles from "../../css/Button.module.css";
import useSound from "use-sound";
import bgm from "../../sounds/8-bit_Aggressive1.mp3";
import btneffect from "../../sounds/ジャンッ.mp3";


export const Btn = () => {

  const [ play ] = useSound(bgm, { volume: 0.7 });
  const [ effect ] = useSound(btneffect);

  return (
    <div>
      <Link to="/contents">
        <a className={styles.btn_emergency_real} onClick={()=>{
          play();
          effect();
          }}>
          <span className={styles.btn_emergency_real_bottom}></span>
          <span className={styles.btn_emergency_real_top}><span>GO!!!</span></span>
        </a>
      </Link>
    </div>
  )
}
