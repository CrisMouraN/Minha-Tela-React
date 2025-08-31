import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const dados = [
 { id: "1", titulo: "Pizza (R$ 30)", data: "20/01/2020" },
 { id: "2", titulo: "Coca-Cola (R$ 10)", data: "20/01/2020" },
];

export default function Index() {
 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.bemVindo}>Bem vindo, Carlos</Text>
       <Text style={styles.gastoTexto}>Você gastou hoje</Text>
       <Text style={styles.gastoValor}>R$ 500</Text>
       <Text style={styles.periodoTitulo}>ESCOLHER PERÍODO:</Text>
       <View style={styles.periodo}>
         <Text style={styles.periodoOpcao}>Hoje</Text>
         <Text style={styles.periodoOpcao}>Essa Semana</Text>
         <Text style={styles.periodoOpcao}>Esse Mês</Text>
       </View>
     </View>

     <View style={styles.menu}>
       <TouchableOpacity style={styles.botao}>
         <Ionicons name="airplane" size={24} color="#fff" />
       </TouchableOpacity>
       <TouchableOpacity style={styles.botao}>
         <Ionicons name="home" size={24} color="#fff" />
       </TouchableOpacity>
       <TouchableOpacity style={styles.botao}>
         <Ionicons name="restaurant" size={24} color="#fff" />
       </TouchableOpacity>
       <TouchableOpacity style={styles.botao}>
         <Ionicons name="car" size={24} color="#fff" />
       </TouchableOpacity>
       <TouchableOpacity style={styles.botao}>
         <Ionicons name="settings" size={24} color="#fff" />
       </TouchableOpacity>
     </View>

     <FlatList
       data={dados}
       keyExtractor={(item) => item.id}
       renderItem={({ item }) => (
         <View style={styles.item}>
           <Text style={styles.itemTitulo}>{item.titulo}</Text>
           <Text style={styles.itemData}>{item.data}</Text>
         </View>
       )}
       contentContainerStyle={styles.lista}
     />
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#F7EBE8",
 },
 header: {
   backgroundColor: "#E54B4B",
   padding: 20,
   paddingBottom: 40,
   borderBottomLeftRadius: 30,
   borderBottomRightRadius: 30,
   alignItems: "center",
 },
 bemVindo: {
   fontSize: 24,
   color: "#fff",
   fontWeight: "bold",
   marginBottom: 10,
 },
 gastoTexto: {
   fontSize: 16,
   color: "#fff",
 },
 gastoValor: {
   fontSize: 32,
   color: "#fff",
   fontWeight: "bold",
   marginVertical: 10,
 },
 periodoTitulo: {
   color: "#fff",
   fontSize: 14,
   marginTop: 10,
 },
 periodo: {
   flexDirection: "row",
   marginTop: 10,
 },
 periodoOpcao: {
   color: "#fff",
   marginHorizontal: 10,
   fontWeight: "bold",
 },
 menu: {
   flexDirection: "row",
   justifyContent: "space-around",
   marginVertical: 20,
 },
 botao: {
   backgroundColor: "#444140",
   padding: 10,
   borderRadius: 8,
 },
 lista: {
   paddingHorizontal: 15,
 },
 item: {
   flexDirection: "row",
   justifyContent: "space-between",
   backgroundColor: "#FFF",
   padding: 15,
   borderRadius: 10,
   marginBottom: 10,
 },
 itemTitulo: {
   fontSize: 16,
   color: "#000",
 },
 itemData: {
   fontSize: 14,
   color: "#777",
 },
});