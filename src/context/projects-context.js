/*
 * @Copyright ParanoiA
 * @Created: 10/11/20, 3:40 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

import React, {createContext, useContext} from "react";
import {useProjects} from "../hooks";

export const ProjectsContext = createContext();
export const ProjectsProvider = ({children}) => {
	const {projects, setProjects} = useProjects();
	
	return (
		<ProjectsContext.Provider value={{projects, setProjects}}>
			{children}
		</ProjectsContext.Provider>
	);
};

export const useProjectsValue = () => useContext(ProjectsContext);