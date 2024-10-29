import { View, Text, ScrollView } from 'react-native';
import QuickLinks from '../components/home/QuickLinks';
import Moreopt from '../components/home/Moreopt';
import RecentTransaction from '../components/home/RecentTransactions';
import Home from '../components/bottom/Home';  // Import the correct Home component

export default function HomeScreen({navigation}) {
    return (
        <>
        <View style={{
            backgroundColor: 'white'
        }}>
            <QuickLinks />
            <Moreopt  />
            <RecentTransaction />
            
            
            </View>
            <Home />
            </>
    );
}
