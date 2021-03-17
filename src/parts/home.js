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
         <Nav
            text="PRE-MEST ASSESSMENT"
            justify="center"
            align="center"
            color=""
            top="10px"
         />

         <Input
            margin="20px 20px"
            width="300px"
            height="30px"
            border="12px"
            padding="10px "
            color="#be95ff"
         />

         <Textarea
            margin="20px 20px"
            width="300px"
            border="5px"
            color="#be95ff"
            height="50px"
            padding="10px "
         />

         <Select margin="20px 20px" />

         <Checkbox
         
            // className="check"
            text="Male"
            textcolor="white"
            width="300px"
            height="30px"
            margin="20px 20px"
            border="12px"
         />

<Checkbox
            // className="check"
            text="Female"
            textcolor="white"
            width="300px"
            height="30px"
            margin="20px 20px"
            border="12px"
         />

         <Button />
      </div>
   );
}
export default Home;
