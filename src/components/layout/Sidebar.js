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

import React from "react";
import {FaCalendarAlt, FaChevronDown, FaInbox, FaRegCalendar} from "react-icons/all";


export const Sidebar = () => {
	return (
			<div className="sidebar" data-testid="sidebar">
				<ul className="sidebar__generic">
					<li>
						<span><FaInbox/></span>
						<span>Inbox</span>
					</li>
					<li>
						<span><FaRegCalendar/></span>
						<span>Today</span>
					</li>
					<li>
						<span><FaCalendarAlt/></span>
						<span>Next 7 days</span>
					</li>
				</ul>
				<div className="sidebar__middle">
					<span><FaChevronDown/></span>
					<h2>Projects</h2>
				</div>
				<ul className="sidebar__projects">
					Projects will be here!
				</ul>
				Add Project Component Here!!
			</div>
	);
}
