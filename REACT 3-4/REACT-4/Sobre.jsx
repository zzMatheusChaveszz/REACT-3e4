import React from 'react';

class Sobre extends React.Component {
  render() {
    const estilo = {
      color: 'green',
      fontSize: '18px',
      
    };

    return (
      <article style={estilo}>
        <h2>Sobre o React</h2>
        <p>
          O React é uma biblioteca JavaScript para a construção de interfaces de usuário,
          permitindo a criação de componentes reutilizáveis para o desenvolvimento de
          aplicativos web modernos.
        </p>
      </article>
    );
  }
}

export default Sobre;