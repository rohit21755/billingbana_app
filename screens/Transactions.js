import { View } from "react-native"
import Nav from "../components/transactions/TransactionNav"
import AllTransactions from "../components/transactions/AllTransactions"
export default function Transactions()
{
    return<View style={{ backgroundColor: 'white'}}>
    <Nav/>
    
    <AllTransactions/>
    </View>
}