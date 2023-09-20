import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
