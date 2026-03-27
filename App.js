import React from 'react'; 

import {StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native'; 

const data = [ 
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

          