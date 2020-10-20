/*
 * @Copyright ParanoiA
 * @Created: 10/7/20, 1:43 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

import React, {useState} from "react";
import {FaCalendarAlt, FaChevronDown, FaInbox, FaRegCalendar} from "react-icons/all";
import {useSelectedProjectValue} from "../../context";
import {Projects} from "../Projects";
import {AddProject} from "../Addproject";

export const Sidebar = () => {
	const {setSelectedProject} = useSelectedProjectValue();
	const [active, setActive] = useState('inbox');
	const [showProjects, setShowProjects] = useState(true);

	return (
		<div className="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				<li className="inbox" data-testid="inbox">
					<span><FaInbox/></span>
					<span>Inbox</span>
				</li>
				<li className="today" data-testid="today">
					<span><FaRegCalendar/></span>
					<span>Today</span>
				</li>
				<li className="next_7" data-testid="next_7">
					<span><FaCalendarAlt/></span>
					<span>Next 7 days</span>
				</li>
			</ul>
			<div className="sidebar__middle">
				<span><FaChevronDown/></span>
				<h2>Projects</h2>
			</div>
			<ul className="sidebar__projects">
				{showProjects && <Projects/>}
			</ul>
			{showProjects && <AddProject/>}
		</div>
	);
}
