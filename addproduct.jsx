import { useState } from "react";
import { useActionData } from "react-router-dom";

function AddProduct() {
  
return (
    <html>
      <head>
        <style>{`
          body {
            background-color: rgb(137, 72, 190);
            background-image: linear-gradient(90deg, transparent 20%, rgb(171, 10, 196));
            background-image: url('https://static.vecteezy.com/system/resources/previews/024/655/830/non_2x/abstract-yellow-flower-painted-with-messy-brush-strokes-generated-by-ai-free-photo.jpg');
          }
        `}</style>
      </head>
      <body style={{ backgroundColor: 'rgb(137, 72, 190)', backgroundImage: 'linear-gradient(90deg, transparent 30%, rgb(171, 10, 196)), url("https://static.vecteezy.com/system/resources/previews/024/655/830/non_2x/abstract-yellow-flower-painted-with-messy-brush-strokes-generated-by-ai-free-photo.jpg")', backgroundSize: 'cover' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5%', backgroundColor: '#ffc0cbb7', justifyContent: 'space-between', borderRadius: '1pc' }}>
            <h1>Add Product</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '10px', width: '250px' }}>
              <input type="text"  placeholder="Enter ProductName" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <input type="text"  placeholder="Product Description" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <input type="text" placeholder="Category" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <input type="text" placeholder="Price" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <div>
                <button style={{ width: '100px', height: '24px', border: '1px solid rgb(20, 2, 2)', borderRadius: '20px', backgroundColor: 'whitesmoke', backgroundImage: 'linear-gradient(90deg, transparent 30%, rgb(160, 158, 158))', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',color:'black',paddingBottom:'25px',paddingTop:'5px' }}>
                  <span>Sign Up</span>
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h5>Already have an account?</h5>
                <a href="http://127.0.0.1:5500/login.html">Login</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AddProduct;