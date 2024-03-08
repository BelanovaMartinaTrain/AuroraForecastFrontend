import styles from "../_styles/styles.module.css";

export default function ProgressBar() {
    return (
        <div className={styles.demoContainer} aria-label="Loading">
            <div className={styles.progressBar}>
                <div className={styles.progressBarValue}></div>
            </div>
        </div>
    );
}
