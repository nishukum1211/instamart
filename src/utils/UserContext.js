import { createContext } from "react";

const UserContext = createContext({
	user : {
	name: "Nishu kumari",
	email: "nishu@gmail.com"
	},
});

//use for debugging the code 
UserContext.displayName = "UserContext";

export default UserContext;