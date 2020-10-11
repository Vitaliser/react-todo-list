/*
 * @Copyright ParanoiA
 * @Created: 10/7/20, 11:18 AM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

import React from "react";
import {FaPizzaSlice} from "react-icons/fa";

export const Header = () => {
	return (
			// Icons made by <a href="https://www.flaticon.com/authors/dighital" title="Dighital">Dighital</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
			<header className="header" data-testid="header">
				<nav>
					<div className="logo">
						<img src="images/logo.svg" alt="Todolist"/>
					</div>
					<div className="settings">
						<ul>
							<li data-testid="quick-add-task-action" className="settings__add">+</li>
							<li data-testid="dark-mode-action" className="settings__dark-mode">
								<FaPizzaSlice/>
							</li>
						</ul>
					</div>
				</nav>
			</header>
	)
};

