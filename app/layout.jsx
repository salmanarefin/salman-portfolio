import './globals.css';

export const metadata = {
  title: 'Salman Arefin | Software Developer Portfolio',
  description:
    'Portfolio of Salman Arefin, CSE graduate and software developer skilled in full-stack web development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
