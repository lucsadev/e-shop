//import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { queryAllProducts } from "@/src/db/queries/products";
import { useProductsStore } from "./../src/store";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { HeaderScreen } from "@/src/components/ui";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const addProducts = useProductsStore.use.addProducts();

  useEffect(() => {
    queryAllProducts().then((data) => data && addProducts(data));
    //<      .finally(() => SplashScreen.hideAsync());
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const categories = useProductsStore.use.categories();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          header: () => <HeaderScreen />,
        }}
      >       
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="profile"/>
        <Stack.Screen name="categories"/>
        <Stack.Screen name="details"/>
      </Stack>
    </GestureHandlerRootView>
  );
}