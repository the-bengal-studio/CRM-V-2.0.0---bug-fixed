import React from "react";

//Svg icons of Dashboard

const Dashboardsvg = <i className="ri-home-8-line side-menu__icon"></i>

const WidgetsSvg = <i className="ri-apps-2-line side-menu__icon"></i>

const ComponentsSvg = <i className="ri-inbox-line side-menu__icon"></i>

const ElementsSvg = <i className="ri-cpu-line side-menu__icon"></i>

const FormsSvg = <i className="ri-file-text-line side-menu__icon"></i>

const AdvancedUISvg = <i className="ri-stack-line side-menu__icon"></i>

const BasicUISvg = <i className="ri-file-list-3-line side-menu__icon"></i>

const NestedSvg = <i className="ri-node-tree side-menu__icon"></i>

const MapsSvg = <i className="ri-map-pin-user-line side-menu__icon"></i>

const ChartsSvg = <i className="ri-pie-chart-2-line side-menu__icon"></i>

const PagesSvg = <i className="ri-book-open-line side-menu__icon"></i>

const IconsSvg = <i className="ri-camera-lens-line side-menu__icon"></i>

const AuthenticationSvg = <i className="ri-error-warning-line side-menu__icon"></i>



export const MenuItems = [
	{
		id: 1, menutitle: "MAIN", Items: [

			{
				id: 2, icon: Dashboardsvg, title: "Dashboards", type: "sub", active: false, selected: false, children: [

					{ id: 3, path: `${ import.meta.env.BASE_URL }dashboards/sales`, type: "link", active: false, selected: false, title: "Sales" },
					{ id: 4, path: `${ import.meta.env.BASE_URL }dashboards/ecommerce`, type: "link", active: false, selected: false, title: "Ecommerce" },
					{ id: 5, path: `${ import.meta.env.BASE_URL }dashboards/crypto`, type: "link", active: false, selected: false, title: "Crypto" },
					{ id: 6, path: `${ import.meta.env.BASE_URL }dashboards/jobs`, type: "link", active: false, selected: false, title: "Jobs" },
					{ id: 7, path: `${ import.meta.env.BASE_URL }dashboards/nft`, type: "link", active: false, selected: false, title: "NFT" },
					{ id: 8, path: `${ import.meta.env.BASE_URL }dashboards/analytics`, type: "link", active: false, selected: false, title: "Analytics" },
					{ id: 9, path: `${ import.meta.env.BASE_URL }dashboards/projects`, type: "link", active: false, selected: false, title: "Projects" },
					{ id: 10, path: `${ import.meta.env.BASE_URL }dashboards/hrm`, type: "link", active: false, selected: false, title: "HRM" },
					{ id: 11, path: `${ import.meta.env.BASE_URL }dashboards/crm`, type: "link", active: false, selected: false, title: "CRM" },
					{ id: 12, path: `${ import.meta.env.BASE_URL }dashboards/personal`, type: "link", active: false, selected: false, title: "Personal" },
					{ id: 13, path: `${ import.meta.env.BASE_URL }dashboards/stocks`, type: "link", active: false, selected: false, title: "Stocks" },
					{ id: 14, path: `${ import.meta.env.BASE_URL }dashboards/course`, type: "link", active: false, selected: false, title: "Course" }
				],
			},

			{ id: 15, path: `${ import.meta.env.BASE_URL }widgets`, icon: WidgetsSvg, title: "Widgets", type: "link", active: false, selected: false },
		]
	},
	{
		menutitle: "GENERAL", Items: [

			{
				id: 16, icon: ComponentsSvg, title: "Components", type: "sub", active: false, selected: false, children: [

					{ id: 17, path: `${ import.meta.env.BASE_URL }components/accordion`, type: "link", active: false, selected: false, title: "Accordion" },
					{ id: 18, path: `${ import.meta.env.BASE_URL }components/alerts`, type: "link", active: false, selected: false, title: "Alerts" },
					{ id: 19, path: `${ import.meta.env.BASE_URL }components/avatars`, type: "link", active: false, selected: false, title: "Avatars" },
					{ id: 20, path: `${ import.meta.env.BASE_URL }components/badges`, type: "link", active: false, selected: false, title: "Badges" },
					{ id: 21, path: `${ import.meta.env.BASE_URL }components/blockquotes`, type: "link", active: false, selected: false, title: "Blockquotes" },
					{ id: 22, path: `${ import.meta.env.BASE_URL }components/buttons`, type: "link", active: false, selected: false, title: "Buttons" },
					{ id: 23, path: `${ import.meta.env.BASE_URL }components/cards`, type: "link", active: false, selected: false, title: "Cards" },
					{ id: 24, path: `${ import.meta.env.BASE_URL }components/collapse`, type: "link", active: false, selected: false, title: "Collapse" },
					{ id: 25, path: `${ import.meta.env.BASE_URL }components/listgroup`, type: "link", active: false, selected: false, title: "List Group" },
					{ id: 26, path: `${ import.meta.env.BASE_URL }components/list`, type: "link", active: false, selected: false, title: "List" },
					{ id: 27, path: `${ import.meta.env.BASE_URL }components/indicators`, type: "link", active: false, selected: false, title: "Indicators" },
					{ id: 28, path: `${ import.meta.env.BASE_URL }components/progress`, type: "link", active: false, selected: false, title: "Progress" },
					{ id: 29, path: `${ import.meta.env.BASE_URL }components/skeletons`, type: "link", active: false, selected: false, title: "Skeleton" },
					{ id: 30, path: `${ import.meta.env.BASE_URL }components/spinners`, type: "link", active: false, selected: false, title: "Spinners" },
					{ id: 31, path: `${ import.meta.env.BASE_URL }components/toasts`, type: "link", active: false, selected: false, title: "Toast" }
				]
			},
			{
				id: 32, icon: ElementsSvg, title: "Elements", type: "sub", active: false, selected: false, children: [

					{ id: 33, path: `${ import.meta.env.BASE_URL }elements/navbar`, type: "link", active: false, selected: false, title: "Navbar" },
					{ id: 34, path: `${ import.meta.env.BASE_URL }elements/megaMenu`, type: "link", active: false, selected: false, title: "MegaMenu" },
					{ id: 35, path: `${ import.meta.env.BASE_URL }elements/nav&tabs`, type: "link", active: false, selected: false, title: "Nav & Tabs" },
					{ id: 36, path: `${ import.meta.env.BASE_URL }elements/scrollspy`, type: "link", active: false, selected: false, title: "Scrollspy" },
					{ id: 37, path: `${ import.meta.env.BASE_URL }elements/breadcrumbs`, type: "link", active: false, selected: false, title: "BreadCrumb" },
					{ id: 38, path: `${ import.meta.env.BASE_URL }elements/paginations`, type: "link", active: false, selected: false, title: "Pagination" },
					{ id: 39, path: `${ import.meta.env.BASE_URL }elements/grids`, type: "link", active: false, selected: false, title: "Grids" },
					{ id: 40, path: `${ import.meta.env.BASE_URL }elements/columns`, type: "link", active: false, selected: false, title: "Columns" }
				]
			},
			{
				id: 41, icon: FormsSvg, title: "Forms", type: "sub", active: false, selected: false, children: [
					{ id: 42, path: `${ import.meta.env.BASE_URL }forms/formelements`, type: "link", active: false, selected: false, title: "Form Elements" },
					{ id: 43, path: `${ import.meta.env.BASE_URL }forms/advancedforms`, type: "link", active: false, selected: false, title: "Advanced Forms" },
					{ id: 44, path: `${ import.meta.env.BASE_URL }forms/forminputgroup`, type: "link", active: false, selected: false, title: "Form-Input-Group" },
					{ id: 44, path: `${ import.meta.env.BASE_URL }forms/fileuploads`, type: "link", active: false, selected: false, title: "File Uploads" },
					{ id: 45, path: `${ import.meta.env.BASE_URL }forms/formcheckbox`, type: "link", active: false, selected: false, title: "Form-Checkbox" },
					{ id: 46, path: `${ import.meta.env.BASE_URL }forms/formradio`, type: "link", active: false, selected: false, title: "Form-Radio" },
					{ id: 47, path: `${ import.meta.env.BASE_URL }forms/formswitch`, type: "link", active: false, selected: false, title: "Form-Switch" },
					{ id: 48, path: `${ import.meta.env.BASE_URL }forms/formselect`, type: "link", active: false, selected: false, title: "Form-Select" },
					{ id: 49, path: `${ import.meta.env.BASE_URL }forms/formlayout`, type: "link", active: false, selected: false, title: "Form-Layouts" },
					{ id: 50, path: `${ import.meta.env.BASE_URL }forms/formvalidation`, type: "link", active: false, selected: false, title: "Form-Validations" },
					{ id: 51, path: `${ import.meta.env.BASE_URL }forms/formeditors`, type: "link", active: false, selected: false, title: "Form-Editor" }
				]
			},
			{
				id: 52, icon: AdvancedUISvg, title: "Advanced UI", type: "sub", active: false, selected: false, children: [

					{ id: 53, path: `${ import.meta.env.BASE_URL }advancedUi/rangeslider`, type: "link", active: false, selected: false, title: "Range Slider" },
					{ id: 54, path: `${ import.meta.env.BASE_URL }advancedUi/calender`, type: "link", active: false, selected: false, title: "Calender" },
					{ id: 55, path: `${ import.meta.env.BASE_URL }advancedUi/carousel`, type: "link", active: false, selected: false, title: "Carousel" },
					{ id: 56, path: `${ import.meta.env.BASE_URL }advancedUi/gallery`, type: "link", active: false, selected: false, title: "Gallery" },
					{ id: 57, path: `${ import.meta.env.BASE_URL }advancedUi/sweetalert`, type: "link", active: false, selected: false, title: "Sweet Alert" },
					{ id: 58, path: `${ import.meta.env.BASE_URL }advancedUi/rating`, type: "link", active: false, selected: false, title: "Rating" },
					{ id: 61, path: `${ import.meta.env.BASE_URL }advancedUi/notification`, type: "link", active: false, selected: false, title: "Notification" },
					{ id: 62, path: `${ import.meta.env.BASE_URL }advancedUi/treeview`, type: "link", active: false, selected: false, title: "Tree View" },
					{
						id: 63, type: "sub", active: false, selected: false, title: "File-Manager", children: [

							{ id: 64, path: `${ import.meta.env.BASE_URL }advancedUi/filemanager/filemanagermain`, type: "link", active: false, selected: false, title: "File Manager" },
							{ id: 66, path: `${ import.meta.env.BASE_URL }advancedUi/filemanager/filemanagerlist`, type: "link", active: false, selected: false, title: "File Manager List" },
							{ id: 67, path: `${ import.meta.env.BASE_URL }advancedUi/filemanager/filedetails`, type: "link", active: false, selected: false, title: "File Details" },

						]
					}
				]
			},
			{
				id: 68, icon: BasicUISvg, title: "Basic UI", type: "sub", active: false, selected: false, children: [

					{ id: 69, path: `${ import.meta.env.BASE_URL }basicUi/dropdowns`, type: "link", active: false, selected: false, title: "Dropdown" },
					{ id: 70, path: `${ import.meta.env.BASE_URL }basicUi/modal`, type: "link", active: false, selected: false, title: "Modal" },
					{ id: 71, path: `${ import.meta.env.BASE_URL }basicUi/offcanvas`, type: "link", active: false, selected: false, title: "Offcanvas" },
					{ id: 72, path: `${ import.meta.env.BASE_URL }basicUi/tooltip&popover`, type: "link", active: false, selected: false, title: "Tooltips & Popovers" },
					{
						id: 73, type: "sub", active: false, selected: false, title: "Tables", children: [

							{ id: 75, path: `${ import.meta.env.BASE_URL }basicUi/tables/basictable`, type: "link", active: false, selected: false, title: "Basic Table" },
							{ id: 76, path: `${ import.meta.env.BASE_URL }basicUi/tables/datatable`, type: "link", active: false, selected: false, title: "Data Table" },
							{ id: 77, path: `${ import.meta.env.BASE_URL }basicUi/tables/tableEdit`, type: "link", active: false, selected: false, title: "Edit Table" },

						]
					}
				]
			},
		]
	},
	{
		menutitle: "LEVELS", Items: [
			{
				icon: NestedSvg, title: "Nested Menu", type: "sub", active: false, selected: false, children: [

					{ title: "Nested-1", path: `${ import.meta.env.BASE_URL }`, type: "link", active: false, selected: false },

					{
						title: "Nested-2", type: "sub", active: false, selected: false, children: [

							{ type: "link", path: `${ import.meta.env.BASE_URL }`, active: false, selected: false, title: "Nested-2-1" },

						]
					},
				]
			},
		]
	},
	{
		menutitle: "MAPS & CHARTS", Items: [
			{
				id: 78, icon: MapsSvg, title: "Maps", type: "sub", active: false, selected: false, children: [

					{ id: 80, path: `${ import.meta.env.BASE_URL }maps/leafletmap`, type: "link", active: false, selected: false, title: "Leaflet Maps" },
					{ id: 81, path: `${ import.meta.env.BASE_URL }maps/simplemap`, type: "link", active: false, selected: false, title: "Simple Maps" },

				]
			},
			{
				id: 82, icon: ChartsSvg, title: "Charts", type: "sub", active: false, selected: false, children: [

					{ id: 83, path: `${ import.meta.env.BASE_URL }charts/apexchart`, type: "link", active: false, selected: false, title: "Apex Chart" },
					{ id: 84, path: `${ import.meta.env.BASE_URL }charts/chartjs`, type: "link", active: false, selected: false, title: "Chart JS" },
					{ id: 85, path: `${ import.meta.env.BASE_URL }charts/echart`, type: "link", active: false, selected: false, title: "E-Chart" },

				]
			},
		]
	},
	{
		menutitle: "PAGES", Items: [
			{
				id: 86, icon: PagesSvg, title: "Pages", type: "sub", active: false, selected: false, children: [
					{
						id: 87, title: "Profile", type: "sub", active: false, selected: false, children: [

							{ id: 88, path: `${ import.meta.env.BASE_URL }pagecomponent/profile/home`, type: "link", active: false, selected: false, title: "Home" },
							{ id: 89, path: `${ import.meta.env.BASE_URL }pagecomponent/profile/profilesetting`, type: "link", active: false, selected: false, title: "Profile Settings" },

						]
					},
					{
						id: 90, title: "Invoice", type: "sub", active: false, selected: false, children: [

							{ id: 91, path: `${ import.meta.env.BASE_URL }pagecomponent/invoice/invoicelist`, type: "link", active: false, selected: false, title: "Invoice List" },
							{ id: 92, path: `${ import.meta.env.BASE_URL }pagecomponent/invoice/invoicedetails`, type: "link", active: false, selected: false, title: "Invoice Details" },

						]
					},
					{
						id: 93, title: "Blog", type: "sub", active: false, selected: false, children: [

							{ id: 94, path: `${ import.meta.env.BASE_URL }pagecomponent/blog/blogmain`, type: "link", active: false, selected: false, title: "Blog" },
							{ id: 95, path: `${ import.meta.env.BASE_URL }pagecomponent/blog/blogdetails`, type: "link", active: false, selected: false, title: "Blog Detail" },
							{ id: 96, path: `${ import.meta.env.BASE_URL }pagecomponent/blog/blogedit`, type: "link", active: false, selected: false, title: "Edit Blog" },

						]
					},
					{
						id: 97, title: "Mail", type: "sub", active: false, selected: false, children: [

							{ id: 98, path: `${ import.meta.env.BASE_URL }pagecomponent/mail/mainMail`, type: "link", active: false, selected: false, title: "Mail" },
							{ id: 99, path: `${ import.meta.env.BASE_URL }pagecomponent/mail/chat`, type: "link", active: false, selected: false, title: "Chat" },
							{ id: 100, path: `${ import.meta.env.BASE_URL }pagecomponent/mail/mailsettings`, type: "link", active: false, selected: false, title: "Mail-settings" },

						]
					},
					{
						id: 101, title: "E-Commerce", type: "sub", active: false, selected: false, children: [

							{ id: 102, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/product`, type: "link", active: false, selected: false, title: "Products" },
							{ id: 103, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/productlist`, type: "link", active: false, selected: false, title: "Product list" },
							{ id: 104, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/addproduct`, type: "link", active: false, selected: false, title: "Add Product" },
							{ id: 105, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/editproduct`, type: "link", active: false, selected: false, title: "Edit Product" },
							{ id: 106, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/productdetails`, type: "link", active: false, selected: false, title: "Products Details" },
							{ id: 107, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/cart`, type: "link", active: false, selected: false, title: "Cart" },
							{ id: 108, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/checkout`, type: "link", active: false, selected: false, title: "Checkout" },
							{ id: 109, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/orders`, type: "link", active: false, selected: false, title: "Orders" },
							{ id: 110, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/orderdetails`, type: "link", active: false, selected: false, title: "Order Details" },
							{ id: 111, path: `${ import.meta.env.BASE_URL }pagecomponent/Ecommerce/wishlist`, type: "link", active: false, selected: false, title: "Wishlist" },

						]
					},
					{ id: 112, path: `${ import.meta.env.BASE_URL }pagecomponent/aboutus`, title: "About Us", type: "link", active: false, selected: false },
					{ id: 113, path: `${ import.meta.env.BASE_URL }pagecomponent/contacts`, title: "Contacts", type: "link", active: false, selected: false },
					{ id: 114, path: `${ import.meta.env.BASE_URL }pagecomponent/pricingtables`, title: "Pricing Tables", type: "link", active: false, selected: false },
					{ id: 115, path: `${ import.meta.env.BASE_URL }pagecomponent/timeline`, title: "Timeline", type: "link", active: false, selected: false },
					{ id: 116, path: `${ import.meta.env.BASE_URL }pagecomponent/team`, title: "Team", type: "link", active: false, selected: false },
					{ id: 117, path: `${ import.meta.env.BASE_URL }pagecomponent/landing`, title: "Landing", type: "link", active: false, selected: false },
					{ id: 118, path: `${ import.meta.env.BASE_URL }pagecomponent/todolist`, title: "To-do List", type: "link", active: false, selected: false },
					{ id: 119, path: `${ import.meta.env.BASE_URL }pagecomponent/tasks`, title: "Tasks", type: "link", active: false, selected: false },
					{ id: 120, path: `${ import.meta.env.BASE_URL }pagecomponent/reviews`, title: "Reviews", type: "link", active: false, selected: false },
					{ id: 121, path: `${ import.meta.env.BASE_URL }pagecomponent/faqs`, title: "Faqs", type: "link", active: false, selected: false },
					{ id: 122, path: `${ import.meta.env.BASE_URL }pagecomponent/Contactus`, title: "Contact Us", type: "link", active: false, selected: false },
					{ id: 123, path: `${ import.meta.env.BASE_URL }pagecomponent/terms&conditions`, title: "Terms & Conditions", type: "link", active: false, selected: false },
					{ id: 124, path: `${ import.meta.env.BASE_URL }pagecomponent/emptypages`, title: "EmptyPage", type: "link", active: false, selected: false },
				]
			},
			{
				id: 125, icon: IconsSvg, title: "Icons", type: "sub", active: false, selected: false, children: [

					{ id: 126, path: `${ import.meta.env.BASE_URL }icon/tablericons`, type: "link", active: false, selected: false, title: "Tabler Icons" },
					{ id: 127, path: `${ import.meta.env.BASE_URL }icon/remixicons`, type: "link", active: false, selected: false, title: "Remix Icons" },
				]
			},
			{
				id: 128, icon: AuthenticationSvg, title: "Authentication", type: "sub", active: false, selected: false, children: [

					{
						id: 129, type: "sub", active: false, selected: false, title: "Sign In", children: [

							{ id: 130, path: `${ import.meta.env.BASE_URL }Authentication/signin/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 131, path: `${ import.meta.env.BASE_URL }Authentication/signin/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 132, path: `${ import.meta.env.BASE_URL }Authentication/signin/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{
						id: 133, type: "sub", active: false, selected: false, title: "Sign Up", children: [

							{ id: 134, path: `${ import.meta.env.BASE_URL }Authentication/signup/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 135, path: `${ import.meta.env.BASE_URL }Authentication/signup/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 136, path: `${ import.meta.env.BASE_URL }Authentication/signup/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{
						id: 137, type: "sub", active: false, selected: false, title: "Create Password", children: [

							{ id: 138, path: `${ import.meta.env.BASE_URL }Authentication/createpassword/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 139, path: `${ import.meta.env.BASE_URL }Authentication/createpassword/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 140, path: `${ import.meta.env.BASE_URL }Authentication/createpassword/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{
						id: 141, type: "sub", active: false, selected: false, title: "Forget Password", children: [

							{ id: 142, path: `${ import.meta.env.BASE_URL }Authentication/forgetpassword/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 143, path: `${ import.meta.env.BASE_URL }Authentication/forgetpassword/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 144, path: `${ import.meta.env.BASE_URL }Authentication/forgetpassword/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{
						id: 145, type: "sub", active: false, selected: false, title: "Reset Password", children: [

							{ id: 146, path: `${ import.meta.env.BASE_URL }Authentication/resetpassword/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 147, path: `${ import.meta.env.BASE_URL }Authentication/resetpassword/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 148, path: `${ import.meta.env.BASE_URL }Authentication/resetpassword/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{
						id: 149, type: "sub", active: false, selected: false, title: "Lock Screen", children: [

							{ id: 150, path: `${ import.meta.env.BASE_URL }Authentication/lockscreen/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 151, path: `${ import.meta.env.BASE_URL }Authentication/lockscreen/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 152, path: `${ import.meta.env.BASE_URL }Authentication/lockscreen/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{
						id: 153, type: "sub", active: false, selected: false, title: "Two-step-verification", children: [

							{ id: 154, path: `${ import.meta.env.BASE_URL }Authentication/twostepverification/basic`, type: "link", active: false, selected: false, title: "Basic" },
							{ id: 155, path: `${ import.meta.env.BASE_URL }Authentication/twostepverification/cover1`, type: "link", active: false, selected: false, title: "Cover-1" },
							{ id: 156, path: `${ import.meta.env.BASE_URL }Authentication/twostepverification/cover2`, type: "link", active: false, selected: false, title: "Cover-2" },
						]
					},
					{ id: 157, path: `${ import.meta.env.BASE_URL }Authentication/undermaintenance`, type: "link", active: false, selected: false, title: "Under Maintainance" },
					{ id: 158, path: `${ import.meta.env.BASE_URL }Authentication/underconstruction`, type: "link", active: false, selected: false, title: "Under Construction" },
					{ id: 159, path: `${ import.meta.env.BASE_URL }Authentication/commingsoon`, type: "link", active: false, selected: false, title: "Coming Soon" },

					{
						id: 160, type: "sub", active: false, selected: false, title: "Error Pages", children: [

							{ id: 161, path: `${ import.meta.env.BASE_URL }Authentication/errorpage/error404`, type: "link", active: false, selected: false, title: "404 Error" },
							{ id: 162, path: `${ import.meta.env.BASE_URL }Authentication/errorpage/error500`, type: "link", active: false, selected: false, title: "500 Error" },
						]
					},
				]
			},
		]
	},

];
export default MenuItems
