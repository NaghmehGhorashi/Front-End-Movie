import Navbar from "../Navbar/Navbar"
import PageFooter from "../footer/PageFooter"

function Layout({children}) {
  return (
    <div>
        <Navbar />
      {children}
      <PageFooter/>
    </div>
  )
}

export default Layout
