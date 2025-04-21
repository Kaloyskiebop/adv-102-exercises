import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Login/login" options={{
          title: "Login Screen",
           headerShown: true 
          }}/>
         <Stack.Screen name="screens/screens" options={{
          title: "useState and useEffect screens",
           headerShown: true 
          }}/>
        <Stack.Screen name="Register/register" options={{
          title: "Register Screen",
           headerShown: true 
          }}/> 
        <Stack.Screen name="screens/crudContainer" options={{
          title: "CRUD Screen",
           headerShown: true 
          }}/> 
        <Stack.Screen name="screens/quiz" options={{
          title: "Quiz Screen",
           headerShown: true 
          }}/> 
        <Stack.Screen name="screens/Exercise_8/container" options={{
          title: "Login and Registration Container Screen",
           headerShown: true 
        }}/> 
        <Stack.Screen name="screens/Exercise_8/login" options={{
          title: "Login Screen",
           headerShown: true 
        }}/> 
        <Stack.Screen name="screens/Exercise_8/register" options={{
          title: "Register Screen",
           headerShown: true 
        }}/> 
        <Stack.Screen name="screens/dashboard" options={{
          title: "Register Screen",
           headerShown: true 
        }}/> 
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
