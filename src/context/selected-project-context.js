/*
 * @Copyright ParanoiA
 * @Created: 10/18/20, 2:40 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *     /\_/\
 *   =( °w° )=       Meow
 *     )   (  //
 *    (__ __)//
 */

import React, {createContext, useContext, useState} from "react";

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({children}) => {
	const [selectedProject, setSelectedProject] = useState('INBOX');
	
	return (
		<SelectedProjectContext.Provider value={{selectedProject, setSelectedProject}}>
			{children}
		</SelectedProjectContext.Provider>
	);
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
