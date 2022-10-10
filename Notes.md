# React js notes

### React componenets

-   react allows you to create reactive and reusable components consisting of html and js
-   react use **declerative approach**
    -   Define the desired target states and let react figure out actual js DOM instructions : With react we just create the states and wrtit under which condition which states is to use the react will do all under the hood
-   A components in react is just a special js function which return **jsx** code

### props

-   We can send data as an attributes to the components
-   That means we can set the custom properties of our components
-   we can also use the {} for assigning values to the attributes

### composition

-   This process of building the webpage with the smaller building blocks is called composition
-   Wrapper components are also the part of compositions which saves us form code duplications

# JSX

-   if there were no ejx syntax then the code might look like this
    `return React.createElement('div',{ -arguments of the elemnt - }, , ,, another elements inthis ) `

---

---

<h1 align="center"> React STATES and working with EVENTS </h1>

-   React execute the components which it encounter one by one but what if there is change in the the components properties
    so that there is a new concept called `States`
-   ie there is a need to reevaluate that component
-   regular expressison like `price = 250` does not re-evaluate the components
-   `useStates` function is used to define the values to the states
-   it is a kind of hooks
-   `hooks` must be called inside the component functions
-   every components has there seperate states though ther are created more thatn once -- every time a component is called a new sepereate state is created for it
-   `its on a per component instance basis`
-   React `Schedules` the state update so when your states are depend on previous or another states then by using the callback function in the `useState` method you can have the latest snapshot of the states

### Child to parent communication (buttom up )

-   We can create our own event props and we can expects function as a values

---

---

## <h1 align="center"> Rendering list and conditional Content </h1>

---

---

# abuse trik

-   you can use && as a abusive operator
-   ` {filteredExpenses.length === 0 && <p>No Expenses Found</p>}`
-   if the first condition is true then send statement will be returned hence rendered

-   sudo selector `&` denotes the parant component in the styled

-   -   you can also send the Props to the styled components
        -   just take a example of FormCompoent (changign the error animaztion )

### style modules

-   after importing the style modules the do change the css classes name to the unique

### React fragements And portals

## Portals

-   React portals provide a first-class way to render and allow child components, which are typically present outside the DOM, to live within a Document Object Model (DOM) node.
-   This React portal component exists outside the DOM hierarchy of the parent component.
-   How to use the portals
    -   portals need two things
        -   place to port the component
        -   and let the component know that it should have the portal to that place

---

---

### <h1 align="center"> Side effects, reducers, context API</h1>

## Side effects

-   side effects are the everything which happens expect the ui
    -   like Store data in browser storage
    -   send Http requests to backend servers
    -   set and manage timers
-   These task must happen outside of the normal component evaluation and render cycle - especially sice they might blick delay rendering

# useEffect()

```useEffect(() => {
        const storedUserInformationLoggedIn = localStorage.getItem("isLoggedIn");
        if (storedUserInformationLoggedIn === "1") {
            setIsLoggedIn(true);
        }
    }, []);
```

-   if we write this function without use state then we may enterd in infinite loop because
-   when this code runs for the first time then you find 1 in local storage (if logged in ) then
-   as in this function `state setting` function is called then it will reevaluate the component and again this code will be executed
-   that's why we wrapped this in the useStateFunction

-   rules of `useEffect`
-   use effect will run only when the given dpendencies are changed
-   so for first time it will definitely run as dpendencies are changed and \
-   when the component reEvaluate again then it will check the dependencies are changed or not then only it wil execute

## Clean up function

-   just return the function form the callback function of `useEffect`
-   It runs before the useEffect function runs except for the first time
-   Also it will run whenever the component you are specifing the effect in.. unmounts form the dom ie whenvever the component is reused

## Debouncing

## useReducer

-   It is similar to the `useState` but For most complex state
    -   if you got multiple states, multiple ways of changin it , or dependencies to other state
-   replacer if you want need more powerful state mangement
-   suppose your one state is output is depend on the other state then there might be the problem if that state is not updated to it latest state you might be using the previous snapshot of that state

### useReducer

`const [state,dispatchFn] = useReducer (reducerFn,initialState,initFn);`
**state** - The state snapshot used in the component rerender / re-evaluation cycle
**dispatchFn** - THe function tat can be used to dispatch a new action (ie trigger an update of the state)
**reducerFn** - `(precState, action)=> newState` - The function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the lates state snapshot and should return the new updated state

**initialState** - The initial state
**initFn** - A function to set the initial state programmatically

### When to use the use `reducer` and `useState`

| useState                                                             | useReducer                                               |
| -------------------------------------------------------------------- | -------------------------------------------------------- |
| The main state management tool                                       | should be considered if you have related piece of state  |
| greate for independent piece of state                                | can be helpful if you have more complex number of states |
| Greate if state updates are easy and limited to few kinds of updates |                                                          |
| if you dont have the object as state                                 |                                                          |
|                                                                      |                                                          |

### Context api

-   to priovide the access of the context we wrap the components around it

## Rules To Use React hooks

## image.png

# IMP

-   Custom components cannot be use as a wrapper to the other type of contenet but it work for the build in html components
-   `event.target.value` - this values are always in the string states
-   lifting the states up
-   `attacked templet literal`
-   value attribute is a by default attribute of the component of th element
- apply the use state where you render your component
- You should have the store for to manage the logic of the component cause...
  - Suppose you have large components in the app.js then it becomes too much to handle that data on app.js so by having the 
  store wich manage your components logic is better
