import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useGlobalState } from '../components/providers/GlobalStateProvider';

const Login = () => {
    const { fetchData} = useGlobalState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mySwitch, setSwitch] = useState('login');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState({});
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); 
        return () => setIsMounted(false); 
    }, []);

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '893186141142-aabed983nqjlb6of6i8oi2l50ss346qu.apps.googleusercontent.com',
        });
    },[])
    

    function onAuthStateChanged(user) {
        setUser(user);
       
        if (initializing) setInitializing(false);
    }
    function handleLogin() {
        // console.log(email, password);
        // const res = logInWithEmailAndPassword({email, password})
    }
    function handleSignup() {
        // console.log(email, name, password);
        // const res = addEmailDatatoDb({email, name, password})

    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    async function onGoogleButtonPress() {
        try {
            // Check if your device supports Google Play
            console.log('heloo')
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            // Sign in the user with Google
            const user1 = await GoogleSignin.signIn();
            console.log(user1)
            // // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(user1.data.idToken);

            // Sign-in the user with the credential
            // await auth().signInWithCredential(googleCredential);
            // console.log("User signed in with Google");
            const user_in = auth().signInWithCredential(googleCredential);
            user_in.then((user)=>{
                // setUserId(user.user.uid);
                // if(uid !== ""){
                //     fetchData()
                // }
                fetchData(user.user.uid)
                // console.log(user.user.uid)

            }).catch((err)=>{
                console.log(err)
            })

        } catch (error) {
            console.error("Google Sign-In Error:", error);
        }
        console.log("user bhai nadar aa gaye hai")
    }

    if (initializing) return null;
    // console.log();
   
        return (<>
            { mySwitch === 'login'? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20 }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20 }}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                
                
                <Pressable onPress={() => handleLogin()} style={{
                    backgroundColor: 'blue',
                    width: 100,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginTop: 20
                }}>
                    
                    <Text style={{ color: 'white' }}>Login</Text>
                </Pressable>
                <TouchableOpacity

                    style={{ width: 100, height: 48, marginTop: 20,
                        alignItems: 'center',
                     }}
                    onPress={onGoogleButtonPress}>
                    <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                    />
                </TouchableOpacity>
                <Pressable onPress={() => setSwitch('signup')}>
                    <Text style={{ color: 'blue', marginTop: 20 }}>Don't Have Account? Signup</Text>
                </Pressable>
            </View>
            ) : (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>SignUp</Text>
                <TextInput
    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20 }}
    onChangeText={setName}
    value={name}
    placeholder="Name"
/>

                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20 }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 20 }}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Pressable onPress={() => handleSignup()} style={{
                    backgroundColor: 'blue',
                    width: 100,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginTop: 20
                }}>
                    
                    <Text style={{ color: 'white', }}>Login</Text>
                </Pressable>
                <TouchableOpacity
                    style={{ width: 192, height: 48, marginTop: 20,
                        alignItems: 'center',
                     }}
                    onPress={onGoogleButtonPress}>
                    <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                    />
                </TouchableOpacity>
                {/* <Pressable onPress={() => setSwitch('login')}>
                    <Text style={{ color: 'blue', marginTop: 20 }}>Already Have sn Account? Signin</Text>
                </Pressable> */}
            </View>)}
            
            </>
        );
    
};

export default Login;
