import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from '../../components/Header'
import Balance from "../../components/Header/Balance"
import Moviments from "../../components/Moviments"
import Actions from "../../components/Actions"

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 // 0=despesas 1=receitas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '2.000,00',
    date: '17/09/2022',
    type: 1 // 0=despesas 1=receitas
  },
  {
    id: 3,
    label: 'Salário',
    value: '5.000,00',
    date: '10/09/2022',
    type: 1 // 0=despesas 1=receitas
  }
]

export default function Home() {
  return (
    <View style={StyleSheet.container} >
      <Header name='Alexandre Pranskunas' />
      <Balance saldo='9.250,00' gastos='-527,00' />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Moviments data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  }
})