import styles from './Hero.module.scss';

function formatDateAsString(dateObject) {
  // https://www.freecodecamp.org/news/format-dates-with-ordinal-number-suffixes-javascript/
  const nthNumber = (number) => {
    if (number > 3 && number < 21) return 'th';
    switch (number % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const day = dateObject.getDate();
  const suffix = nthNumber(day);
  const month = dateObject.toLocaleString('default', { month: 'long' });
  const year = dateObject.getFullYear();

  const date = `${day}${suffix} ${month}, ${year}`;
  return date;
}

export default function Hero({ title, description, published, children }) {
  const datePublished = new Date(published);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title || 'Untitled'}</h1>
      {description && <p className={styles.description}>{description}</p>}
      {published && (
        <p className={styles.published}>
          Published {formatDateAsString(datePublished)}
        </p>
      )}
      <div className={styles.children}>{children}</div>
    </div>
  );
}
