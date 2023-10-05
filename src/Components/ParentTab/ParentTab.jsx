import React, { useState } from 'react'
import "./ParentTab.css"
import ChildTab from '../ChildTab/ChildTab'
import { wishdata } from '../Wishlist/Wishlistdats'
import StockCart from '../Wishlist/StockCart'
// import "../../Components/Wishlist/Wishlist.css"



const ParentTab = () => {
    const [tab ,setTab] = useState('STOCK')
    const[watchLitsId,setWatchListId] = useState([])
    const [orderListid,setOrderListId] = useState([])
    const [searchQuery ,setSearchQuery] = useState ('')
 

    const listHandler=(getListName)=>{
    setTab(getListName)
    } 
    const wishlistBtn=(id)=>{
    let selectedId = [...watchLitsId]
    if(selectedId.includes(id)){
      let filterData = selectedId.filter((item)=> item !==id)
      setWatchListId(filterData)
    }else{
      selectedId.push(id)
      setWatchListId(selectedId)
    } 
    }
    const orderBtn=(id)=>{
        let orderData=[...orderListid]
        if(orderData.includes(id)){
          let remainingData=orderData.filter((item)=> item!==id)
          setOrderListId(remainingData)
        }
        else{
          orderData.push(id)
          setOrderListId(orderData)
        }
    }
    const searchInput =(e)=>{
     const query = e.target.value.toLowerCase() 
     setSearchQuery(query)
    }
    const filteredWishdata = wishdata[0].filter((item)=> item.name.toLowerCase().includes(searchQuery))

  return (
    <>
    <div className='center'>
            <h1>Welcome to Upstox</h1>
            <h2>Start trading to see some magic happen!</h2>
            <div className='inputSection'>  
            <input type="text"  placeholder='Search-Here' onChange={searchInput} value={searchQuery}/>
            </div>
    </div>
      <div className='navbar'>
        <ChildTab className={tab==="STOCK"?'active':""} listName="STOCK DATA"  listBtn={()=>listHandler("STOCK")}/>
        <ChildTab className={tab==="WATCHLIST"?'active':""} listName="WATCH LIST " listBtn={()=>listHandler("WATCHLIST")}/>
        <ChildTab className={tab==="ORDERS"?'active':""} listName="ORDERS LIST" listBtn={()=>listHandler("ORDERS")}/>
      </div>
     {tab === 'STOCK' && <div>    
                
        {
            filteredWishdata.map((item)=>{
                const {id} =item;
                return <StockCart selectedOrderList={orderListid.includes(item.id)} selectedWathcList={watchLitsId.includes(item.id)} key={id}{...item}  wishlist={()=>wishlistBtn(id)} orderlist={()=>orderBtn(id)}/>
            })
        }
          
      </div>}
      {tab === 'WATCHLIST' &&  <div
      >
      {
            wishdata[0].map((item)=>
                watchLitsId.includes(item.id) &&
              <StockCart colorHeart="red" key={item.id}{...item} wishlist={()=>wishlistBtn(item.id)} />   
            )
        }
      </div>}
      {tab === 'ORDERS' && <div>
          {
          wishdata[0].map((item)=>
              orderListid.includes(item.id)&&
              <StockCart colorCart="green" key={item.id}{...item} orderlist={()=>orderBtn(item.id)} />
              
          )
          }
      </div>}
    </>
  )
}
export default ParentTab
