
// import React, { useState } from 'react';
// import HomePage from './Home';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
// } from 'react-native';


// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       // Perform login logic here, including JWT authentication
//       const response = await fetch('yahan login API aye gi ', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       console.log('Login Response:', data);
//       // Handle JWT token received in the response
//     } catch (error) {
//       console.error('Login Error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.appname}>Movemate</Text>
//       <Text style={styles.tagline}>Your tag line goes here</Text>
//       {/* Username */}
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={email}
//         onChangeText={text => setEmail(text)}
//         autoCapitalize="none"
//         keyboardType="email-address"
//       />
//       {/* Password */}
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//       />
//       {/* Login Button */}
//       <TouchableOpacity onPress={handleLogin} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 200,
//     alignItems: 'center',
//   },
//   appname: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: 'lightgreen',
//     marginBottom: 10,
//   },
//   input: {
//     marginVertical: 10,
//     padding: 13,
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 50,
//     width: '70%',
//     backgroundColor: 'transparent',
//     textAlign: 'center',
    

//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: 'lightgreen',
//     borderRadius: 25,
//     width: '40%',
//     padding: 15,
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   tagline: {
//     textAlign: 'center',
//     marginTop: 20,
//     color: 'grey',
//   },
// });

// export default LoginScreen;

import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://your-backend-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        
        localStorage.setItem('token', token); // Store JWT token in local storage
        const decoded = jwt_decode(token); // Decode JWT token
        console.log(decoded); // Display decoded token
        setError('');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

