import React from 'react'
import "./Wishlist.css"

const StockCart = ({name,stockExchange,stockPrice,stockValueChange,wishlist,orderlist,selectedWathcList,selectedOrderList,colorHeart,colorCart}) => {
 

  return (
    <>
       <div className='parent' style={{display:'flex', columnGap:"100px"}}>
        <div className='left'>
            <div>{name}</div>
            <div>{stockExchange}</div>
        </div>
        <div className='iconSection'>
          <span style={selectedWathcList ? {color:"red"}:{color:"#000"}} ><i style={{color:colorHeart}} className="fa-solid fa-heart" onClick={wishlist}></i></span>
          <span style={selectedOrderList ? {color:"green"}:{color:"#000"}} ><i style={{color:colorCart}} className="fa-solid fa-cart-shopping" onClick={orderlist}></i></span>
        </div>
        <div className='right'>
            <div>₹ {stockPrice}</div>
            <div style={stockValueChange.includes("-") ? { color: "red" } : { color: "green" }}>{stockValueChange}</div>
        </div>
        </div>
    </>
  )
}

export default StockCart
