import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
  }

  getStat = val => {
    /* I find it a little more readable to put the var declaration and initialization
       on the same line. It doesn't really matter, but when I see them separate like
       this, it makes me wonder if there's a reason and I start looking for one. */
    let statArray;
    statArray = this.props.pokemon.stats.filter(stat => stat.name === val);
    /* I got a statArray[0] === undefined error after I added a pokemon with bad
       data. It might be work checking for that case. */
    return statArray[0].value;
  };

  handleClick = () => {
    this.setState({
      display: !this.state.display
    });
  };



  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img
              alt="oh no!"
              src={
                this.state.display
                  ? this.props.pokemon.sprites.back
                  : this.props.pokemon.sprites.front
              }
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getStat('hp')}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
