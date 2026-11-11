import { TopTabs } from "expo-router/js-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MahasiswaProvider } from "@/context/MahasiswaContext"; // Impor Provider
export default function MahasiswaTopTabsLayout() {
  return (
    <MahasiswaProvider>
      <TopTabs
        screenOptions={{
          // Warna teks tab yang sedang aktif
          tabBarActiveTintColor: "#072deb",
          // Warna teks tab yang tidak aktif
          tabBarInactiveTintColor: "#64748b",
          // Penataan garis indikator berjalan di bawah tab aktif
          tabBarIndicatorStyle: {
            backgroundColor: "#072deb",
            height: 3,
          },
          // Gaya font label tab
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: "bold",
            textTransform: "none", // Mempertahankan huruf besar-kecil asli
          },
          // Gaya bilah fisik tab bar atas
          tabBarStyle: {
            backgroundColor: "#ffffff",
            elevation: 2,
            shadowOpacity: 0.08,
          },
        }}
      >
        {/* Tab 1: Halaman Data Mahasiswa */}
        <TopTabs.Screen
          name="index"
          options={{
            title: "Data",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />
        {/* Tab 2: Halaman Input Mahasiswa */}
        <TopTabs.Screen
          name="input"
          options={{
            title: "Input",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "add" : "add-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />
        {/* Tab 3: Halaman Laporan / Report */}
        <TopTabs.Screen
          name="report"
          options={{
            title: "Report",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "document-text" : "document-text-outline"}
                size={22}
                color={color}
              />
            ),
          }}
        />
      </TopTabs>
    </MahasiswaProvider>
  );
}

// import { TopTabs } from "expo-router/js-top-tabs";
// import { MahasiswaProvider } from "@/context/MahasiswaContext"; // Impor Provider
// export default function MahasiswaTopTabsLayout() {
//   return (
//     <MahasiswaProvider>
//       <TopTabs
//         screenOptions={{
//           tabBarActiveTintColor: "#072deb",
//           tabBarInactiveTintColor: "#64748b",
//           tabBarIndicatorStyle: {
//             backgroundColor: "#072deb",
//             height: 3,
//           },
//           tabBarLabelStyle: {
//             fontSize: 13,
//             fontWeight: "bold",
//             textTransform: "none",
//           },
//           tabBarStyle: {
//             backgroundColor: "#ffffff",
//             elevation: 2,
//             shadowOpacity: 0.08,
//           },
//         }}
//       >
//         <TopTabs.Screen name="index" options={{ title: "Data" }} />
//         <TopTabs.Screen name="input" options={{ title: "Input" }} />
//         <TopTabs.Screen name="report" options={{ title: "Report" }} />
//       </TopTabs>
//     </MahasiswaProvider>
//   );
// }
