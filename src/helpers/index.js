/*
 * @Copyright ParanoiA
 * @Created: 10/10/20, 12:14 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */
import {collatedTasks} from "../constants";

export const collatedTasksExist = selectedProject =>
	collatedTasks.find(task => task.key === selectedProject);
	