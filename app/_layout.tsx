// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{
        // Можно задать опции по умолчанию для всех экранов стека
        // headerStyle: { backgroundColor: '#f4511e' },
        // headerTintColor: '#fff',
        // headerTitleStyle: { fontWeight: 'bold' },
      }}>
        {/* Экран карты как корневой */}
        <Stack.Screen name="index" options={{ title: 'Карта мест' }} />

        {/* Экран деталей маркера */}
        <Stack.Screen
          name="marker/[id]"
          options={{
            // Заголовок будет установлен динамически из MarkerDetailScreen
            // title: 'Детали маркера', // Можно задать дефолтный
            // headerRight: () => (...) // Если нужно добавить кнопки в хедер здесь
          }}
        />
      </Stack>
      <StatusBar style="light" /> {/* Или другой стиль */}
    </>
  );
}