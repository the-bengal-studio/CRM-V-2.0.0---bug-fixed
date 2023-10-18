import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ALLImages from "../../../common/imagesData";
import Modalsearch from "../modalsearch/modalsearch";
import { connect } from "react-redux"
import {ThemeChanger} from "../../../redux/Action"
import store from "../../../redux/store";
import { Closedmenu, Defaultmenu, DetachedFn, DoubletFn, iconOverayFn, iconText } from "../../../common/switcherdata";

const Header = ({local_varaiable,ThemeChanger})=>{
    // window screen resize
    useEffect(() => {
        function debounce(func, delay) {
            let timeoutId;
            
            return function() {
                const context = this;
                const args = arguments;
                
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    func.apply(context, args);
                }, delay);
            };
        }

        const handleResize = () => {
            const windowObject = window;
            if (windowObject.innerWidth <= 991) {
                    const theme = store.getState()
                    ThemeChanger({...theme,"toggled":"close"})
            } else {
                if (localStorage.Syntoverticalstyles) {
                    let verticalStyles = localStorage.getItem("Syntoverticalstyles");
                    switch (verticalStyles) {
                        case "default":
                            Defaultmenu(ThemeChanger)
                            break;
                        case "closed":
                            Closedmenu(ThemeChanger)
                            break;
                        case "icontext":
                            iconText(ThemeChanger)
                            break;
                        case "overlay":
                            iconOverayFn(ThemeChanger)
                            break;
                        case "detached":
                            DetachedFn(ThemeChanger)
                            break;
                        case "doublemenu":
                            DoubletFn(ThemeChanger)
                            break;
                    }
                }else{
                    const theme = store.getState()
                    ThemeChanger({...theme,
                        "toggled":"",
                        // "dataVerticalStyle":"default"
                    })
                }
            }
        };
        handleResize(); // Check on component mount
        const debouncedResize = debounce(handleResize, 300);
        window.addEventListener('resize', debouncedResize);
        return () => {
            window.removeEventListener('resize', debouncedResize);
        };
    }, []);


    function menuClose() {
        const theme = store.getState()
        ThemeChanger({...theme,"toggled":"close"})
    }

    const toggleSidebar = () => {
        const theme = store.getState()
        let sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            console.log("Workinh",sidemenuType,theme.dataVerticalStyle); 
            if (sidemenuType === 'vertical') {
                let verticalStyle = theme.dataVerticalStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({...theme,"dataNavStyle":""})
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({...theme,"toggled":""})
                        } else {
                            ThemeChanger({...theme,"toggled":"close-menu-close"})
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({...theme,"dataNavStyle":""})
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({...theme,"toggled":""})
                        } else {
                            if (window.innerWidth >= 992) {
                            ThemeChanger({...theme,"toggled":"icon-overlay-close"})
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({...theme,"dataNavStyle":""})
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({...theme,"toggled":""})
                        } else {
                            ThemeChanger({...theme,"toggled":"icon-text-close"})
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({...theme,"dataNavStyle":""})
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({...theme,"toggled":"double-menu-close"})
                        } else {
                            let sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                ThemeChanger({...theme,"toggled":"double-menu-open"})
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                } else {
                                    
                            ThemeChanger({...theme,"toggled":""})
                                }
                            }
                        }

                        // doublemenu(ThemeChanger);
                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({...theme,"toggled":""})
                        } else {
                            ThemeChanger({...theme,"toggled":"detached-close"})
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({...theme,"toggled":""})
                }
            }
        }
        else {
              
            const theme = store.getState()
            if (theme.toggled === "close") {
                ThemeChanger({...theme,"toggled":"open"})
                setTimeout(() => {
                    if (theme.toggled == "open") {
                        document.querySelector("#responsive-overlay").classList.add("active");
                        document
                            .querySelector("#responsive-overlay")
                            .addEventListener("click", () => {
                                document
                                    .querySelector("#responsive-overlay")
                                    .classList.remove("active");
                                menuClose();
                            });
                    }
                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            document.querySelector("#responsive-overlay").classList.remove("active");
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({...theme,"toggled":"close"})
            }


        }


    }

    //Dark Model
    const ToggleDark = () => {
        
        ThemeChanger({...local_varaiable,
            "class":local_varaiable.class =='dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataHeaderStyles  == 'dark' ? 'light' : 'dark'
        })
        const theme = store.getState()

        if (theme.class != 'dark') {
            ThemeChanger({...theme,
                "bodyBg":'',
                "darkBg":'',
            })
            localStorage.setItem("Syntolighttheme", "light")
            localStorage.removeItem("Syntodarktheme")
        }
        else {
            localStorage.setItem("Syntodarktheme", "dark")
            localStorage.removeItem("Syntolighttheme")
        }

    }


    //full screen
    let elem = document.documentElement;
    let [i, seti] = useState(true);
    const Fullscreen = (vale) => {
        switch (vale) {
            case true:
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) { /* Safari */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE11 */
                    elem.msRequestFullscreen();
                }
                seti(false)
                break;
            case false:
                document.exitFullscreen()
                seti(true)
                break;
        }
    }

    const cartProduct = [
        {
            id: 1,
            src: ALLImages('png25'),
            name: 'Black Heals For Women',
            newpr: '$699',
            oldpr: '$999'
        },
        {
            id: 2,
            src: ALLImages('png26'),
            name: 'Tshirt For Men',
            newpr: '$245',
            oldpr: '$599'
        },
        {
            id: 3,
            src: ALLImages('png33'),
            name: 'Travel Bag For Womens',
            newpr: '$299',
            oldpr: '$399'
        },
        {
            id: 4,
            src: ALLImages('png34'),
            name: 'Leather Wallet For Grils',
            newpr: '$100',
            oldpr: '$150'
        },
    ]

    const [allData, setAllData] = useState(cartProduct)
    function handleRemove(id) {
        const newList = allData.filter((idx) => idx.id !== id);
        setAllData(newList);
    }

    useEffect(() => {
        const navbar = document.querySelector(".header");
        const navbar1 = document.querySelector(".app-sidebar");
        const sticky = navbar.clientHeight;
        // const sticky1 = navbar1.clientHeight;

        function stickyFn() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky-pin");
                navbar1.classList.add("sticky-pin");
            } else {
                navbar.classList.remove("sticky-pin");
                navbar1.classList.remove("sticky-pin");
            }
        }

        window.addEventListener('scroll', stickyFn);
        window.addEventListener('DOMContentLoaded', stickyFn);

        // Cleanup event listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', stickyFn);
            window.removeEventListener('DOMContentLoaded', stickyFn);
        };
    }, []);

    return (
        <Fragment>
            <header className="header custom-sticky !top-0 !w-full">
                <nav className="main-header" aria-label="Global">
                    <div className="header-content">
                        <div className="header-left">

                            <div className="">
                                <button type="button" className="sidebar-toggle" onClick={() => toggleSidebar()} >
                                    <span className="sr-only">Toggle Navigation</span>
                                    <i className="ri-arrow-right-circle-line header-icon"></i>
                                </button>
                            </div>

                        </div>

                        <div className="responsive-logo">
                            <Link className="responsive-logo-dark" to={`${import.meta.env.BASE_URL}dashboards/sales`} aria-label="Brand">
                                <img src={ALLImages('logo')} alt="logo" className="mx-auto" /></Link>
                            <Link className="responsive-logo-light" to={`${import.meta.env.BASE_URL}dashboards/sales`} aria-label="Brand">
                                <img src={ALLImages('dark')} alt="logo" className="mx-auto" /></Link>
                        </div>

                        <div className="header-right">
                            <div className="responsive-headernav">
                                <div className="header-nav-right">
                                    <div className="header-country hs-dropdown ti-dropdown hidden sm:block"
                                        data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-flag" type="button"
                                            className="hs-dropdown-toggle ti-dropdown-toggle p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] border-0 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <img src={ALLImages('png64')} alt="flag-img" className="h-[1.375rem] w-[1.375rem]" />
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem]" aria-labelledby="dropdown-flag">
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="py-2 first:pt-0 last:pb-0">
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={ALLImages('png64')} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    USA
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={ALLImages('png55')} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Argentina
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={ALLImages('png56')} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Canada
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={ALLImages('png57')} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    France
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={ALLImages('png58')} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Germany
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={ALLImages('png59')} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Italy
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-search" >
                                        <button aria-label="button" type="button" data-hs-overlay="#search-modal"
                                            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            <i className="ri-search-2-line header-icon"></i>
                                        </button>
                                    </div>

                                    <div className="header-theme-mode hidden sm:block" onClick={() => ToggleDark()} >
                                        <Link aria-label="anchor" className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                                            to="#" data-hs-theme-click-value="dark">
                                            <i className="ri-moon-line header-icon"></i>
                                        </Link>
                                        <Link aria-label="anchor" className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                                            to="#" data-hs-theme-click-value="light">
                                            <i className="ri-sun-line header-icon"></i>
                                        </Link>
                                    </div>
                                    <div className="header-fullscreen hidden lg:block" onClick={() => Fullscreen(i)}>
                                        <Link aria-label="anchor" to="#" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            <i className="ri-fullscreen-line header-icon full-screen-open"></i>
                                            <i className="ri-fullscreen-line header-icon fullscreen-exit-line hidden"></i>
                                        </Link>
                                    </div>
                                    <div className="header-cart hs-dropdown ti-dropdown hidden lg:block" data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-cart" type="button" className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-shopping-basket-line header-icon"></i>
                                            <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                                                <span className="relative inline-flex rounded-full h-5 w-5 bg-danger text-white justify-center items-center" id="cart-data2">4</span>
                                            </span>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0" aria-labelledby="dropdown-cart">
                                            <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                                                <p className="ti-dropdown-header-title !text-white font-semibold">Shopping Cart</p>
                                                <Link to="#" className="badge bg-black/20 text-white rounded-sm" id="cart-data">4 Items</Link>
                                            </div>
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="py-2 first:pt-0 last:pb-0" id="allCartsContainer">
                                                    {allData.map((idx) => (
                                                        <div className="ti-dropdown-item relative header-box" key={Math.random()}>
                                                            <Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/cart/`} className="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                                                <img src={idx.src} alt="product-img" className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent" />
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-800 dark:text-white">{idx.name}</p>
                                                                    <div className="flex space-x-2 rtl:space-x-reverse">
                                                                        <h5 className="text-xs">{idx.newpr}</h5>
                                                                        <span className="my-auto line-through text-xs text-gray-400 dark:text-white/70">{idx.oldpr}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link aria-label="anchor" to="#" onClick={() => handleRemove(idx.id)} className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                                <i className="ri-close-circle-line"></i>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="py-2 first:pt-0 last:pb-0 px-5">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <span className="text-xs font-semibold text-gray-800 dark:text-white">Total</span>
                                                        </div>
                                                        <div className="text-end font-medium">
                                                            <span className="text-xs font-semibold text-gray-800 dark:text-white">$40,020</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="py-2 first:pt-0 px-5">
                                                    <Link className="w-full ti-btn ti-btn-primary p-2" to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/checkout/`}>
                                                        Proceed Checkout
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-notification hs-dropdown ti-dropdown hidden sm:block" data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-notification" type="button"
                                            className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-notification-2-line header-icon animate-bell"></i>
                                            <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                                                <span
                                                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/80 opacity-75"></span>
                                                <span
                                                    className="relative inline-flex rounded-full h-5 w-5 bg-success text-white justify-center items-center" id="notify-data">4</span>
                                            </span>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0" aria-labelledby="dropdown-notification">
                                            <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                                                <p className="ti-dropdown-header-title !text-white font-semibold">Notifications</p>
                                                <Link to="#" className="badge bg-black/20 text-white rounded-sm">Mark All Read</Link>
                                            </div>
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="py-2 first:pt-0 last:pb-0" id="allNotifyContainer">
                                                    <div className="ti-dropdown-item relative header-box">
                                                        <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`} className="flex space-x-3 rtl:space-x-reverse">
                                                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                                <img src={ALLImages('jpg73')} alt="img" className="rounded-sm" />
                                                            </div>
                                                            <div className="relative w-full">
                                                                <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">Elon Isk</h5>
                                                                <p className="text-xs mb-1 max-w-[200px] truncate">Hello there! How are you doing? Call me when...</p>
                                                                <p className="text-xs text-gray-400 dark:text-white/70">2 min</p>
                                                            </div>
                                                        </Link>
                                                        <Link aria-label="anchor" to="#" className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                            <i className="ri-close-circle-line"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="ti-dropdown-item relative header-box">
                                                        <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`} className="flex items-center space-x-3 rtl:space-x-reverse">
                                                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                                <img src={ALLImages('jpg58')} alt="img" className="rounded-sm" />
                                                            </div>
                                                            <div className="relative w-full">
                                                                <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">Shakira Sen</h5>
                                                                <p className="text-xs mb-1 max-w-[200px] truncate">I would like to discuss about that assets...</p>
                                                                <p className="text-xs text-gray-400 dark:text-white/70">09:43</p>
                                                            </div>
                                                        </Link>
                                                        <Link aria-label="anchor" to="#" className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                            <i className="ri-close-circle-line"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="ti-dropdown-item relative header-box">
                                                        <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`} className="flex items-center space-x-3 rtl:space-x-reverse">
                                                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                                <img src={ALLImages('jpg77')} alt="img" className="rounded-sm" />
                                                            </div>
                                                            <div className="relative w-full">
                                                                <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">Sebastian</h5>
                                                                <p className="text-xs mb-1 max-w-[200px] truncate">Shall we go to the cafe at downtown...</p>
                                                                <p className="text-xs text-gray-400 dark:text-white/70">yesterday</p>
                                                            </div>
                                                        </Link>
                                                        <Link aria-label="anchor" to="#" className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                            <i className="ri-close-circle-line"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="ti-dropdown-item relative header-box">
                                                        <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`} className="flex items-center space-x-3 rtl:space-x-reverse">
                                                            <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                                <img src={ALLImages('jpg67')} alt="img" className="rounded-sm" />
                                                            </div>
                                                            <div className="relative w-full">
                                                                <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">Charlie Davieson</h5>
                                                                <p className="text-xs mb-1 max-w-[200px] truncate">Lorem ipsum dolor sit amet, consectetur</p>
                                                                <p className="text-xs text-gray-400 dark:text-white/70">yesterday</p>
                                                            </div>
                                                        </Link>
                                                        <Link aria-label="anchor" to="#" className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                            <i className="ri-close-circle-line"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="py-2 first:pt-0 px-5">
                                                    <Link className="w-full ti-btn ti-btn-primary p-2" to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`}>
                                                        View All
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-apps hs-dropdown ti-dropdown hidden md:block" data-hs-dropdown-placement="bottom-right">
                                        <button aria-label="button" id="dropdown-apps" type="button" className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-bookmark-line header-icon"></i>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0" aria-labelledby="dropdown-apps">
                                            <div
                                                className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center text-center">
                                                <p className="ti-dropdown-header-title font-semibold !text-white">Related Apps</p>
                                            </div>
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="grid grid-cols-3 gap-0 p-4 pt-2">
                                                    <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`} className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-mail-line leading-none text-2xl avatar ring-0 bg-primary/20 text-primary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Mail Inbox</div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/chat/`} className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-chat-2-line leading-none text-2xl avatar ring-0 bg-secondary/20 text-secondary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Chat</div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}pagecomponent/tasks/`} className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-task-line leading-none text-2xl avatar ring-0 bg-warning/20 text-warning rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Task</div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}advancedUi/calender/`} className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-calendar-event-line leading-none text-2xl avatar ring-0 bg-danger/20 text-danger rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Calendar</div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}advancedUi/filemanager/filemanagermain/`} className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-file-copy-2-line leading-none text-2xl avatar ring-0 bg-info/20 text-info rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">FileManager</div>
                                                    </Link>
                                                    <Link to={`${import.meta.env.BASE_URL}pagecomponent/contacts/`} className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-group-line leading-none text-2xl avatar ring-0 bg-success/20 text-success rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Contacts</div>
                                                    </Link>
                                                </div>
                                                <div className="py-2 first:pt-0 px-5">
                                                    <Link className="w-full ti-btn ti-btn-primary p-2" to="#">
                                                        View All
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-profile hs-dropdown ti-dropdown" data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-profile" type="button" className="hs-dropdown-toggle ti-dropdown-toggle gap-2 p-0 flex-shrink-0 h-8 w-8 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <img className="inline-block rounded-full ring-2 ring-white dark:ring-white/10"
                                                src={ALLImages('jpg57')} alt="Image Description" />
                                        </button>

                                        <div className="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]" aria-labelledby="dropdown-profile">
                                            <div className="ti-dropdown-header !bg-primary flex">
                                                <div className="ltr:mr-3 rtl:ml-3">
                                                    <img className="avatar shadow-none rounded-full !ring-transparent"
                                                        src={ALLImages('jpg57')} alt="profile-img" />
                                                </div>
                                                <div>
                                                    <p className="ti-dropdown-header-title !text-white">Json Taylor</p>
                                                    <p className="ti-dropdown-header-content !text-white/50">Web Designer</p>
                                                </div>
                                            </div>
                                            <div className="mt-2 ti-dropdown-divider">
                                                <Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/home/`} className="ti-dropdown-item">
                                                    <i className="ti ti-user-circle text-lg"></i>
                                                    Profile
                                                </Link>
                                                <Link to={`${import.meta.env.BASE_URL}pagecomponent/mail/mainMail/`} className="ti-dropdown-item">
                                                    <i className="ti ti-inbox text-lg"></i>
                                                    Inbox
                                                </Link>
                                                <Link to={`${import.meta.env.BASE_URL}pagecomponent/tasks/`} className="ti-dropdown-item">
                                                    <i className="ti ti-clipboard-check text-lg"></i>
                                                    Task Manager
                                                </Link>
                                                <Link to={`${import.meta.env.BASE_URL}pagecomponent/profile/profilesetting/`} className="ti-dropdown-item">
                                                    <i className="ti ti-adjustments-horizontal text-lg"></i>
                                                    Settings
                                                </Link>
                                                <Link to={`${import.meta.env.BASE_URL}dashboards/crypto/`} className="ti-dropdown-item">
                                                    <i className="ti ti-wallet text-lg"></i>
                                                    Bal: $7,12,950
                                                </Link>
                                                <Link to={`${import.meta.env.BASE_URL}firebase/firebaselogin/`} className="ti-dropdown-item">
                                                    <i className="ti ti-logout  text-lg"></i>
                                                    Log Out
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="switcher-icon">
                                        <button aria-label="button" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-gray-100 hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-switcher">
                                            <i className="ri-settings-5-line header-icon animate-spin"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <Modalsearch />
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
  })
export default connect(mapStateToProps,{ThemeChanger})(Header);

