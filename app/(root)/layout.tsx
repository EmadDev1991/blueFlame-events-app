import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
    return(
        <div className="h-screen flex flex-col">
            <Header/>
            <main className="flex-1">
                {children}
            </main>
            <Footer/>
        </div>
    )
}


export default Layout;