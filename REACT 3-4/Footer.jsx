import React from 'react';

class Footer extends React.Component {
  render() {
    const estilo = {
      fontSize: '12px',
      color: 'gray',
    };

    return (
      <footer style={estilo}>
        <p>IOS - Instituto Da Oportunidade Social</p>
        <p>&copy; 2023 Matheus Chaves</p>
      </footer>
    );
  }
}

export default Footer;