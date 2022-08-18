import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}){
    return (
        <div className="relative min-h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
}