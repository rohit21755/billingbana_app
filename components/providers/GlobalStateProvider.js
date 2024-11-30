import { useContext, createContext, useState } from "react";
// import { useRoute } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const GlobalState = createContext();
export function GlobalStateProvider({children}){
    const [data, setData] = useState();
    // const [uid,setUid] = useState();
    const [Uin, setUin] = useState(false);
    const [time, setTime] = useState()
    const [totalPrice, setTotalPrice] = useState();
    const [draft, setDraft] = useState();
    const [rows, setRows] = useState([
        {
          index: 0,
          item: "",
          qty: 1,
          unit: "",
          hsn: "",
          price_per_unit: "",
          discount: "",
          profit: 0,
          amount: "",
        },
      ]);
      const [rows2, setRows2] = useState([
        {
          index: 0,
          item: "",
          qty: 1,
          unit: "None",
          price_per_unit: 0,
          discount: 0,
          discountPercentage: 0,
          profit: 0,
          amount: 0,
          tax: 0,
          taxPercentage: 0,
        },
      ]);
    function formatDate() {
        let date = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
      
        return `${day}, ${date.getDate()} ${month}, ${hours}:${minutes}`;
      }
    
   
      async function fetchData(newUid) {
      
        
        
        try {
          
            const response = await fetch('https://api-bilingbaba.onrender.com/get_user', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'vvYfl26Dh1SJXKzZeedwLRm93FB3',
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

    
            const data2 = await response.json();
    
            setTime(formatDate())
            setUin(true)

            setData(data2)
            
            
          
            
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
        try {
            const response = await axios.get(`https://bb-websockets.onrender.com/api/accounts/vvYfl26Dh1SJXKzZeedwLRm93FB3`);
           
            setDraft(response.data.transactionsLength)
        }
        catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    async function updateData(newdata2, newUid2){

    
    
        try {
            await fetch('https://api-bilingbaba.onrender.com/editData', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: newUid2,
                },
                body: JSON.stringify(newdata2.data),
            });
            console.log("Data updated successfully");
            await fetchData(newUid2);
            console.log("Data fetched successfully");
            setRows([
                {
                    index: 0,
                    item: "",
                    qty: 1,
                    unit: "",
                    hsn: "",
                    price_per_unit: "",
                    discount: "",
                    profit: 0,
                    amount: "",
                },
            ]);
        } catch (error) {
            console.error("Error updating data:", error);
            alert("Unable to save to remote server");
        }
    
        
    }
    return <>
    <GlobalState.Provider value={{ data, fetchData, updateData, setUin, Uin, time, setRows, rows, totalPrice, setTotalPrice, rows2, setRows2, draft}}>
        {children}
    </GlobalState.Provider>
    </>
    


}
export const useGlobalState = () => {
    const context = useContext(GlobalState);
    if (context === undefined) {
      throw new Error('useGlobalState must be used within a GlobalProvider');
    }
    return context;
  }