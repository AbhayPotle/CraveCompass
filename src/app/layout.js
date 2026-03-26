import './globals.css';

export const metadata = {
  title: 'CraveCompass - Intelligent Food Discovery',
  description: 'Discover the best food items with sensory-rich recommendations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
