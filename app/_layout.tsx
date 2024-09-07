import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Header } from "./../src/components/ui";
import { queryAllProducts } from "@/src/db/queries/products";
import { useProductsStore } from './../src/store';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 const addProducts = useProductsStore.use.addProducts()

  useEffect(() => {
    queryAllProducts()
      .then((data) => data && addProducts(data))
      .finally(() => SplashScreen.hideAsync());
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: "transparent",
          drawerActiveTintColor: '#50072488',                    
          header: (props) => <Header {...props} />,
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Inicio" }} />
        <Drawer.Screen name="profile" options={{ title: "Perfil" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
