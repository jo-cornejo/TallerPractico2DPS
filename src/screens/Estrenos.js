import React, {useState} from 'react';
import {View,Text} from 'react-native';

import { Modal, Button, StyleSheet, Alert, Image, ImageBackground, TouchableHighlight, Platform, ScrollView, SafeAreaView} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import YoutubePlayer from 'react-native-youtube-iframe';

const Estrenos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = React.useState([
    { video: 'X0lRjbrH-L8', name: 'Modern Family', description: 'Narrada desde la perspectiva de un cineasta de documental que nunca es visto, la serie ofrece un panorama honesto y divertido, con frecuencia sobre la vida de una familia. ', fecha: 'Fecha de estreno: 23/09/2021', url: 'https://mireal.me/wp-content/uploads/2021/02/modern-family-main_0.jpg'},
    { video: 'iaXx9oRvtBM', name: 'The Punisher', description: 'Un exmarine se ve envuelto en una conspiración militar mientras trata de castigar a las personas responsables de los asesinatos de los miembros de su familia.', fecha: 'Fecha de estreno: 23/10/2021', url: 'https://www.moviementarios.com/wp-content/uploads/2019/01/the-punisher-teaser-751x500.jpg'},
    { video: 'VftMccvBNkE', name: 'Grey´s Anatomy', description: 'Un drama que se enfoca en el personaje de Merdith Grey, una integrante de un grupo de doctores jóvenes en el hospital de Seattle. ', fecha: 'Fecha de estreno: 10/09/2021', url: 'https://www.terra.cl/u/fotografias/m/2021/3/24/f608x342-9085_38808_0.jpeg'},
    { video: '45Q9OBF21vg', name: 'Suicide Squad', description: 'El Escuadrón Suicida​ es una película estadounidense de superhéroes basada en el equipo de antihéroes de DC Comics, Escuadrón Suicida. ', fecha: 'Fecha de estreno: 16/09/2021', url: 'https://media.gq.com.mx/photos/613244abf5ae40fe4960742d/master/pass/the%20suicide%20squad.jpg'},
    { video: 'oK13SZYZqmA', name: 'Cruella', description: 'Decidida a convertirse en una exitosa diseñadora de moda, una joven y creativa estafadora llamada Estella se asocia con un par de ladrones para sobrevivir en las calles de Londres.', fecha: 'Fecha de estreno: 28 de mayo de 2021', url: 'https://hipertextual.com/wp-content/uploads/2021/02/emma-stone-101-da-lmatas-1567746969.jpg'},
    { video: 'JZU8IALnnOg', name: 'Hope', description: 'Tomas y Anja son artistas que, por años, han entremezclado sus vidas a pesar de que la estructura familiar de su hogar pueda ser cuestionable.', fecha: 'Fecha de estreno: 20/09/2021', url: 'https://cdn.superaficionados.com/imagenes/1-peliculas-romanticas-hope-0-cke.jpg'},
  ]);

  return (
    
    <SectionGrid
      itemDimension={250}
      sections={[
        {
          title: 'Series',
          data: items.slice(0, 3),
        },
        {
          title: 'Películas',
          data: items.slice(3, 6),
        },
      ]}
      style={styles.gridView}
      renderItem={({ item, section, index }) => (
        <> 
          <View style={{ flex: 1, backgroundColor: '#F6F6F6' }}>
            <ScrollView>
              <View style={styles.disc2}>
              <View style={styles.vertical3}></View>
                <View style={styles.contenedortext}>
                  <View style={styles.picdisc}>
                  <YoutubePlayer width={'100%'} play={false} height={175} videoId={item.video} />
                  </View>
                  <Text style={styles.disctext}>{item.name}</Text>
                  <Text style={styles.disclistita}>{item.fecha}</Text>
                  <Text style={styles.disclistita}>{item.description}</Text>
                </View>  
              </View>
            </ScrollView>
          </View>
        </>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#181D33',
    padding: 10,

  },
  gridView: {
    marginTop: 5,
    flex: 1,
  },
   disc2: {
    flex: 1,
    flexDirection: 'row',
    height: 250,
    backgroundColor: '#181D33',
    marginBottom: 0,
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  picdisc: {
    flex: 1,
    height: 120,
    width: 250,
    margin: 10,
    alignSelf: 'center',
  },
  disctext: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 17,
  },
  disclistita: {
    marginLeft: 10,
    color: 'white',
    fontWeight: Platform.OS === 'ios' ? '400' : '100',
    marginTop: Platform.OS === 'ios' ? 2 : -3,
    fontSize: 14,
  },
  contenedortext: {
    flex: 1,
  },
  vertical3: {
    backgroundColor: '#E94C45',
    width: 12,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  banner: {
    height: 250,
    flex: 1,
  },
  bordecito: {
    
    borderWidth: 4,
    height: 2,
    flex: 1,
  },
  price: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
  },
  price2: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    marginTop: 40,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
    padding: 20,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
  servicio: {
    width: 60,
    height: 60,
  },
  circulito: {
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 10,
  },
  textservicios: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginRight: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  modaltext: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 20,
    backgroundColor: 'grey',
    width: '100%', // IMPORTANT if modal container has alignItems: 'center'
  },
});
export default Estrenos;