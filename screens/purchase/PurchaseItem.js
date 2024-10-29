import SaleItemHeader from "../../components/headers/SaleItemHeader"
import AllPurchaseItems from "../../components/purchase/AllPurchaseItems"
import { useState, useEffect } from "react"
import { useGlobalState } from "../../components/providers/GlobalStateProvider"
export default function PurchaseItems(){
  const {rows, setRows, totalPrice, setTotalPrice} = useGlobalState()
    
     
    
    return<>
    <SaleItemHeader/>
    <AllPurchaseItems setRows={setRows} rows={rows} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
    </>
}