import Nav from "../components/parties/Nav"
import Partie from "../components/parties/Partie"
import PartieBt from "../components/bottom/PartieBt"
import { useState } from "react"
import { useGlobalState } from "../components/providers/GlobalStateProvider"
import { ScrollView } from "react-native"
import HeaderParties from "../components/HeaderParties"
export default function Parties() {
    const { data } = useGlobalState()
   
    const [selectedText, setSelectedText] = useState('all')
    function handleChange(s){
        console.log(s)
        setSelectedText(s)
    }
    return<>
    <HeaderParties/>
    <Nav handleChange={handleChange}/>   
    <ScrollView>
    <Partie toShow={selectedText} data={data?.data.parties}/>
    </ScrollView> 
    <PartieBt/>
    </>
}