import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainSide from '../MainSdie/MainSdie';
interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-primary overflow-hidden">
            <Header />
            <div>{children}</div>
            <MainSide />
            <Footer />
        </div>
    )
};

export default Layout;