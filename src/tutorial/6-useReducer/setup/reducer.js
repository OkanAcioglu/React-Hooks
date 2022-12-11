export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please enter value',
    }
  }
  //? ---5---
  //! we wanna call it after 3 seconds for doing it we will pass the closeModal function to the Modal component as a prop.
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  //? ---7---
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    )
    return { ...state, people: newPeople }
  }

  //! For the last state we can return a state but in practice throwing error if the action that we passed in does not match any of the types that we are checking for...
  throw new Error('No matching action type')
}
