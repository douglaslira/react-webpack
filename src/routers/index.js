import Login from "../modules/login/Login";
import LoginComponent from "../modules/login/Login";
import HomeComponent from "../modules/home/Home";
import TodoComponent from "../modules/todo/Todo";

const indexRoutes = [
	{ path: "/login", name: "Login", component: LoginComponent },
	{ path: "/", name: "Home", restrict: true, component: HomeComponent }
];

export default indexRoutes;
