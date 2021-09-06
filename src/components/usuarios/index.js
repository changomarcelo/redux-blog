import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {

	async componentDidMount() {
		this.props.traerTodos();
	}

	render() {
        console.log(this.props);
		return (
			<ul>
				{this.props.usuarios.map((usuario) => (
                    <li>{usuario.name} ({usuario.email})</li>
                ))}
			</ul>
		);
	}
};

const mapStateToProps = (reducersRecibidos) => {
	return reducersRecibidos.usuariosReducer;
};

export default connect(mapStateToProps, usuariosActions)(Usuarios);