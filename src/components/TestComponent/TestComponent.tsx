import { FC } from "react";
import styles from './style.module.scss'

const TestComponent: FC = () => {
    return (  
        <div>
            <div className={styles.test1}>test12</div>
        </div>
    );
}

export default TestComponent;