const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {  
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload
        }
      ];
    default:
      return state;
  }
}