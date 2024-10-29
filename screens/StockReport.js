import { useState } from "react"
import Stock from "../components/stock/Stock"
import SNav from "../components/stock/Nav"
import Item from "../components/stock/Item"
export default function StockReport(){
    const [sr, setSr] = useState('stock')
    function handleSelected(s) {
        setSr(s)
    }
    return <>
    <SNav handleSelected={handleSelected}/>
    {sr === 'stock'? <Stock/> : <Item/>}
    
    </>
}