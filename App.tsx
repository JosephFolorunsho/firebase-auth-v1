import StackNav from "./navigation/StackNav";
import { AuthProvider } from "./AuthContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AuthProvider>
      <StackNav />
    </AuthProvider>
  );
}
