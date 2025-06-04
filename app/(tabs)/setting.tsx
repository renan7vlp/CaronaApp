import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

type Routine = {
  id: string
  title: string
  description: string
}

const Rotinas = () => {
  // Mock routines data - in real app this would come from API or storage
  const [routines, setRoutines] = useState<Routine[]>([
    { id: '1', title: 'Exercícios matinais', description: '30 minutos de corrida e alongamento' },
    { id: '2', title: 'Leitura diária', description: 'Ler 20 páginas do livro atual' },
    { id: '3', title: 'Aprender código', description: 'Estudar React Native por 1 hora' },
  ])

  const renderRoutine = ({ item }: { item: Routine }) => (
    <View style={styles.routineCard}>
      <Text style={styles.routineTitle}>{item.title}</Text>
      <Text style={styles.routineDescription}>{item.description}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suas Rotinas</Text>
      {routines.length === 0 ? (
        <Text style={styles.emptyMessage}>Você ainda não cadastrou nenhuma rotina.</Text>
      ) : (
        <FlatList
          data={routines}
          keyExtractor={item => item.id}
          renderItem={renderRoutine}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafe',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
  },
  listContent: {
    paddingBottom: 20,
  },
  routineCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  routineTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
    color: '#007bff',
  },
  routineDescription: {
    fontSize: 16,
    color: '#555',
  },
})

export default Rotinas
