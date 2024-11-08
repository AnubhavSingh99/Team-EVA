import { Nav } from "../HomeComponents/Navbar"
import { Footer } from "../HomeComponents/footer"
import { SignUpOne } from "../SignUpComponents/Signform"
import { LogInOne } from "../SignUpComponents/Loginform"


const Sign = () => {
  return (
    <div>
      <Nav/>
      <SignUpOne/>
      <LogInOne/>
      <Footer/>
      
    </div>
  )
}

export default Sign