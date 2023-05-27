import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const each = links.map((item,index)=>{
return <a key = {index} href={`#${item}`}>{item} </a>
    console.log(item)
  })

  return <nav>{each}</nav>;
}

export default NavBar;
