import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface RegisterProps {}

export default function Register(props: RegisterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Register!</h1>
    </div>
  );
}
