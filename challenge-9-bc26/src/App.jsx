// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/Homepage';
import PortfolioPage from './pages/Portfoliopage';
import ContactPage from './pages/Contactpage';

function App() {

  const [page, setPage] = useState('home');

  // TODO: How doe sthe Layout component know which page to render?

  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'portfolio' && <PortfolioPage />}
      {page === 'contact' && <ContactPage />}

    </Layout>
  );
}

export default App;
