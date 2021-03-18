import Nav from "./nav";
import Input from "./inputs";
import Textarea from "./textarea";
import Select from "./select";
import Checkbox from "./checkbox";
import Button from "./button";

import './home.css';

function Home() {
   return (
      <div className="home">

         <div className="subhome">

            <Nav className="nav"
               text="PRE-MEST ASSESSMENT"
               justify="center"
               align="center"
               color=""
               top="5px"
            />

            <Input
               margin="20px 20px"
               width="400px"
               height="30px"
               border="5px"
               padding="10px "
               color="#d7d7d7"
            />

            <Textarea
               margin="20px 20px"
               width="385px"
               border="5px"
               color="#d7d7d7"
               height="100px"
               padding="10px "
            />

            <Select margin="40px 40px" />

            <Checkbox
            
               // className="check"
               text="Male"
               textcolor="white"
               width="300px"
               height="30px"
               // margin="5px 5px"
               // border="5px"
            />

            <Checkbox
               // className="check"
               text="Female"
               textcolor="white"
               width="300px"
               height="30px"
               // margin="5px 5px"
               // border="5px"
            />

            <Button 
               color= "#d7d7d7"
               width= "100px"
               height= "40px"
               margin="20px 20px"
               padding= "5px"
               border= "5px"
               margintop= ""
            />

         </div>
         
      </div>
   );
}
export default Home;
