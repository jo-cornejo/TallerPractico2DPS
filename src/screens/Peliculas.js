import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


const Peliculas = () => {
  const [habitacion, setHabitacion] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [id, setId] = useState('');
  const imageSelect = (id) => {
    const images = {
      accion1: 'IKgRvTMQu74',
      accion2: 'z9GI7whDlEw',
      accion3: 'Amzj7xll3Aw',
      accion4: '5V_1p_Bk6Wg',
      accion5: 'PXLGGqEHQ-U',
      accion6: '6JwgWtNfNFo',
      comedia1: 'J0rFGJV3cYw',
      comedia2: 'q76xG0EpBmI',
      comedia3: 'SSUjmrFt69g',
      comedia4: 'DrAClyAk4O8',
      comedia5: 'LwrEnPYHsyQ',
      comedia6: 'j_x2I3J7rVw',
      romance1: 'ttjJb9jSJtM',
      romance2: '3zjxECCWwrU',
      romance3: '70Ti86a8z54',
      romance4: 'KiFGEwueNFU',
      romance5: 'k_NAYVCUyvs',
      romance6: 'FRrc2X4Uzm4',
    };

    return images[id];
  };
  const [modalVisiblePupas, setModalVisiblePupas] = useState(false);
  const [modalAtaco, setModalAtaco] = useState(false);
  return (
    <>
      <ScrollView>
      <Modal
          transparent={true}
          animationType="slide"
          visible={habitacion}
          onRequestClose={() => {
            setHabitacion(!habitacion);
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>{titulo}</Text>
              <YoutubePlayer width={'100%'} play={false} height={175} videoId={imageSelect(id)} />
              <Text style={styles.modaltext}>{descripcion}</Text>
              <Button
                title="Regresar"
                onPress={() => {
                  setHabitacion(!habitacion);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('../images/blackwidow.jpg')}
          />
        </View>
        <View style={styles.bordecito}></View>


        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Acción</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Black Widow');
                  setDescripcion('Una peligrosa conspiración, relacionada con su pasado, persigue a Natasha Romanoff, también conocida como Viuda Negra. La agente tendrá que lidiar con las consecuencias de haber sido espía, así como con las relaciones rotas, para sobrevivir.\n\n2021 ‧ Acción/Aventura ‧ 2h 13m');
                  setId('accion1');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://i.pinimg.com/736x/22/41/9a/22419a1fbcfd03100d9dc6b28d8e1a3a.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('John Wick 3: Parabellum');
                  setDescripcion('John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización.\n\n2019 ‧ Acción/Suspenso ‧ 2h 11m');
                  setId('accion2');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://play-lh.googleusercontent.com/8OnmMiByi18D95BiKRsCydZugi5Bea0RJvcUoeoybAZifAwWOxJbMJFee3viariAuWl51gINxAOyC-dnxTw'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Bad Boys for Life');
                  setDescripcion('Los policías de la vieja escuela Mike Lowery y Marcus Burnett vuelven a patrullar juntos para derrotar al líder vicioso de un cartel de drogas de Miami. El recién creado equipo de élite AMMO del departamento de policía de Miami junto con Mike y Marcus se enfrentan al despiadado Armando Armas.\n\n2020 ‧ Acción/Buddy cop ‧ 2h 4m');
                  setId('accion3');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/918qm9sPzCL._RI_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Wonder Woman 1984');
                  setDescripcion('Diana Prince, conocida como Wonder Woman se enfrenta a Cheetah, una villana que posee fuerza y agilidad sobrehumanas.\n\n2020 ‧ Acción/Aventura ‧ 2h 31m');
                  setId('accion4');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://i2.wp.com/www.nolapeles.com/wp-content/uploads/2020/12/opinion-de-wonder-woman-1984.jpg?resize=659%2C824&ssl=1'}}
                />
              </TouchableHighlight>
            </View>
          
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Godzilla vs. Kong');
                  setDescripcion('Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad.\n\n2021 ‧ Ciencia ficción/Acción ‧ 1h 53m');
                  setId('accion5');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/7762b4b338ecf6b2754f26702b276ef4d0199e0d9b08c18e8248d051599a3b9e._RI_V_TTW_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Marksman');
                  setDescripcion('Jim, un ranchero de Arizona que vive cerca de la frontera con México, se convierte en el protector de Miguel, un niño inmigrante de 11 años que ha perdido a su madre en un tiroteo con los asesinos del cartel que lo persiguen.\n\n2021 ‧ Acción/Suspenso ‧ 1h 48m');
                  setId('accion6');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://elcritico.com.ar/wp-content/uploads/2021/04/el-protector-poster.jpg'}}
                />
              </TouchableHighlight>
            </View>
            
          </ScrollView>
        </View>


        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Comedia</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Once Upon a Time in Hollywood');
                  setDescripcion('A finales de los 60, Hollywood empieza a cambiar y el actor Rick Dalton trata de adaptarse a los nuevos tiempos. Junto a su doble, ambos experimentan problemas para modificar sus hábitos, debido a lo enraizados que están. Al mismo tiempo, nace una relación entre Rick y la actriz Sharon Tate, que fue víctima de la familia Manson en la matanza de 1969.\n\n2019 ‧ Comedia/Drama ‧ 2h 51m'
                  );
                  setId('comedia1');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4ec71006a271c5cc2a01f3fe456813a6842a0bb5ee82deeb25b0ca5714aa30fa._RI_V_TTW_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Shazam!');
                  setDescripcion('El joven de 14 años Billy Batson puede convertirse en un superhéroe adulto solo con gritar la palabra "¡Shazam!". Pero dentro de un cuerpo superpoderoso, Shazam esconde un corazón de niño.\n\n2019 ‧ Acción/Aventura ‧ 2h 12m');
                  setId('comedia2');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://m.media-amazon.com/images/I/61GMlAdF8LL._AC_SY679_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Intern');
                  setDescripcion('Ben Whittaker, un jubilado viudo de 70 años, tiene demasiado tiempo libre y muy pocas cosas con las que llenarlo. Cuando ve una oferta de trabajo para becarios sénior en una empresa que opera en internet, no duda en presentarse.\n\n2015 ‧ Comedia/Comedia dramática ‧ 2h 1m');
                  setId('comedia3');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://thefashionguilty.files.wordpress.com/2016/08/the-intern-movie-poster.jpg?w=600'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Big Hero 6');
                  setDescripcion('Cuando un giro inesperado de eventos los sumerge en el medio de un peligroso plan, un niño prodigio, su robot y sus amigos se convierten en héroes de alta tecnología en una misión para salvar su ciudad.\n\n2014 ‧ Infantil/Comedia ‧ 1h 42m');
                  setId('comedia4');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://i.pinimg.com/originals/fe/57/b8/fe57b8a46ecd5016cb7bd270104aa8bd.jpg'}}
                />
              </TouchableHighlight>
            </View>
          
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Miss Congeniality');
                  setDescripcion('El prestigioso concurso de Miss Estados Unidos ha recibido la amenaza de un criminal perseguido por el Gobierno y al que el FBI lleva mucho tiempo siguiendo la pista. Tras la amenaza, el FBI decide infiltrar a una de sus agentes en el concurso.\n\n2000 ‧ Comedia/Acción ‧ 1h 49m');
                  setId('comedia5');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/e5141e83b56d13627e2c31cc4df44e76404b0766eab339b1d14a958f0c33ac05._RI_V_TTW_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Proposal');
                  setDescripcion('Margaret, una famosa e influyente editora de Nueva York, está a punto de ser deportada a Canadá. Para evitarlo, declara que está comprometida con su ayudante Andrew. Él está dispuesto a participar en la farsa, pero imponiendo ciertas condiciones.\n\n2009 ‧ Romance/Comedia romántica ‧ 1h 48m');
                  setId('comedia6');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5d2637e27b56285f072a2b49f033ab0eb4f9b6fd0c2cad489ef30fec5877f900._RI_V_TTW_.jpg'}}
                />
              </TouchableHighlight>
            </View>
            
          </ScrollView>
        </View>


        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Romance</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Pride and Prejudice');
                  setDescripcion('En esta daptación de la célebre novela de Jane Austen, la joven Lizzie conoce al apuesto y elegante señor Darcy, pero, a primera vista, le parece demasiado orgulloso y arrogante.\n\n2005 ‧ Romance/Drama ‧ 2h 7m');
                  setId('romance1');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://m.media-amazon.com/images/I/4112IjDA7YL._AC_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('After');
                  setDescripcion('Cuando Tessa toma la decisión más importante de su vida, todo cambia. Los secretos que salen a la luz sobre su familia y la de Hardin ponen en peligro su relación y su futuro juntos. La vida de Tessa empieza a romperse en pedazos y ya nada será como antes.\n\n2021 ‧ Romance/Drama ‧ 1h 39m');
                  setId('romance2');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://es.web.img3.acsta.net/pictures/21/08/16/18/07/0847748.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Twilight');
                  setDescripcion('Bella Swan se va a vivir con su padre al pequeño pueblo de Forks, donde conoce a Edward, un atractivo y misterioso chico del que se enamora y quien esconde un gran secreto: es un vampiro. Pero la familia del chico guarda una peculiaridad, y es que no se alimenta de sangre humana.\n\n2008 ‧ Romance/Fantasía ‧ 2h 2m');
                  setId('romance3');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1520969/4002393/apivn0zho__51972.1626278184.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Fault in Our Stars');
                  setDescripcion('Hazel tiene dieciséis años, está enferma de cáncer desde pequeña y sobrevive gracias a un pequeño milagro médico y a la bombona de oxígeno que la acompaña todo el tiempo. Un día, Hazel conoce a Gus, que ya ha superado la enfermedad.\n\n2014 ‧ Romance/Drama ‧ 2h 6m');
                  setId('romance4');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'http://upinforma.com/nuevo/images/noticias/bqjo.jpg'}}
                />
              </TouchableHighlight>
            </View>
          
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Love, Rosie');
                  setDescripcion('Rosie y Alex son, desde su infancia, los mejores amigos del mundo. Sin embargo, en los últimos días de instituto, una serie de acontecimientos los distancia anímica y físicamente.\n\n2014 ‧ Romance/Comedia romántica ‧ 1h 42m');
                  setId('romance5');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dcc6aeb7b50ba834e9745fc651b2a871a421251d89802a4572da9c61b5eaf2a2._RI_V_TTW_.jpg'}}
                />
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Me Before You');
                  setDescripcion('Louisa una chica inestable y creativa, reside en un pequeño pueblo de la campiña inglesa. Vive sin rumbo y va de un trabajo a otro para ayudar a su familia a llegar a fin de mes. Sin embargo, un nuevo trabajo pondrá a prueba su habitual alegría.\n\n2016 ‧ Romance/Drama ‧ 1h 50m');
                  setId('romance6');
                }}>
                <Image
                  style={styles.ciudad}
                  source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9d483cc05ef029d9379d098f2c0a00664a0e69944d61696f89119e2b31c66b9a._RI_V_TTW_.jpg'}}
                />
              </TouchableHighlight>
            </View>
            
          </ScrollView>
        </View>
        <View><Text>{'\n'}</Text></View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
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
    height: 350,
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
    backgroundColor: '#181D33aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#181D33',
    marginTop: 40,
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 20,
    padding: 20,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 25,
    justifyContent: 'center',
    paddingBottom: 30,
    color: '#f7f7f7',
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
    fontSize: 16,
    color: '#f7f7f7',
    paddingTop: 5,
    paddingBottom: 20,
    textAlign: 'justify',
  },
});
export default Peliculas;