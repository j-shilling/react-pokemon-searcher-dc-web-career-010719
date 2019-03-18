import React from 'react';
import { Form } from 'semantic-ui-react';

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    };
  }

  /* IDK for sure, but it might be worth thinking about putting the fetch
     call here. Because you're using pessimistic rendering, App's state is
     not actually effected until the last .then() clause. I might have though
     of the fetch call as part of the 'submitting' action and done it here.
     That way, the probs.addNewPokemon callback would only be responsible for
     mutating App's state */
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewPokemon(this.state);
    this.setState({
      name: '',
      hp: '',
      front: '',
      back: ''
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
