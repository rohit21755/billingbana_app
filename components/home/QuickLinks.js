import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function QuickLinks() {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#BAD8FF']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 0, y: 1 }}
    //   style={{ flex: 1 }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 10
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '400' }}>Quick Links</Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: '600', fontSize: 12 }}>View More</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingBottom: 8,
          marginTop: 2,
          gap: 10,
          flexWrap: 'wrap', // Wrap content to next line if needed
        }}
      >
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              padding: 6,
              borderRadius: 10,
              width: '22%',
              shadowColor: '#DDDDDD',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5.8,
    // Shadow for Android
    elevation: 6, // Adjust the width to fit within the screen
            }}
          >
            <View
              style={{
                backgroundColor: 'rgba(221, 236, 255, 1)',
                width: '100%',
                height: 50,
                borderRadius: 10,

              }}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                // padding: 3,
                width: '100%',
                 // Adjust font size if necessary
                color: 'grey',
              }}
            >
              Party Statement
            </Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}
