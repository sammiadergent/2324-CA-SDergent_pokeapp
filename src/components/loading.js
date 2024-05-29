import styles from '@/styles/Loading.module.css';
import Pickachu from '@/buttons/pickachu.svg';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div>
        <Pickachu className={styles.pika} />
        <div className={styles.tekst}>Loading</div>
      </div>
    </div>
  );
}
