//Assessment #3 react and its fundamentals - 15/09/2023

//1. what is react and its role for single page application
//  An open source JavaScript library that is used for building user interfaces, particularly for 
//single-page applications. Some of its roles for SPAs are component-based architecture, virtual dom,
//routing, API integration, State Management,...

//2. how react is faster compared to other javascript frameworks
//  Instead of directly manipulate the actual DOM, React uses Virtual represatation of DOM. If any changes
//are made in a component, React first updates to virtual DOM and then calculates the minimal set of changes
//that needed to be updated to real DOM. Therefore, React only updates the minimal changes to real DOM.

//3. what is virtual dom
// A lightweight representation of a UI that is kept in memory and synced with the real DOM.

//4. how react renders dom in conservative manner
//  React first create a virtual DOM, then compare the changes in the newly created DOM to the previous.
//It then calculates the minimal set of changes required to update to match the new created DOM. Finally,
//react would apply the changes to the real DOM using various optimization techniques.


//5. create a class component named - Success and show some quotes on success in its
//6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//7. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//8. create UserSignIn component using uncontrolled way, should be class component
//9. create Product component to accept ProductName and ProductPrice
//10. pass a random value from SuccessStory component back to Success