# COMPONENT ARCHITECTURE CHALLENGE

# Requirements

Before you can run this project, you will need to have the following installed on the system the application is running on:

- Node.js ( version 16 or higher )
- npm ( version 8 or higher)

### Running the application locally

```shell
git clone https://github.com/nyankson-benjamin/architecture-challange.git
```

2 Navigate into the projects's root directory

```shell
cd architecture-challange
```

3 Install the project's dependencies

```shell
npm install
```

4 Start the server

```shell
npm start
```

## Project Description

I used context api together with useReducer hook to manage the state of the application.

### steps:

1. The initial state is set to an empty string (""), and a reducer function 'componentReducer' is used to update the state based on dispatched actions.

2. I then used useEffect hook to save the current state to the localStorage whenever the component value changes so that the last viewed component is remembered even after refreshing the page.

3. Inside the App.js component, i used the useContext hook to access the component state value from the 'ComponentContext', based on the value of the component, i used a switch statement to assign the corresponding page component to a 'currentComponent' variable. The home page is the default page.
