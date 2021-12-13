import React, { useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const styles = StyleSheet.create(
  {
    principal: {
      textAlign: 'left',
      padding: 20,
      fontSize: 16,
      color: 'black',
    },
    negrita: {
      textAlign: 'left',
      padding: 20,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    bienvenido: {
      textAlign: 'center',
      padding: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    }
  }
)

function Dispositivos() {
  return (
    <ScrollView >
      <Text style={styles.bienvenido}> Bienvenido a la historia de los dispositivos </Text>

      <Image source={{uri: 'https://ae01.alicdn.com/kf/H2b8fe246314b47ec98f3ce8bb874b97db/BlackBerry-Bold-Touch-tel-fono-inteligente-9900-m-vil-renovado-desbloqueado-5MP-3G-WIFI-Bluetooth.jpg_Q90.jpg_.webp'}}
       style={{width: 400, height: 300}} />
      <Text style={styles.principal}> BlackBerry es una marca de teléfonos inteligentes desarrollada por la compañía canadiense BlackBerry,
      3​ que integra el servicio de correo electrónico móvil desde 1999; aunque incluye las aplicaciones típicas de un teléfono inteligente: libreta de direcciones, agenda, calendario, 
      lista de tareas, bloc de notas, navegador, aplicaciones de redes sociales, así como cámara de fotografía integrada en todos los dispositivos.
       BlackBerry se hizo famosa por su teclado QWERTY incorporado, y por su capacidad para enviar y 
       recibir correos electrónicos de Internet accediendo a las redes de las compañías de telefonía celular que brindan este servicio.
      </Text>

      <Image source={{uri: 'https://cdn.andro4all.com/files/2021/01/moviles-recordados-motorola.jpg'}}
       style={{width: 300, height: 300}} />
      <Text style={styles.principal}> Motorola Mobility LLC, comercializada como Motorola, es una empresa estadounidense de telecomunicaciones y electrónica de consumo,
       y filial del conglomerado tecnológico chino Lenovo. 
      La compañía fabrica principalmente teléfonos inteligentes y otros dispositivos móviles que ejecutan el sistema operativo Android.
      En 2011, Motorola Inc. fue dividida por dos firmas independientes. Motorola Mobility nació como spin-off con el que fuera el brazo de Motorola en materia de teléfonos, 
      mientras que Motorola Solutions se quedó con la parte de equipos como servidores y redes de telecomunicación después del renombramiento del nombre original.
       Por eso, el sucesor legal directo de Motorola es Motorola Solutions. En agosto de 2011, fue adquirida por Google por una cifra aproximada de 12.500 millones de dólares. 
       Debido a las pérdidas económicas, el 29 de enero de 2014 vendió a la compañía china Lenovo por 2.910 millones de dólares
      </Text>

      <Image source={{uri: 'https://i01.appmifile.com/webfile/globalimg/spainOria/K11R-white.png'}}
       style={{width: 300, height: 300}} />
      <Text style={styles.principal}> Xiaomi es una empresa china dedicada a crear equipos electrónicos, tanto telefónicos como artículos para el hogar. 
      Xiaomi se ha abierto paso al mercado mundial abriendo varias tiendas físicas y en determinados países de Asia, Europa e Iberoamérica, además de su sitio web y distribuidores oficiales.
       Desde el lanzamiento de su primer teléfono inteligente en agosto de 2011, Xiaomi ha ganado cuota de mercado en China y ha ampliado su línea productos a otros dispositivos electrónicos.
      </Text>

      <Image source={{uri: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/36836_614ca137-616f-457d-b12f-739ed8c2bafa.jpg'}}
       style={{width: 300, height: 300}} />
      <Text style={styles.principal}> El iPhone es un teléfono móvil con herramientas multimedia, desarrollado por la empresa estadounidense Apple Inc. 
      Este tipo de dispositivo es conocido como smarthphone o teléfono inteligente, ya que cuenta con conexión a Internet, pantalla táctil, cámara de fotos, 
      la capacidad de reproducir música y películas, entre otras características.
      El iPhone, que cuenta con conectividad inalámbrica, salió a la venta el 29 de junio de 2007 en los Estados Unidos y, al poco tiempo, 
      la revista Time lo eligió como “Invento del Año”. El 11 de julio de 2008 fue lanzada una versión actualizada del teléfono, 
      conocida como iPhone 3G, que utiliza redes de tercera generación (3G) para la transmisión de datos.
      </Text>

    </ScrollView >
  );
}

function ListadoUsuarios({ navigation }) {

  const [edad, setEdad] = useState();

  return (
    <SafeAreaView>
      <Text style={styles.principal}>Buscar usuarios mayores de:</Text>
      <Text style={styles.negrita}> Edad </Text>
      <TextInput onChangeText={edad => setEdad(edad)} />

      <Button title='Buscar' style={styles.principal} onPress={() => navigation.navigate('Detalles', { edad: edad })} />

    </SafeAreaView>
  );
}

function ListadoStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoUsuarios}
        options={{
          title: 'Búsqueda',
          headerStyle: {
            backgroundColor: '#9E0000',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetallesUsuarios}
        options={{
          title: 'Usuarios',
          headerStyle: {
            backgroundColor: '#9E0000',
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

function DetallesUsuarios({ route }) {

  const usuarios = [
    { id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino' },
    { id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino' },
    { id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino' },
    { id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino' },
    { id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino' },
    { id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino' },
    { id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino' },
    { id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino' },
    { id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino' },
    { id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino' },
    { id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino' },
    { id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino' },
    { id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino' },
  ];
  const { edad } = route.params;

  function renderItem(edad, item) {

    if (edad < item.edad)
      return <Text style={styles.principal}> {item.nombre}, Edad: {item.edad}, Género: {item.género} </Text>
  }

  return (
    <ScrollView>
      <Text style={styles.negrita}>Usuarios que superan la edad</Text>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (<View>{renderItem(edad, item)}</View>)}
      />
    </ScrollView>
  );
}

function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Listado') {
              iconName = focused ? 'md-body' : 'md-body-outline';
                        } else if (route.name === 'Historia') {
              iconName = focused ? 'md-library' : 'md-library-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        })}
      >

        <Tab.Screen options={{ headerShown: false }} name="Historia" component={Dispositivos}
          options={{
            title: 'Historia',
            headerStyle: {
              backgroundColor: '#9E0000',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'white'
            
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Listado" component={ListadoStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default App;