import { useState } from "react";
import SearchBar from "./SearchBar";

function withSearchBar(Component, data, keys) {
  // La función que devuelve el HOC
  return function WrappedComponent() {
    const [query, setQuery] = useState("");

    // Función de búsqueda ajustada para trabajar con data.items
    const search = (dataSearch) => {
      if (!dataSearch || !Array.isArray(dataSearch.items)) {
        return []; // Retorna un array vacío si dataSearch.items no está definido o no es un array
      }

      return dataSearch.items.filter((item) =>
        keys.some((key) =>
          item[key]?.toLowerCase().includes(query.toLowerCase())
        )
      );
    };

    return (
      <>
        {/* Componente de la barra de búsqueda */}
        <SearchBar setQuery={setQuery} />
        {/* El componente que recibe la lista filtrada */}
        <Component dataList={search(data)} />
      </>
    );
  };
}

export default withSearchBar;




