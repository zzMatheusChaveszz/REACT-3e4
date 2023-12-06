import React from 'react';

import PropTypes from 'prop-types';

class BoasVindas extends React.Component {
  static defaultProps = {
    nome: 'Visitante',
  };

  static propTypes = {
    nome: PropTypes.string.isRequired,
  };

  render() {
    const { nome } = this.props;

    return (
      <section style={{ textAlign: 'center' }}>
        <h1>Bem-vindo, {nome}!</h1>
        <p>Esta é a minha página de boas-vindas</p>
      </section>
    );
  }
}

export default BoasVindas;