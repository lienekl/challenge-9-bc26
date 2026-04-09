import React from 'react';
import Footer from './Footer';
import Header from './Header';


const pages = [
    { name: 'Home', key: 'home' },
    { name: 'Portfolio', key: 'portfolio' },
    { name: 'Contact', key: 'contact' },
]

const Layout = ({ children, selectedPage, onSetPage }) => {



    const renderPageLinks = () => {

        return pages.map(page => (
            <li
                key={page.key}
                className={`sidebar-link ${page.key === selectedPage ? 'selected' : ''}`}
                onClick={() => onSetPage(page.key)}
            >
                {page.name}
            </li>
        ));
    }


    return (
        <div>
            <Header />

            <div className="layout-container">


                <div className="main-layout">

                    <aside className="sidebar">
                        <ul>
                            {renderPageLinks()}
                        </ul>
                    </aside>


                    <section className="content-area">
                        {children}
                    </section>
                </div>


                <Footer />

            </div>
        </div>
    );
};


export default Layout;
