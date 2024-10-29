import SaleItemHeader from "../../components/headers/SaleItemHeader"
import AllSaleItems from "../../components/sale/AllSaleItems"
import AllSaleItems2 from "../../components/sale/AllSaleItems2"
import { useState, useEffect } from "react"
import { useGlobalState } from "../../components/providers/GlobalStateProvider"
import { useRoute } from "@react-navigation/native"
export default function SaleItems(){
  const {rows, setRows, totalPrice, setTotalPrice, setRows2, rows2} = useGlobalState()
  const route = useRoute()
  console.log(route.params)

    return<>
    <SaleItemHeader/>
    {route.params.type === 'Sale' ? (<AllSaleItems2 setRows={setRows2} rows={rows2} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />) : (<AllSaleItems setRows={setRows} rows={rows} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />)}
    
    </>
}