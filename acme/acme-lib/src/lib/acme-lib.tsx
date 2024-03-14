import styles from './acme-lib.module.scss';

/* eslint-disable-next-line */
export interface AcmeLibProps {}

export function AcmeLib(props: AcmeLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AcmeLib!</h1>
    </div>
  );
}

export default AcmeLib;
