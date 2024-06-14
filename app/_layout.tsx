import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(home)" />
      <Tabs.Screen name="setting" />
    </Tabs>
  );
}
