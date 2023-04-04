import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

// O contexto para a aplicação
export const DarkModeContext = createContext();

// Preferencia do usuário
// Tema pré definido pelo usuário
// O tema escolhido será definido automaticamente
// Irei iniciar com o tema claro

//const temaLocalStorage = localStorage.getItem
//("temaclaro");

// Elementos que serão exportados dos componentes
// O que está no "value" será exportado

// Hook consegue manipular algumas funcionalidades do Context




