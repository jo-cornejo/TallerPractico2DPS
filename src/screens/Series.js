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
  Platform,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const Series = () => {
  const [habitacion, setHabitacion] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [id, setId] = useState('');
  const imageSelect = (id) => {
    const images = {
      accion1: '9Cmxhn46H0s',
      accion2: 'KcBStos46EM',
      accion3: 'R2oA59hYN_Y',
      accion4: 'f10umwTONEU',
      accion5: '19ehX66Mmbg',
      accion6: '6p_l0iYD9dg',
      comedia1: 'nXYFiPGGBKw',
      comedia2: 'xABjR-j5U1c',
      comedia3: 'nYW2zieCn6U',
      comedia4: 'MfvvhM6IJS0',
      comedia5: '9_HjrgLxgfk',
      comedia6: '45_2ZF0mfIM',
      romance1: 'v1yYMWosuwg',
      romance2: 'tuyCKG_-eOk',
      romance3: '5bQ85KKF910',
      romance4: 'CIUzdyWhY9g',
      romance5: 'M9xi7nosVas',
      romance6: 'kqDBcIIxQzY',
    };
    return images[id];
  };
  
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
            source={ {uri: 'https://www.lacasadeel.net/wp-content/uploads/2021/07/What-if.jpg'}}
          />
        </View>
        <View style={styles.bordecito}></View>


        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Acción</Text>
          <ScrollView>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('What If...?');
                  setDescripcion('El espacio explora lo que sucedería si los principales momentos de las películas del Universo Cinematográfico de Marvel ocurrieran de manera diferente.\n\n2021 ‧ Superhéroes ‧ 1 temporada');
                  setId('accion1');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://www.lacasadeel.net/wp-content/uploads/2021/07/What-if.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>What If...?</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2021
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>
     
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Loki');
                  setDescripcion('Loki, el Dios de las Mentiras, se aleja de la sombra de su hermano para embarcarse en una aventura que se desarrolla tras los acontecimientos de "Vengadores: Endgame".\n\n2021 ‧ Superhéroes ‧ 1 temporada');
                  setId('accion2');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2021/07/loki-1-scaled.jpg?fit=1200%2C675&ssl=1'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Loki</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2021
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('WandaVision');
                  setDescripcion('Con vidas suburbanas idealizadas, los seres superpoderosos Wanda y Vision comienzan a sospechar que nada es lo que parece.\n\n2021 ‧ Superhéroes ‧ 1 temporada');
                  setId('accion3');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://thedirect.s3.amazonaws.com/media/article_full/wandavision-season-2.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>WandaVison</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2021
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Daredevil');
                  setDescripcion('Ciego desde que era joven, Matt Murdock lucha contra la injusticia de día como abogado y por la noche como Daredevil en Nueva York.\n\n2015 ‧ Acción ‧ 3 temporadas');
                  setId('accion4');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/11/marvel-daredevil.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Daredevil</Text>
                    <Text style={styles.listita}>
                      {'\n'}3 temporadas{'\n'}Año: 2015
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>
          
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Shooter');
                  setDescripcion('El francotirador Bob Lee Swagger debe evitar un complot contra el presidente de los Estados Unidos. Isaac Johnson, un exmarine y ahora agente del Servicio Secreto, convence a Swagger para investigar dicho complot.\n\n2016 ‧ Acción ‧ 3 temporadas');
                  setId('accion5');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/SBTS7YEVEBN43BIDSLBRMTEDYQ.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Shooter</Text>
                    <Text style={styles.listita}>
                      {'\n'}3 temporadas{'\n'}Año: 2016
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Mandalorian');
                  setDescripcion('Las aventuras de Mando, un pistolero solitario y cazarrecompensas que se abre paso a través de las fronteras más remotas de la galaxia, lejos de la jurisdicción de la Nueva República.\n\n2019 ‧ Drama/Acción ‧ 2 temporadas');
                  setId('accion6');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://as.com/meristation/imagenes/2021/08/19/noticias/1629354138_587034_1629354282_noticia_normal_recorte1.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>The Mandalorian</Text>
                    <Text style={styles.listita}>
                      {'\n'}2 temporadas{'\n'}Año: 2019
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

          </ScrollView>
        </View>


        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Comedia</Text>
          <ScrollView>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Big Bang Theory');
                  setDescripcion('Leonard y Sheldon son dos cerebros privilegiados que pueden ser capaces de decirle a todo el mundo más de lo que quiere saber sobre la física cuántica, pero que no tienen ni la menor idea de cómo relacionarse socialmente, sobre todo cuando se trata de mujeres.\n\n2007 ‧ Comedia ‧ 12 temporadas');
                  setId('comedia1');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/aiv-image/jp/a6929abf-e42a-4fcb-95bc-032c1a06ac35-4db23f79-12d7-4b31-9b0d-01dc13eb604c_RGB_SD._RI_V0b15627381c21cbfb41e5633f8645e1c_TTW_.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>The Big Bang Theory</Text>
                    <Text style={styles.listita}>
                      {'\n'}12 temporadas{'\n'}Año: 2007
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('The Office');
                  setDescripcion('La adaptación de Estados Unidos, localizada en Scranton, Pensilvania., es la de una compañía papelera de alguna forma un poco más dinámica que la versión original Británica, aunque los personajes son esencialmente los mismos, desde Michael Scott, el peor jefe de todos hasta un hombre cualquiera Jim, enamorado de la recepcionista Pam a quien él le coquetea cuando no está preocupado por atormentar a su compañero Dwight, un hombre muy excitable y adulón.\n\n2005 ‧ Comedia de situación ‧ 9 temporadas');
                  setId('comedia2');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://lh3.googleusercontent.com/proxy/tO2F_E2_cXtDKm0i0JOxfxq9KVbQyf1ozQykjMh3MUJhgWrX0g8-bvAMtks-kpG81ArZTKQDbWWip6ywX2gkOnZOgaxVMZtlZxyE5jwBMQbgMpFd_YjBdrI'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>The Office</Text>
                    <Text style={styles.listita}>
                      {'\n'}9 temporadas{'\n'}Año: 2005
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Malcolm in the middle');
                  setDescripcion('Los Cleavers son una familia peculiar. La madre es una crontroladora radical que grita, el padre es un hombre chistoso calvo, el hijo mayor, Francis huyo de la familia a corta edad, Reese es un criminal, Dewey es un cadete espacial y el joven Jamie es un chivo expiatorio. El niño del medio es Malcolm (que se encarga de la narración como entretenimiento sobre su clan desquiciado), es un genio que no quiere ser agotado por su ingenio.\n\n2000 ‧ Comedia de situación ‧ 7 temporadas');
                  setId('comedia3');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1e1002d85e49159692577eb03044c7933b95a0f9caefa0f9e5bbc92ac03479e5._RI_V_TTW_.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Malcolm</Text>
                    <Text style={styles.listita}>
                      {'\n'}7 temporadas{'\n'}Año: 2000
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Friends');
                  setDescripcion('Tres hombres y tres mujeres jóvenes son mejores amigos y viven en el mismo conjunto de apartamentos. Ellos enfrentan la vida y el amor en la ciudad de Nueva York y se involucran en los asuntos personales de los demás, donde incluso a veces intercambian novios o novias, lo que algunas veces genera situaciones que las personas comunes quizás nunca experimentan, especialmente durante las rupturas.\n\n1994 ‧ Comedia de situación ‧ 10 temporadas');
                  setId('comedia4');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/02/hipertextual-hbo-hace-oficial-regreso-friends-2020378966.jpg?fit=1800%2C1081&ssl=1'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Friends</Text>
                    <Text style={styles.listita}>
                      {'\n'}10 temporadas{'\n'}Año: 1994
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>
          
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Boy Meets World');
                  setDescripcion('Una comedia para mayores edad que sigue a Cory Matthews mientras hace malabares con su vida en la escuela, con los amigos y el amor.\n\n1993 ‧ Comedia de situación ‧ 7 temporadas');
                  setId('comedia5');
                }}>
                <View style={styles.inte}>
                  <Image
                    style={styles.pic}
                    source={{uri: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/series.batanga.com/files/11-cosas-que-debes-saber-sobre-Boy-Meets-World-antes-de-ver-el-spin-off-10.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Boy Meets World</Text>
                    <Text style={styles.listita}>
                      {'\n'}7 temporadas{'\n'}Año: 1993
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Gilmore Girls');
                  setDescripcion('Ubicado en un pueblo de cuentos de Connecticut, poblado por una combinación ecléctica de soñadores, artistas y personajes comunes, este drama multi generacional sobre los centros de familia y amistad alrededor de Lorelai Gilmore y su hija, Rory. Lorelai es propietaria del hospedaje, Dragonfly Inn con su mejor amigo y chef Sookie y lidia en las comidas semanales con sus padres excéntricos y pudientes, Richard y Emily Gilmore (quienes siempre tienen que decir algo sobre la vida de su hija). Luego de la secundaria, Rory va a la Universidad de Yale pero frecuentemente regresa a visitar a su madre a Stars Hollow.\n\n2000 ‧ Drama/Comedia ‧ 7 temporadas');
                  setId('comedia6');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'https://www.quever.news/u/fotografias/m/2020/10/5/f850x638-1720_79209_5050.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Gilmore Girls</Text>
                    <Text style={styles.listita}>
                      {'\n'}7 temporadas{'\n'}Año: 2000
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            
          </ScrollView>
        </View>


        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Romance</Text>
          <ScrollView>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Winter Sonata');
                  setDescripcion('El talentoso hijo de un músico busca información sobre su pasado en una ciudad rural.\n\n2002 ‧ Romance ‧ 1 temporada');
                  setId('romance1');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'https://i.ytimg.com/vi/v1yYMWosuwg/maxresdefault.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Winter Sonata</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2002
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Autumn Fairy Tale');
                  setDescripcion('Una pareja vive como hermanos hasta descubrir que no es así, son separados pero el destino los vuelve a unir para enfrentar los obstáculos que su amor presenta.\n\n2000 ‧ Romance ‧ 1 temporada');
                  setId('romance2');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'https://i.pinimg.com/originals/71/ae/6f/71ae6fc8dd6bf42af5b662c37372e1c4.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Autumn Fairy Tale</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2000
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Scent of Summer');
                  setDescripcion('El primer amor de Yoo Min Woo fue desde siempre Soh Eun Hye. Ningún amor fue jamás superado por el que se profesaban ellos dos.\n\n2003 ‧ Romance ‧ 1 temporada');
                  setId('romance3');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'http://1.bp.blogspot.com/-vBy1e4zr_Tc/Vsy1oFiuLLI/AAAAAAAAAts/L6t5OSeFadM/s1600/10568787_f520.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Scent of Summer</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2003
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Spring Waltz');
                  setDescripcion('El vals de primavera es una serie de televisión surcoreana emitida durante 2006 y protagonizada por Seo Do Young, Han Hyo Joo, Lee So Yeon y Daniel Henney.\n\n2006 ‧ Drama ‧ 1 temporada');
                  setId('romance4');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'http://img.kbs.co.kr/drama/drama_photo/051/009/051009038_L.JPG'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Spring Waltz</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2006
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>
          
            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Crash Landing on You');
                  setDescripcion('Una heredera surcoreana sufre un accidente en parapente en Corea del Norte y un oficial del ejército decide ayudarla a esconderse.\n\n2019 ‧ Romance ‧ 1 temporada');
                  setId('romance5');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'https://elcomercio.pe/resizer/Envo6Cv5Fqf3EeF6HN3XODBAVLE=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NB4MWXV7O5ANTHUNPY5WFOPGIQ.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Crash Landing on You</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2019
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            <View>
              <TouchableHighlight
                onPress={() => {
                  setHabitacion(!habitacion);
                  setTitulo('Second Time Twenty Years Old');
                  setDescripcion('Ha No-Ra, de 19 años, queda embarazada y decide aparcar sus sueños para dedicarse a su familia. Veinte años después, a punto de divorciarse y presintiendo que padece cáncer, decide apuntarse a la universidad sin decírselo a sus familiares.\n\n2015 ‧ Romance ‧ 1 temporada');
                  setId('romance6');
                }}>
                <View style={styles.inte}>
                <Image
                    style={styles.pic}
                    source={{uri: 'https://www.ecured.cu/images/e/eb/Capricho_del_Destino.jpg'}}
                  />
                  <View style={styles.contenedortext}>
                    <Text style={styles.inttext}>Second Time Twenty Years Old</Text>
                    <Text style={styles.listita}>
                      {'\n'}1 temporada{'\n'}Año: 2015
                    </Text>
                  </View>
                  <View style={styles.vertical}></View>
                </View>
              </TouchableHighlight>
            </View>

            
          </ScrollView>
        </View>
        
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 220,
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

  inte: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#E94C45',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  pic: {
    flex: 0.75,
    height: 100,
    width: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contenedortext: {
    flex: 0.75,
  },
  inttext: {
    marginLeft: 15,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 19,
  },
  listita: {
    marginLeft: 15,
    color: 'white',
    fontWeight: Platform.OS === 'ios' ? '400' : '100',
    marginTop: Platform.OS === 'ios' ? 2 : -3,
    fontSize: Platform.OS === 'ios' ? 14 : 13,
  },
  vertical: {
    backgroundColor: '#181D33',
    width: 12,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default Series;
