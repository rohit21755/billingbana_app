import { View,Text } from 'react-native'
import SlideButton from 'rn-slide-button';
import RnSlideButton from 'rn-slider-button/RnSlideButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'; 
export default function AddSalebt() {
    let x = 239
    const handleSlideComplete = () => {
        console.log('Slide action completed!');
      };
    return<>
    <View style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#212934',
          paddingVertical: 14,
          paddingHorizontal: 20,
          borderRadius: 20,
          width: '100%', 
        }}>
            <RnSlideButton
        onSlideComplete={handleSlideComplete}
        width={300}
        height={50}
        backgroundColor="white"
        textColor="#000"
        text="Slide to Pay"
        thumbColor="#00308F"
        iconColor="white"
        shadowColor="#000"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.3}
        shadowRadius={3}
        iconSize={30}
        iconPath={require('../../assets/swipearrow.png')} 
      />

        </View>
    </>
}