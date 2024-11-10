import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Parties from './screens/Parties';
import HeaderParties from './components/HeaderParties';
import StockReport from './screens/StockReport';
import StockReportHeader from './components/headers/StockReport';  
import Profile from "./screens/Profile";
import AddNew from './screens/party/AddNew';
import AddNewParty from './components/headers/AddNewParty';
import AddSaleForm from './screens/sale/AddSaleForm';
import AddSaleHeader from './components/headers/AddSaleHeader';
// import Sale from './screens/sale/Sale';
import Transactions from './screens/Transactions';
import SaleHeader from './components/headers/Saleheader';  
// import Cart from './screens/Cart';
import AllItems from './screens/items/AllItems';
// import Items from './screens/items/Items';
import SaleItems from './screens/sale/SaleItems';
import PartieProfile from './screens/party/PartieProfile';
import AddItem from './screens/items/AddItem';
import 'expo-dev-client';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './screens/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalState, GlobalStateProvider } from './components/providers/GlobalStateProvider';
// import AddSaleForm from './screens/sale/AddSaleForm'; 
import PaymentInHeader from './components/headers/PaymentInHeader';
import PaymentIn from './screens/sale/PaymentIn';
import PaymentOut from './screens/purchase/PaymentOut';
import AddPurchaseForm from './screens/purchase/AddPurchaseForm';
import PurchaseItems from './screens/purchase/PurchaseItem';
import AddExpenses from './screens/AddExpenses';
import AddExpensesHeader from './components/headers/AddExpensesHeader';
import { useState } from 'react';
import { CartProvider } from './components/providers/CartProvider';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
      <GlobalStateProvider>
        <CartProvider>
        <AppNavigator />
        </CartProvider>
        </GlobalStateProvider>
      </NavigationContainer>
      </SafeAreaView>
    
    </GestureHandlerRootView>
  );
}

function AppNavigator() {
  const { Uin } = useGlobalState(); 
  console.log(Uin) // Correctly use the hook inside the provider
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      {!Uin ? (
        <Stack.Screen
          name='login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
      ) : (
        <>
          {/* Home Screen with Custom Header */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => <Header />,
            }}
          />

          {/* Parties Screen with Custom Header */}
          <Stack.Screen
            name="Parties"
            component={Parties}
            options={{
              header: () => <HeaderParties />,
            }}
          />
          <Stack.Screen
            name="stock"
            component={StockReport}
            options={{
              header: () => <StockReportHeader />  // Fixed typo here
            }}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="addnewparty"
            component={AddNew}
            options={{
              header: () => <AddNewParty />
            }}
          />
          <Stack.Screen
            name="transactions"
            component={Transactions}
            options={{
              header: () => <SaleHeader />
            }}
          />
          <Stack.Screen
            name="saleitem"
            component={SaleItems}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="allitems"
            component={AllItems}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
          name='additem'
          component={AddItem}
          options={{
            headerShown: false
          }}/>
          <Stack.Screen name='partyprofile' component={PartieProfile} options={{
            headerShown: false
          }}/>
          <Stack.Screen name='addsaleform' component={AddSaleForm} 
        
          options={{
         header: () => <AddSaleHeader />
          }}/>
          <Stack.Screen name='paymentin' component={PaymentIn} options={{
         header: () => <PaymentInHeader title="Payment In"/> 
          }}/>
          <Stack.Screen name='paymentout' component={PaymentOut} options={{
         header: () => <PaymentInHeader title="Payment Out"/> 
          }}/>
          <Stack.Screen name='addpurchaseform' component={AddPurchaseForm} options={{
         header: () => <AddSaleHeader />
          }}/>
          <Stack.Screen name='purchaseitem' component={PurchaseItems} options={{
              headerShown: false
            }}/>
            <Stack.Screen name='addexpense' component={AddExpenses} options={{
              header: ()=> <AddExpensesHeader/> 
            }} />

        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
