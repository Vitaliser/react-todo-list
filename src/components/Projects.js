/*
 * @Copyright ParanoiA
 * @Created: 10/18/20, 3:33 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

import React, {useState} from "react";
import {useProjectsValue, useSelectedProjectValue} from "../context";
import {IndividualProject} from "./IndividualProject";

export const Projects = ({activeValue = null}) => {
	const [active, setActive] = useState(activeValue);
	const {setSelectedProject} = useSelectedProjectValue();
	const {projects} = useProjectsValue();
	return (
		projects &&
		projects.map(project => (
			<li
				key={project.projectId}
				data-doc-id={project.docId}
				data-testid="project-action"
				className={
					active === project.projectId
						? 'active sidebar__project'
						: 'sidebar__project'
				}
				onKeyDown={() => {
					setActive(project.projectId);
					setSelectedProject(project.projectId);
				}}
				onClick={() => {
					setActive(project.projectId);
					setSelectedProject(project.projectId);
				}}
			>
				<IndividualProject project={project}/>
			</li>
		))
	);
}
