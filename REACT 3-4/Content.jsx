import React from 'react';

class Conteudo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      like: 0,
      dislike: 0,
    };
  }

  handleRead = () => {
    this.setState({ read: !this.state.read });
  };

  handleLike = () => {
    this.setState({ like: this.state.like + 1 });
  };

  handleDislike = () => {
    this.setState({ dislike: this.state.dislike + 1 });
  };

  render() {
    return (
      <article>
        <h2>AValie</h2>
        <p>Basta clicar</p>
        
        <button onClick={this.handleRead}>Lido</button>
        <button onClick={this.handleLike}>Gostei</button>
        <button onClick={this.handleDislike}>Não Gostei</button>

        <p>Read: {this.state.read.toString()}</p>
        <p>Likes: {this.state.like}</p>
        <p>Dislikes: {this.state.dislike}</p>
      </article>
    );
  }
}

export default Conteudo;