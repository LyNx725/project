
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <div style={{display:'flex',color:'gray',border:'1px solid ',justifyContent:'space-evenly',padding:'5px',alignItems:'centre',height:'50',borderRadius:'10px',backgroundImage:'url(https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg)'}}>
     <div style={{marginTop:'10px',borderRadius:'30px'}}>
   
      </div>
     <h3>
        HOME
      </h3>
    
      <h3>
        ADD PRODUCT
      </h3>
      <div style={{marginTop:'10px'}}>
      <button style={{backgroundColor:'pale',borderRadius:'10px',width:'60px',height:'5ch',borderColor:'whitesmoke',color:'black'}}>
        Login
      </button>
      </div>
    </div>
  )
}
export default NavBar;