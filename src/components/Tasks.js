/*
 * @Copyright ParanoiA
 * @Created: 10/18/20, 3:02 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

import React from "react";
import {Checkbox} from "./Checkbox";
import {useTasks} from "../hooks";

export const Tasks = () => {
	const {tasks} =useTasks("1");
	let projectName = '';
	
	return (
		<div className="tasks" data-testid="tasks">
			<h2 data-testid="project-name">{projectName}</h2>
			
			<ul className="task__list">
				{tasks.map(task => (
					<li key={`${task.id}`}>
						<Checkbox id={task.id}/>
						<span>{task.task}</span>
					</li>
				))}
			</ul>
		</div>
	)
}