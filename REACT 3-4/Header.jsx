import React from 'react';

class Header extends React.Component {
  render() {
    const estilo = {
      color: 'blue',
      fontSize: '24px',
      // Adicione outros estilos conforme necessário
    };

    return (
      <section style={estilo}>
        <h1>Usando React</h1>
        <p>Ola mundo</p>
      </section>
    );
  }
}

export default Header;