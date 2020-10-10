/*
 * @Copyright ParanoiA
 * @Created: 10/10/20, 11:51 AM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

import {useEffect, useState} from 'react';
import {firebase} from "../firebase";
import moment from "moment";
import {collatedTasksExist} from "../helpers";

export const useTasks = selectedProject => {
	const [tasks, setTasks] = useState([]);
	const [archivedTasks, setArchivedTasks] = useState([]);
	// do some work
	
	useEffect(() => {
		let unsubscribe = firebase
			.firestore()
			.collection('tasks')
			.where('userId', '==', 'KwkGXWEwRiER0eJhkj0f')
		
		unsubscribe =
			selectedProject && !collatedTasksExist(selectedProject)
				? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
				: selectedProject === 'TODAY'
				? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYYY')))
				: selectedProject === 'INBOX' || selectedProject === 0
					? (unsubscribe = unsubscribe.where('date', '=='))
					: unsubscribe;
		
		unsubscribe = unsubscribe.onSnapshot(snapshot => {
			const newTasks = snapshot.docs.map(task =>
				({
					id: task.id,
					...task.data()
				}));
			
			setTasks(
				selectedProject === 'NEXT_7'
					? newTasks.filter(task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true)
					: newTasks.filter(task => task.archived !== true));
			
			setArchivedTasks(newTasks.filter(task => task => task.archived !== false));
		});
		return () => unsubscribe();
	}, [selectedProject]);
	
	return {tasks, archivedTasks};
};

export const useProjects = () => {
	const [projects, setProjects] = useState([]);
	
	useEffect(() => {
		firebase
			.firestore()
			.collection('projects')
			.where('userId', '==', 'KwkGXWEwRiER0eJhkj0f')
			.orderBy('projectId')
			.get()
			.then(snapshot => {
				const allProjects = snapshot.docs.map(project => ({
					...project.data(),
					docId: project.id
				}));
				if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
					setProjects(allProjects);
				}
			});
		
		return {projects, setProjects};
	} ,[projects])
}