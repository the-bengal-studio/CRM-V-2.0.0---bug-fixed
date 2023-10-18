import React, { useState } from "react";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
import { Link } from 'react-router-dom';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import ALLImages from "../../../common/imagesData";
import { Assigned, NewTask, SortBy, StatusTask } from "../../../common/select2data";
import { To_do_List_Data } from "../../../common/commondata";

const Todolist = () => {
	const [startDate, setStartDate] = useState(new Date());

	const [allData, setAllData] = useState(To_do_List_Data)

	let allElement2 = [];
	let myfunction = (InputData) => {
		let allElement
		for (allElement of To_do_List_Data) {
			if (allElement.title[0] == " ") {
				allElement.title = allElement.title.trim()
			}
			if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}
		}
		setAllData(allElement2);
	};

	function handleRemove(id) {
		const newList = allData.filter((idx) => idx.id !== id);
		setAllData(newList);
	  }


	  const [isChecked, setIsChecked] = useState(true);

	  const handleCheckAll = () => {
		const mailListElements = document.querySelectorAll('.mail-list');
		const mailCheckboxInputs = document.querySelectorAll('.mail-checkbox input');
	
		if (isChecked) {
		  mailListElements.forEach((element) => {
			element.classList.add('selected');
		  });
	
		  mailCheckboxInputs.forEach((input) => {
			input.checked = true;
		  });
		} else {
		  mailListElements.forEach((element) => {
			element.classList.remove('selected');
		  });
	
		  mailCheckboxInputs.forEach((input) => {
			input.checked = false;
		  });
		}
	
		setIsChecked(!isChecked);
	  };
  
	return (
		<div>
			<PageHeader currentpage="Todo List" activepage="Pages" mainpage="Todo List" />
			<div className= "grid grid-cols-12 gap-6">
				<div className= "col-span-12 xl:col-span-3">
					<div className= "box">
						<div className= "box-header">

							<Link to="#" className= "hs-dropdown-toggle py-2 px-3 ti-btn ti-btn-primary w-full" data-hs-overlay="#todo-compose"><i className= "ri ri-edit-line"></i> Add New Todo Task</Link>


								<div id="todo-compose" className="hs-overlay hidden ti-modal">
									<div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
										<div className="ti-modal-content">
											<div className="ti-modal-header">
												<h3 className="ti-modal-title"> New Task </h3>
												<button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#todo-compose">
													<span className="sr-only">Close</span>
													<i className="ri-close-line"></i>
												</button>
											</div>
											<div className="ti-modal-body">
												<div className="space-y-3">
													<div className="">
														<label htmlFor="input-label" className="ti-form-label">Task Title</label>
														<input type="text" id="input-label" className="ti-form-input" placeholder="Task title" />
													</div>
													<div>
														<label className="ti-form-label">Assigned To</label>
														<Select classNamePrefix='react-select' options={NewTask} menuPlacement='auto' placeholder='Open this select menu' />
														
													</div>
													<div>
														<label htmlFor="input-label" className="ti-form-label">Assigned Date</label>
														<div className="flex rounded-sm shadow-sm">
															<div
																className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
																<span className="text-sm text-gray-500 dark:text-white/70"><i className="ri ri-calendar-line"></i></span>
															</div>
															<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
														</div>
													</div>
													<div>
														<label htmlFor="input-label" className="ti-form-label">Due Date</label>
														<div className="flex rounded-sm shadow-sm">
															<div
																className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
																<span className="text-sm text-gray-500 dark:text-white/70"><i className="ri ri-calendar-line"></i></span>
															</div>

															<DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10 flatpickr-input" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />

														</div>
													</div>
													<div>
														<label className="ti-form-label">Assigned To</label>
														<Select classNamePrefix='react-select' options={Assigned} menuPlacement='top' placeholder='Open this select menu' />
													</div>
												</div>
											</div>
											<div className="ti-modal-footer">
												<button type="button"
													className="hs-dropdown-toggle ti-btn ti-border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:ring-offset-white focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
													data-hs-overlay="#task-compose">
													Close
												</button>
												<Link className="ti-btn ti-btn-primary" to="#">
													Create
												</Link>
											</div>
										</div>
									</div>
								</div>
						</div>
						<div className= "box-body">
							<ul>
								<li>
									<Link to="#" className= "p-2 mb-1 flex items-center align-middle justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm bg-gray-100 font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-mail-line"></i>
											<span className= "">Today Tasks</span>
										</div>
										<div>
											<span className= "">10</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-inbox-archive-line"></i>
											<span className= "">Upcoming Tasks</span>
										</div>
										<div>
											<span className= "">20</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-star-line"></i>
											<span className= "">Starred</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-price-tag-3-line"></i>
											<span className= "">Important</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "p-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal hover:bg-gray-200 focus:bg-gary-800 dark:bg-bgdark dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<i className= "ri ri-delete-bin-line"></i>
											<span className= "">Trash</span>
										</div>
										<div>
											<span className= "">25</span>
										</div>
									</Link>
								</li>
							</ul>
							<h3 className= "text-gray-500 dark:text-white/70 my-3 font-semibold">Priority</h3>
							<ul>
								<li>
									<Link to="#" className= "py-1 px-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-success rounded-full my-auto"></span>
											<span className= "">Low</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "py-1 px-2 mb-1 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-warning rounded-full my-auto"></span>
											<span className= "">Medium</span>
										</div>
									</Link>
								</li>
								<li>
									<Link to="#" className= "py-1 px-2 flex justify-between text-gray-500 dark:text-white/70 space-x-2 rtl:space-x-reverse rounded-sm font-normal dark:hover:bg-black/20 mb-0">
										<div className= "flex space-x-3 rtl:space-x-reverse">
											<span className= "w-2.5 h-2.5 inline-block bg-danger rounded-full my-auto"></span>
											<span className= "">High</span>
										</div>
									</Link>
								</li>
							</ul>
						</div>
						<div className= "box-footer">
							<img src= {ALLImages('png113')} alt="todo-img"/>
						</div>
					</div>
				</div>
				<div className= "col-span-12 xl:col-span-9">
					<div className= "box">
						<div className= "box-body">
							<div className= "grid grid-cols-12 gap-6">
								<div className= "col-span-12 lg:col-span-4">
									<div className= "relative sm:max-w-xs max-w-[210px]">
										<label htmlFor="hs-table-search" className= "sr-only">Search</label>
										<div className= "absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center pointer-events-none ltr:pr-4 rtl:pl-4">
											<i className= "ti ti-search"></i>
										</div>
										<input type="text" name="hs-table-search" id="hs-table-search" className= "p-2 ltr:pr-10 rtl:pl-10 ti-form-input" onChange={(ele) => { myfunction(ele.target.value) }}
											placeholder="Search Task"/>
									</div>
								</div>
								<div className= "col-span-12 lg:col-span-8">
									<div className= "sm:flex space-y-2 sm:space-y-0 sm:space-x-3 space-x-0 justify-end task-right rtl:space-x-reverse">
									<Select classNamePrefix='react-select' className="task-choice totdolist" options={SortBy} menuPlacement='auto' placeholder='sort By' />

                                    <Select classNamePrefix='react-select' className="task-choice totdolist" options={StatusTask} menuPlacement='auto' placeholder='Status' />
										<div className= "hs-dropdown ti-dropdown">
											<Link aria-label="anchor" to="#"
												className="hs-dropdown-toggle ti-dropdown-toggle inline-flex !p-2 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border font-medium bg-white text-gray-500 shadow-sm align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-xs dark:bg-bgdark dark:border-white/10 dark:text-white/70 dark:focus:ring-offset-white/10">
												<i className= "ri ri-more-2-line text-lg leading-none"></i>
											</Link>
											<div className= "hs-dropdown-menu ti-dropdown-menu">
												<Link className= "ti-dropdown-item" to="#">Select All</Link>
												<Link className= "ti-dropdown-item" to="#">Mark All</Link>
												<Link className= "ti-dropdown-item" to="#">Delete All</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className= "box">
						<div className= "box-body">
							<div className= "table-bordered rounded-sm overflow-auto todo-table">
								<table className= "ti-custom-table ti-custom-table-head whitespace-nowrap">
									<thead className= "bg-gray-100 dark:bg-black/20">
										<tr>
											<th scope="col" className= "dark:text-white/70">
												<div className= "flex">
													<input type="checkbox" className= "border-gray-500 ti-form-checkbox mt-0.5" onClick={handleCheckAll}
														id="hs-default-checkbox"/>
													<label htmlFor="hs-default-checkbox" className= "text-sm text-gray-500 dark:text-white/70"></label>
												</div>
											</th>
											<th scope="col" className= "dark:text-white/70"></th>
											<th scope="col" className= "dark:text-white/70">Todo title</th>
											<th scope="col" className= "dark:text-white/70">Assigned Date</th>
											<th scope="col" className= "dark:text-white/70">Due Date</th>
											<th scope="col" className= "dark:text-white/70">Status</th>
											<th scope="col" className= "dark:text-white/70">Priority</th>
											<th scope="col" className= "dark:text-white/70 min-w-[160px]">Assigned To</th>
											<th scope="col" className= "!text-end dark:text-white/70">Action</th>
										</tr>
									</thead>
									<tbody className= "todo-drag">
										{allData.map((idx)=>(
										<tr className= "todo-box" key={Math.random()}>
											<td>
												<div className= "flex items-center h-5 justify-center todo-checkbox">
													<input id="hs-table-checkbox-11" type="checkbox" className= "border-gray-500 ti-form-checkbox"/>
													<label htmlFor="hs-table-checkbox-11" className= "sr-only">Checkbox</label>
												</div>
											</td>
											<td> <div className="cursor-move w-8 h-8 leading-none text-lg rounded-sm bg-gray-100 dark:bg-black/20 flex justify-center p-1.5 mx-auto"> ::</div> </td>
											<td> <p className= "text-sm font-semibold w-52 truncate">{idx.title}</p> </td>
											<td>{idx.assignDate}</td>
											<td>{idx.dueDate}</td>
											<td><span className= {idx.statusclass}>{idx.status}</span></td>
											<td><span className= {idx.badgeclass}>{idx.priority}</span></td>
											<td>{idx.assigners}</td>
											<td className= "text-end font-medium">
												<div className= "hs-tooltip ti-main-tooltip">
													<Link to="#" className="hs-tooltip-toggle w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-secondary">
														<i className= "ti ti-pencil"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700 hidden" role="tooltip" data-popper-placement="top"
															style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(953px, -281px)"}}> Edit
														</span>
													</Link>
												</div>
												<div className= "hs-tooltip ti-main-tooltip">
													<Link to="#" onClick={() => handleRemove(idx.id)}
														className="todo-remove hs-tooltip-toggle w-8 h-8 ti-btn rounded-full p-0 transition-none focus:outline-none ti-btn-soft-danger">
														<i className= "ti ti-trash"></i>
														<span className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 bg-gray-900 text-xs font-medium text-white shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top"
															style={{position: "fixed", inset: "auto auto 0px 0px", margin: "0px", transform: "translate(985px, -281px)"}}> Delete
														</span>
													</Link>
												</div>
											</td>
										</tr>
										))}
										
									</tbody>
								</table>
							</div>
							<nav className= "flex items-center space-x-2 rtl:space-x-reverse justify-end">
								<Link className= "text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-sm" to="#">
									<span aria-hidden="true">«</span>
									<span className= "sr-only">Previous</span>
								</Link>
								<Link className= "w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full" to="#" aria-current="page">1</Link>
								<Link className= "w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">2</Link>
								<Link className= "w-10 h-10 text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full" to="#">3</Link>
								<Link className= "text-gray-500 dark:text-white/70 hover:text-primary p-4 inline-flex items-center gap-2 font-medium rounded-sm" to="#">
									<span className= "sr-only">Next</span>
									<span aria-hidden="true">»</span>
								</Link>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Todolist;
