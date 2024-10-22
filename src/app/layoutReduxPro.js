"use client"; // Marca este componente como un componente del cliente

import { Provider } from "react-redux";
import store from "./Componets/Adm/redux"

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}