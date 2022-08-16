import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <div className="bg-primary overflow-hidden">
            <Header/>
                <div>{children}</div>
            <Footer/>
        </div>
    );
}
