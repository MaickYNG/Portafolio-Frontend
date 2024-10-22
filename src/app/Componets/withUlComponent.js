import * as allIcons from 'react-icons/fa';


function withUlComponent(Component, datalist) {
    // Retornar una función anónima o un componente funcional
    return function WrappedComponent() {
      return (
        <>
          <Component list={datalist} />
        </>
      );
    };
  }
  
  export default withUlComponent;