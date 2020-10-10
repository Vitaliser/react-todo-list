/*
 * @Copyright ParanoiA
 * @Created: 10/7/20, 1:41 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

import React from "react";
import {Sidebar} from "./Sidebar";
import {Tasks} from "./Tasks";

export const Content = () => {
	return (
			<section>
				<Sidebar/>
				<Tasks/>
			</section>
	)
}
