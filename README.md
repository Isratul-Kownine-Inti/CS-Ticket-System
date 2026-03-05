**Question/Answer**

## What is JSX, and why is it used?

Ans: JSX stands for Javascript XML , it is basically a react's syntax. It allows to write  HTML like code inside Javascript,      It is used to create UI components easily and it makes code readable.


## What is the difference between State and Props?

Ans: Props are immutable , props are read-only data that can be passed from the parent component to child component. On the other hand, State is dynamic. It is basically data inside the component and  can be changed by the component itself. When a state change , the UI re-render.


## What is the useState hook, and how does it work?

Ans : I React , the useState hook is used to add state in functional components. It also manage state. In useState there is a state variable and a function to update the state. When a state value change , it triggers the component and UI re-renders.  


## How can you share state between components in React?

Ans :  In react, we can share state between components, to do it We have to declare the state to the most common parent component of the components, Then we can pass the state as props from common parent to other components by props drilling. It is also called lifting state up.

## How is event handling done in React?

Ans :  In react , we do event handling by declaring a function  and then pass it through event like onClick as handler.