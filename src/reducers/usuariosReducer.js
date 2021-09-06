const INITIAL_STATE = {
	usuarios: []
};

export default function UsuariosReducer(state = INITIAL_STATE, action){
	switch (action.type) {
		case 'traer_usuarios':
			return { ...state, usuarios: action.payload };

		default: return state;
	};
};