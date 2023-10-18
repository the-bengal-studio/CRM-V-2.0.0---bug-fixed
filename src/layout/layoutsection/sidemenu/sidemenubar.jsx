/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import ALLImages from "../../../common/imagesData";
import MenuItems from "../../../common/sidemenuData";
import { connect } from "react-redux"
import { ThemeChanger } from "../../../redux/Action"
import store from "../../../redux/store";
import { Closedmenu, Defaultmenu, DetachedFn, DoubletFn, iconOverayFn, iconText } from "../../../common/switcherdata";
let history = [];

const Sidebar = ({ local_varaiable, ThemeChanger }) => {
	const [menuitems, setMenuitems] = useState(MenuItems);
	useEffect(() => {
		history.push(location.pathname);  // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history       
		if (history.length > 2) {
			history.shift();
		}
		if (history[0] !== history[1]) {
			setSidemenu();
		}
		let mainContent = document.querySelector(".main-content");
		mainContent.addEventListener("click", mainContentClickFn);
		return () => {
			mainContent.removeEventListener("click", mainContentClickFn);
		};

	}, [location])

	useEffect(() => {
		if (
			local_varaiable.dataNavLayout == "horizontal" &&
			window.innerWidth >= 992
		) {
			clearMenuActive();

		}
	}, []);


	//  In Horizontal When we click the body it should we Closed
	function mainContentClickFn() {
		if (
			local_varaiable.dataNavLayout === "horizontal" &&
			window.innerWidth >= 992
		) {
			clearMenuActive();

		}
	}
	function setSidemenu(list) {
		let dd = list ? list.path + '/' : location.pathname;
		if (menuitems) {
			menuitems.filter(mainlevel => {
				if (mainlevel.Items) {
					mainlevel.Items.filter((items) => {
						if(ulRef.current.href != location.href || localStorage.Syntoverticalstyles != 'doublemenu'){
							items.active = false;
						}
						items.selected = false;

						if (dd === '/') {
							dd = '/dashboards/sales/';
						}
						if (dd === items.path + '/') {
							items.active = true;
							items.selected = true;
						}
						if (items.children) {
							items.children.filter(submenu => {
								submenu.active = false;
								submenu.selected = false;
								if (dd === submenu.path + '/') {
									const theme = store.getState()
									items.active = theme.dataNavLayout == 'horizontal' || theme.dataNavStyle == 'icon-hover' ? false : true;
									items.selected = true;
									submenu.active = true;
									submenu.selected = true;
								}
								if (submenu.children) {
									submenu.children.filter((submenu1) => {
										submenu1.active = false;
										submenu1.selected = false;
										if (dd === submenu1.path + '/') {
											items.active = true;
											items.selected = true;
											submenu.active = true;
											submenu.selected = true;
											submenu1.active = true;
											submenu1.selected = true;
										}
										return submenu1;
									})
								}
								return submenu;
							})
						}
						return items;
					})
				}
				setMenuitems(arr => [...arr]);
				return mainlevel;
			})
		}

		if (localStorage.getItem("Syntoverticalstyles") == "icontext") {
			// ThemeChanger({...local_varaiable,"iconText":"open"})
		}
		if (local_varaiable.dataVerticalStyle == "doublemenu") {
			// ThemeChanger({...local_varaiable,"toggled":"double-menu-open"})
		}
	}
	function toggleSidemenu(item) {
		const theme = store.getState()
		{
			// To show/hide the menu
			if (!item.active) {
				menuitems.filter(mainlevel => {
					if (mainlevel.Items) {
						mainlevel.Items.filter((sublevel) => {
							sublevel.active = false;
							if (item === sublevel) {
								sublevel.active = true;
							}
							if (sublevel.children) {
								sublevel.children.filter((sublevel1) => {
									sublevel1.active = false;
									if (item === sublevel1) {
										sublevel.active = true;
										sublevel1.active = true;
									}
									if (sublevel1.children) {
										sublevel1.children.filter((sublevel2) => {
											sublevel2.active = false;
											if (item === sublevel2) {
												sublevel.active = true;
												sublevel1.active = true;
												sublevel2.active = true;
											}
											if (sublevel2.children) {
												sublevel2.children.filter(sublevel3 => {
													sublevel3.active = false;
													if (item === sublevel3) {
														sublevel.active = true;
														sublevel1.active = true;
														sublevel2.active = true;
														sublevel3.active = true;
													}
													return sublevel2;
												})
											}
											return sublevel2;
										})
									}
									return sublevel1;
								})
							}
							return sublevel;
						})
					}
					return mainlevel;
				})
			}
			else {
				if(theme.dataVerticalStyle != 'doublemenu'){
					item.active = !item.active;
				}
			}
		}

		setMenuitems(arr => [...arr]);
	}
	function clearMenuActive() {
		MenuItems.filter((mainlevel) => {
			if (mainlevel.Items) {
				mainlevel.Items.filter((sublevel) => {
					sublevel.active = false;
					if (sublevel.children) {
						sublevel.children.filter((sublevel1) => {
							sublevel1.active = false;
							if (sublevel1.children) {
								sublevel1.children.filter((sublevel2) => {
									sublevel2.active = false;
									return sublevel2;
								});
							}
							return sublevel1;
						});
					}
					return sublevel;
				});
			}
			return mainlevel;
		});
		setMenuitems((arr) => [...arr]);
	}
	function Onhover() {
		const theme = store.getState()
		if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay != 'open') {
			ThemeChanger({ ...theme, "iconOverlay": "open" })
		}
	}
	function Outhover() {
		const theme = store.getState()
		if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay == 'open') {
			ThemeChanger({ ...theme, "iconOverlay": "" })
		}
	}
	function Clickhandelar() {
		if (localStorage.getItem("Syntoverticalstyles") == "icontext") {
			ThemeChanger({ ...local_varaiable, "iconText": "open" })
		}
		if (local_varaiable.dataVerticalStyle == "doublemenu") {
			ThemeChanger({
				...local_varaiable,
				"toggled": local_varaiable.toggled == 'double-menu-open' ? "" : "double-menu-open"
			})
		}
	}
	function menuClose() {
		const theme = store.getState()
		ThemeChanger({ ...theme, "toggled": "close" })
		document.querySelector("#responsive-overlay").classList.remove("active");
	}
	useEffect(() => {
		window.addEventListener("resize", () => {
			let mainContent = document.querySelector(".main-content");
			setTimeout(() => {
				if (window.innerWidth <= 992) {
					if (mainContent) {
						mainContent.addEventListener("click", menuClose);
					}
				} else {
					if (mainContent) {
						mainContent.removeEventListener("click", menuClose);
					}

				}
			}, 100);
		})
	}, [])
	let switcherArrowFn = () => {
		// used to remove is-expanded class and remove class on clicking arrow buttons
		function slideClick() {
			let slide = document.querySelectorAll(".slide");
			let slideMenu = document.querySelectorAll(".slide-menu");
			slide.forEach((element) => {
				if (element.classList.contains("is-expanded") == true) {
					element.classList.remove("is-expanded");
				}
			});
			slideMenu.forEach((element) => {
				if (element.classList.contains("open") == true) {
					element.classList.remove("open");
					element.style.display = "none";
				}
			});
		}

		slideClick();
	}

	let slideRight = () => {
		let menuNav = document.querySelector(".main-menu");
		let mainContainer1 = document.querySelector(".main-sidebar");
		if (menuNav && mainContainer1) {
			let marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0])
			);
			let marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginRight.split("px")[0])
			);
			let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) > Math.abs(marginLeftValue)) {
						menuNav.style.marginRight = 0;
						if (
							!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)
						) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
							document.querySelector("#slide-right")?.classList.add("hidden");
						}
						menuNav.style.marginLeft =
							Number(menuNav.style.marginLeft.split("px")[0]) -
							Math.abs(mainContainer1Width) +
							"px";
						document.querySelector("#slide-right")?.classList.remove("hidden");
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						// console.log("Woking Right");

						menuNav.style.marginLeft = 0;
						if (
							!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)
						) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							document.querySelector("#slide-right")?.classList.add("hidden");
						}
						menuNav.style.marginRight =
							Number(menuNav.style.marginRight.split("px")[0]) -
							Math.abs(mainContainer1Width) +
							"px";
						document.querySelector("#slide-left")?.classList.remove("hidden");
					}
				}
			}
			let element = document.querySelector(".main-menu > .slide.open")
			let element1 = document.querySelector(".main-menu > .slide.open >ul")
			if (element) {
				element.classList.remove("active")
			}
			if (element1) {
				element1.style.display = "none"
			}
		}


		switcherArrowFn();
		return;
	}
	let slideLeft = () => {
		let menuNav = document.querySelector(".main-menu");
		let mainContainer1 = document.querySelector(".main-sidebar");
		if (menuNav && mainContainer1) {
			let marginLeftValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginLeft.split("px")[0])
			);
			let marginRightValue = Math.ceil(
				Number(window.getComputedStyle(menuNav).marginRight.split("px")[0])
			);
			let check = menuNav.scrollWidth - mainContainer1.offsetWidth;
			let mainContainer1Width = mainContainer1.offsetWidth;
			if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
				if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
					if (Math.abs(check) <= Math.abs(marginLeftValue)) {
						menuNav.style.marginLeft = "0px"
					}
				} else {
					if (Math.abs(check) > Math.abs(marginRightValue)) {
						menuNav.style.marginLeft = 0;
						if (
							!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)
						) {
							mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
							document.querySelector("#slide-right")?.classList.add("hidden");
						}
						menuNav.style.marginRight =
							Number(menuNav.style.marginRight.split("px")[0]) -
							Math.abs(mainContainer1Width) +
							"px";
						document.querySelector("#slide-left")?.classList.remove("hidden");
					}
				}
			}
			let element = document.querySelector(".main-menu > .slide.open")
			let element1 = document.querySelector(".main-menu > .slide.open >ul")
			if (element) {
				element.classList.remove("active")
			}
			if (element1) {
				element1.style.display = "none"
			}
		}

		switcherArrowFn();
		return;
	}

	const ulRef = useRef(null)

	useEffect(() => {
		if(localStorage.Syntoverticalstyles != 'overlay' && localStorage.Syntoverticalstyles != "detached"){
			setSidemenu()
		}
	}, [local_varaiable])

	let MenuOpen = () => {
		let MainContent = document.querySelector(".main-content")
		if (local_varaiable.dataVerticalStyle == 'icontext' && local_varaiable.iconText != 'open') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "iconText": "open" })
			MainContent.onclick = (ele) => {
				const theme = store.getState()
				ThemeChanger({ ...theme, "iconText": "" })
			}
		}
		const theme = store.getState()
		if (localStorage.Syntoverticalstyles == 'doublemenu' && theme.toggled != 'double-menu-open') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "toggled": "double-menu-open"})
		}
	}

	let noChild = () => {
		if (localStorage.Syntoverticalstyles == 'doublemenu') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "toggled": "" })
		}
	}


	return (
		<Fragment>
			<div></div>
			<aside className="app-sidebar" id="sidebar" onMouseOver={() => Onhover()}
				onMouseOut={() => Outhover()} >


				<div className="main-sidebar-header">
					<Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
						<img src={ALLImages('logo')} alt="logo" className="main-logo desktop-logo" />
						<img src={ALLImages('togglelogo')} alt="logo" className="main-logo toggle-logo" />
						<img src={ALLImages('dark')} alt="logo" className="main-logo desktop-dark" />
						<img src={ALLImages('toggledark')} alt="logo" className="main-logo toggle-dark" />
					</Link>
				</div>

				<div className="main-sidebar " id="sidebar-scroll">
					<nav className="main-menu-container nav nav-pills flex-column sub-open">
						<div className="slide-left" id="slide-left" onClick={() => { slideLeft() }}><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24"
							height="24" viewBox="0 0 24 24">
							<path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
						</svg></div>
						<ul className="main-menu">

							{menuitems.map((firstlayer) =>
								<React.Fragment key={Math.random()}>
									{firstlayer.menutitle ? <li className="slide__category">
										{firstlayer.menutitle}
									</li> : ""}
									{firstlayer.Items.map((secondlayer) =>
										secondlayer.type === "link" ?
											<li className={`slide ${secondlayer.active ? "active" : ''}`} key={Math.random()} >

												<Link ref={ulRef} onClick={(event) => { setSidemenu(secondlayer); noChild() }} to={secondlayer.path + "/"} className={`side-menu__item ${secondlayer.selected ? "active" : ""}`}>{secondlayer.icon} <span className="side-menu__label">{secondlayer.title}</span></Link>
											</li>
											: secondlayer.type === "sub" ?
												<li className={`slide has-sub ${secondlayer.active ? "open" : ''}`} key={Math.random()} onClick={() => { MenuOpen() }}>
													<a href="#" className={`side-menu__item ${secondlayer.selected ? "active" : ""}`}
														onClick={(event) => { event.preventDefault(); toggleSidemenu(secondlayer) }}>
														{secondlayer.icon}
														<span className="side-menu__label">{secondlayer.title}</span>
														<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
													<ul className={`slide-menu child1 ${secondlayer.active ? "!block" : ""
														}`}>
														<li className="slide side-menu__label1">
															<a href="">{secondlayer.title}</a>
														</li>
														{secondlayer.children.map((thirdlayer) =>
															<React.Fragment key={Math.random()} >
																{thirdlayer.type === "link" ? <li className={`slide ${thirdlayer.active ? "active" : ''}`}>
																	{
																		thirdlayer.path == "/" ?
																			<Link to={"#"} className={`side-menu__item ${thirdlayer.selected ? "active" : ''}`}>
																				{thirdlayer.icon}
																				{thirdlayer.title}
																			</Link> :
																			<Link onClick={(event) => { setSidemenu(thirdlayer); }} to={thirdlayer.path + "/"} className={`side-menu__item ${thirdlayer.selected ? "active" : ''}`}>
																				{thirdlayer.icon}
																				{thirdlayer.title}
																			</Link>
																	}
																</li>
																	: thirdlayer.type === "sub" ? <li className={`slide has-sub ${secondlayer.active ? "open" : ''}`}>
																		<a href="#" className="side-menu__item" onClick={(evnt) => {
																			evnt.preventDefault();
																			toggleSidemenu(thirdlayer)
																			Clickhandelar()

																		}}>{thirdlayer.icon} <span className="">
																				{thirdlayer.title}
																			</span><i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
																		<ul className={`slide-menu child2 ${thirdlayer.active ? "!block" : ""
																			}`}>
																			{thirdlayer.children.map((fourthlayer) => <React.Fragment key={Math.random()}>
																				{fourthlayer.type === "link" ?
																					<li className={`slide ${fourthlayer.active ? "active" : ''}`}>
																						<Link onClick={(event) => { setSidemenu(fourthlayer); }} to={fourthlayer.path == "/" ? "#" : fourthlayer.path + "/"} className={`side-menu__item ${fourthlayer.selected ? "active" : ''}`}>
																							{fourthlayer.icon}
																							{fourthlayer.title}
																						</Link>
																					</li>
																					: fourthlayer.type === "sub" ? <li className={`slide has-sub ${fourthlayer.active ? "open" : ''}`}>

																						<a href="#" className="side-menu__item" onClick={(evnt) => {
																							evnt.preventDefault();
																							toggleSidemenu(fourthlayer)

																						}}>{fourthlayer.icon} <span className="">{fourthlayer.title}</span><i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>

																						<ul className={`slide-menu child3 ${fourthlayer.active ? "!block" : ""
																							}`}>
																							{fourthlayer.children.map((fivthlayer) => <React.Fragment key={Math.random()}>
																								{fivthlayer.type === "link" ?
																									<li className="slide">
																										<Link to={fourthlayer.path + "/"} className="side-menu__item">
																											{fivthlayer.icon} {fivthlayer.title}</Link>
																									</li> : <a href="#" className="side-menu__item" onClick={(evnt) => {
																										evnt.preventDefault();
																										toggleSidemenu(fivthlayer)

																									}}>{fivthlayer.icon} <span className="">{fivthlayer.title}</span><i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
																								}


																							</React.Fragment>)}

																						</ul>

																					</li> : ""

																				}


																			</React.Fragment>)}


																		</ul>
																	</li> : ""
																}
															</React.Fragment>
														)}
													</ul>
												</li> : '')

									}
								</React.Fragment>
							)}
						</ul>
						<div className="slide-right" onClick={() => { slideRight() }} id="slide-right">
							<svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
						</div>
					</nav>
				</div>
			</aside>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	local_varaiable: state
})

export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
