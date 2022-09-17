//https://react-icons.github.io/react-icons/
import React from "react";
import { GoSignOut } from "react-icons/go";
import { SiGooglesheets, SiGooglechat, SiReadthedocs } from "react-icons/si";
import SideBarIcon from "./SideBarIcon";
import { auth } from '../../firebase'
import { Link } from "react-router-dom";



function Sidebar(props) {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0 flex flex-col bg-white text-primary shadow-lg z-20">
  
      <Link to="/">
          <img src="logo-cropped.jpg" alt='logo' class='my-5 mx-auto w-1/2 hover:animate-bounce cursor-pointer' /> 
      </Link>
      
     
      <Link to="/chat">
       <SideBarIcon
        icon={<SiGooglechat size={28} />}
        text={"Chat"}>
      </SideBarIcon>
       </Link>

      
            <Link to="/sheets">
      <SideBarIcon 
      icon={<SiGooglesheets size={28}/>} 
      text={"Google Sheets"}
      >
      </SideBarIcon>
</Link>

      <Link to="/docs">
        
      <SideBarIcon 
      icon={<SiReadthedocs size={28}/>}
      text={"Google Docs"}
      >
      </SideBarIcon>
</Link>
 
      <div className="mt-auto mb-5">
      <SideBarIcon
        icon={<GoSignOut size={28} />}
        text={"Sign Out"}
        handleClick={() => auth.signOut()}
        >
      </SideBarIcon>
      </div>
    </div>
  );
}

export default Sidebar