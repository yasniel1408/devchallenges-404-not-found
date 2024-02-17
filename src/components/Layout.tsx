import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Header/>
        <main className="main-container">
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout
