import '../styles/globals.scss';
import '/styles/monokai-sublime.css';
import { Source_Serif_4 } from 'next/font/google';

export const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default function App({ Component, pageProps }) {
  return (
    <div className={sourceSerif.className}>
      <Component {...pageProps} />
    </div>
  );
}
