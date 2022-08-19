import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="bg-primary overflow-hidden">
            <Header />
                <div>{children}</div>
            <Footer />
        </div>
    )
};

export default Layout;

// export default function Layout({ children }) {
//     return (
//         <div className="bg-primary overflow-hidden">
//             <Header />
//             <div>{children}</div>
//             <Footer />
//         </div>
//     );
// }
