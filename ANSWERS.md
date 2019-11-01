- [ ] Why would you use class component over function components (removing hooks from the question)?
***In class components props are automatically available to children without having to add 'props'. Without hooks, function components are stateless, so you can't give them a state.***

- [ ] Name three lifecycle methods and their purposes.
***Constructor: Happens during the mounting phase. It's the birth of the component.
Render: it is used during the mounting and unmounting phases to display compponents in DOM. When changes happen to the components to be displayed in the DOM it is done throught render.
ComponentdidMount: it is used at the end of the mounting phase, when a component is mounted and ready to make API calls. It also allows you to use setState.

- [ ] What is the purpose of a custom hook?
***To be able to reuse hooks without duplicating code.***

- [ ] Why is it important to test our apps?
***To prevent bugs to break the code.***
