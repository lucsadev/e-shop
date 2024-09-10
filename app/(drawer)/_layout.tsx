import { Drawer } from 'expo-router/drawer';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { CustomDrawerContent, Header } from '@/src/components/ui';


  
  export default function Layout() {
    return (
      <Drawer drawerContent={(props: DrawerContentComponentProps) => <CustomDrawerContent {...props} />} screenOptions={{
        header: (props) => <Header {...props}/>,
      }}>
         <Drawer.Screen name="index"/>
      </Drawer>
    );
  }