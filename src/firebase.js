/*
 * @Copyright ParanoiA
 * @Created: 10/10/20, 10:52 AM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */
import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = firebase.initialize({
	apiKey: "AIzaSyBN7y9gxhv54OPjOnI8FOSscB3oaRkG6nE",
	authDomain: "react-todo-list-7ce85.firebaseapp.com",
	databaseURL: "https://react-todo-list-7ce85.firebaseio.com",
	projectId: "react-todo-list-7ce85",
	storageBucket: "react-todo-list-7ce85.appspot.com",
	messagingSenderId: "1047769383369",
	appId: "1:1047769383369:web:e161d78b1bc722b06da818"
})

export {firebaseConfig as firebase};