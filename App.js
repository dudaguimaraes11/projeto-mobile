import React from 'react'; 

import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native'; 

const DATA = [ 
  { id: '1', nome: 'Sleepy Girl Rhode Blush', preco: 'R$169.90', image: '/'}, 
  { id: '2', nome: 'LipTint Rhode Ribbon', preco: 'R$129.90', image: '/'}, 
  { id: '3', nome: 'Peptide Glazing Fluid', preco: 'R$210.90', image: '/'}, 
  { id: '4', nome: 'Lip Treatment Rhode', preco: 'R$132.90', image: '/'}, 
  { id: '5', nome: 'Lip Liner Lunge Rhode', preco: 'R$119.90', image: '/'}, 
  { id: '6', nome: 'Pineapple Refresh Rhode', preco: 'R$152.90', image: '/'}, 
]; 

const ProdutoCard = ({ item }) => (
  <View style={styles.cardContainer}>
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" /> 
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
    <TouchableOpacity styles={styles.button}>
      <Text style={styles.buttonText}> Comprar agora</Text>
    </TouchableOpacity>
  </View>
);


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>CHÉRIE{"\n"}CHÉRIE</Text>
      </View>

      <View style={styles.gridWrapper}>
        {DATA.map((item) => (
          <ProdutoCard key={item.id} item={item} />
        ))}
      </View>

      <View style={styles.footerBanner}>
        <Text style={styles.footerTitle}>THE PEPTIDE LIPTINT</Text>
        <View style={styles.placeholderBannerImg} />
      </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E8D8D8'
  },
  header:{
    backgroundColor: '#632E2E',
    paddingVertical: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#F5E6E6',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3
  },
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%', 
    marginBottom: 25,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFC5C5',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    aspectRatio: 0.85,
    borderWidth: 1,
    borderColor: '#422121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '80%',
    heigth: '60%',
    marginBottom: 10,
  },
  productName: {
    fontSize: 11,
    fontWeight: 700,
    textAlign: 'center',
    color: '#632E2E',
    textTransform: 'uppercase',
  },
  productPrice: {
    fontSize: 13,
    fontWeight: 900,
    color: '#632E2E',
    marginTop: 4,
  },
  button: {
    backgroundColor:  '#632E2E',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginTop: -15,
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
  },
  footerBanner: {
    backgroundColor: '#FFB8B8',
    margin: 15,
    borderRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    marginBottom: 400,
  },
  footerTitle: {
    fontSize: 22,
    fontWeight: 900,
    color: '#632E2E',
    marginBottom: 15,
  },
  placeholderBannerImg: {
    width: '100%',
    height: 80,
    backgroundColor: '#E8D8D8',
    borderRadius: 10,
  },
});          