import '../styles/globals.scss';
import { Rubik } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default function App({ Component, pageProps }) {
  return (
    <div className={rubik.className}>
      <Component {...pageProps} />
    </div>
  );
}
