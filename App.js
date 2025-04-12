import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// ADMIN
import CriarEditarServico from './src/pages/Admin/CriarEditarServico/index'
import Servicos from './src/pages/Admin/Servicos/index'

// Cliente
import CatalogoServicos from './src/pages/Cliente/CatalogoServicos/index'
import DetalhesServico from './src/pages/Cliente/DetalhesServico/index'

//Ambos
import Perfil from './src/pages/Perfil/index'
import Login from './src/pages/Login/index'
import Cadastro from './src/pages/Cadastro/index'
import NavBar from './src/Components/NavBar/index'

export default function App() {
  return (
    <ScrollView>

     <Perfil/>

     <NavBar />

    </ScrollView>
  );
}

      //<Login />
      // <Cadastro />
      // <Perfil />
      // <NavBar />


    // Admin
      // <CriarEditarServico />
      // <NavBar />

      // <Servicos />
      // <NavBar />
      
    //Cliente
      // <CatalogoServicos />
      // <NavBar />

      // <DetalhesServico />
      // <NavBar />


