import { useState } from "react";
import { useActionData } from "react-router-dom";

function AddProduct() {
  
return (
    <html>
      <head>
        <style>{`
          body {
            background-color:' whitesmoke';
           
          }
        `}</style>
      </head>
      <body style={{ backgroundColor: 'whitesmoke', backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/006/663/095/large_2x/shopping-concept-cartons-or-paper-boxes-and-shopping-bag-in-red-shopping-cart-on-pink-background-online-shopping-consumers-can-shop-from-home-and-delivery-service-with-copy-space-free-photo.jpg)', backgroundSize: 'cover',width:"1364px",height:"610px"}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2.5%', backgroundColor: '#f5f5f5b7', justifyContent: 'space-between', borderRadius: '1pc' }}>
            <h1>Add Product</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '10px', width: '250px' }}>
              <input type="text"  placeholder="Enter ProductName" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <input type="text"  placeholder="Product Description" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <input type="text" placeholder="Category" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <input type="text" placeholder="Price" style={{ borderRadius: '5px', padding: '6px', border: '1px solid black' }} />
              <div>
                <button style={{ width: '100px', height: '24px', border: '1px solid rgb(20, 2, 2)', borderRadius: '20px', backgroundColor: 'whitesmoke', backgroundImage: 'linear-gradient(90deg, transparent 30%, rgb(160, 158, 158))', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',color:'black',paddingBottom:'25px',paddingTop:'5px' }}>
                  <span>Add</span>
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
               </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default AddProduct;