/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import ALLImages from "../../../common/imagesData";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Alerts = () => {
	return (
		<div>
          <PageHeader currentpage="Alerts" activepage="Components" mainpage="Alerts" />
			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Alerts
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary/10 border border-primary/10 alert text-primary" role="alert">
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-secondary/10 border border-secondary/10 alert text-secondary" role="alert">
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-danger/10 border border-danger/10 alert text-danger" role="alert">
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-warning/10 border border-warning/10 alert text-warning" role="alert">
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-info/10 border border-info/10 alert text-info" role="alert">
								<span className="font-bold">info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-success/10 border border-success/10 alert text-success" role="alert">
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white/[.1] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 alert" role="alert">
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-gray-800/[.1] border border-gray-200 text-gray-600 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white alert"
								role="alert">
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Basic Alerts with Links
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary/10 border border-primary/10 alert text-primary" role="alert">A simple primary
                  alert with <Link to="#" className="font-bold text-primary">an example link</Link> Give it a click if you like.
							</div>
							<div className="bg-secondary/10 border border-secondary/10 alert text-secondary" role="alert">A simple
                  secondary alert with <Link to="#" className="font-bold text-secondary">an example link</Link> Give it a click
                  if you like.
							</div>
							<div className="bg-danger/10 border border-danger/10 alert text-danger" role="alert">A simple danger alert
                  with <Link to="#" className="font-bold text-danger">an example link</Link> Give it a click if you like.
							</div>
							<div className="bg-warning/10 border border-warning/10 alert text-warning" role="alert">A simple warning
                  alert with <Link to="#" className="font-bold text-warning">an example link</Link> Give it a click if you like.
							</div>
							<div className="bg-info/10 border border-info/10 alert text-info" role="alert">A simple info alert with <Link
								to="#" className="font-bold text-info">an example link</Link> Give it a click if you like.
							</div>
							<div className="bg-success/10 border border-success/10 alert text-success" role="alert">A simple success
                  alert with <Link to="#" className="font-bold text-success">an example link</Link> Give it a click if you like.
							</div>
							<div className="bg-white/[.1] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 alert" role="alert">A
                  simple Light alert with <Link to="#" className="font-bold text-gray-600 dark:text-white">an example
                    link</Link> Give it a click if you like.
							</div>
							<div
								className="bg-gray-800/[.1] border border-gray-200 text-gray-600 dark:bg-gray-900/[.1] dark:border-gray-700 dark:text-white alert"
								role="alert">A simple Dark alert with <Link to="#" className="font-bold text-gray-600 dark:text-white">an
                    example link</Link> Give it a click if you like.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Solid Colored Alerts
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary border border-primary text-white alert" role="alert">
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-secondary border border-secondary text-white alert" role="alert">
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-danger border border-danger text-white alert" role="alert">
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-warning border border-warning text-white alert" role="alert">
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-info  border border-info text-white alert" role="alert">
								<span className="font-bold">Info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-success  border border-success text-white alert" role="alert">
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-gray-100 border border-gray-200 text-gray-600 alert" role="alert">
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-black/20 border border-white/10 text-white alert dark:bg-gray-900 dark:text-white"
								role="alert">
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Outline Alerts
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-white dark:bg-bgdark border border-primary alert text-primary" role="alert">
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-secondary alert text-secondary" role="alert">
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-danger alert text-danger" role="alert">
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-warning alert text-warning" role="alert">
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-info alert text-info" role="alert">
								<span className="font-bold">info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-success alert text-success" role="alert">
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-200 dark:border-white/10 alert text-gray-600 dark:text-white/70"
								role="alert">
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-900 alert text-gray-900 dark:border-white/10 dark:text-gray-100"
								role="alert">
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                 Rounded Solid Colored Alerts
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary border border-primary text-white alert rounded-full px-6" role="alert">
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-secondary border border-secondary text-white alert rounded-full px-6" role="alert">
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-danger border border-danger text-white alert rounded-full px-6" role="alert">
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-warning border border-warning text-white alert rounded-full px-6" role="alert">
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-info  border border-info text-white alert rounded-full px-6" role="alert">
								<span className="font-bold">Info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-success  border border-success text-white alert rounded-full px-6" role="alert">
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-gray-100 border border-gray-200 text-gray-600 alert rounded-full px-6" role="alert">
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-black/20 border border-white/10 text-white alert dark:bg-gray-900 dark:text-white rounded-full px-6"
								role="alert">
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Rounded Outline Alerts
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-white dark:bg-bgdark border border-primary alert rounded-full  px-6 text-primary" role="alert">
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-secondary alert rounded-full px-6 text-secondary"
								role="alert">
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-danger alert rounded-full px-6 text-danger" role="alert">
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-warning alert rounded-full px-6 text-warning" role="alert">
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-info alert rounded-full px-6 text-info" role="alert">
								<span className="font-bold">info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-success alert rounded-full px-6 text-success" role="alert">
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-200 dark:border-white/10 alert rounded-full px-6 text-gray-600 dark:text-white/70"
								role="alert">
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-900 alert rounded-full px-6 text-gray-900 dark:border-gray-900 dark:text-gray-100"
								role="alert">
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Solid Colored Alerts With Image
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary border border-primary text-white alert rounded-md" role="alert">
								<img src= {ALLImages('jpg59')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-secondary border border-secondary text-white alert rounded-md" role="alert">
								<img src= {ALLImages('jpg57')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-danger border border-danger text-white alert rounded-md" role="alert">
								<img src= {ALLImages('jpg60')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-warning border border-warning text-white alert rounded-md" role="alert">
								<img src= {ALLImages('jpg62')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-info  border border-info text-white alert rounded-md" role="alert">
								<img src= {ALLImages('jpg72')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-success  border border-success text-white alert rounded-md" role="alert">
								<img src= {ALLImages('jpg70')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-gray-100 border border-gray-200 text-gray-600 alert rounded-md" role="alert">
								<img src= {ALLImages('jpg68')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-black/20 border border-white/10 text-white alert dark:bg-gray-900 dark:text-white rounded-md"
								role="alert">
								<img src= {ALLImages('jpg61')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Outline Alerts With Image
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-white dark:bg-bgdark border border-primary alert rounded-md text-primary" role="alert">
								<img src= {ALLImages('jpg59')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-secondary alert rounded-md text-secondary"
								role="alert">
								<img src= {ALLImages('jpg57')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-danger alert rounded-md text-danger" role="alert">
								<img src= {ALLImages('jpg60')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-warning alert rounded-md text-warning" role="alert">
								<img src= {ALLImages('jpg62')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-info alert rounded-md text-info" role="alert">
								<img src= {ALLImages('jpg72')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-success alert rounded-md text-success" role="alert">
								<img src= {ALLImages('jpg70')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-200 dark:border-white/10 alert rounded-md text-gray-600 dark:text-white/70"
								role="alert">
								<img src= {ALLImages('jpg68')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-900 alert rounded-md text-gray-900 dark:border-white/10 dark:text-gray-100"
								role="alert">
								<img src= {ALLImages('jpg61')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-md ring-0" alt="user-img"/>
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Rounded Solid Colored Alerts With Image
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary border border-primary text-white alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg59')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-secondary border border-secondary text-white alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg57')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-danger border border-danger text-white alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg60')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-warning border border-warning text-white alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg62')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-info  border border-info text-white alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg72')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-success  border border-success text-white alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg70')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-gray-100 border border-gray-200 text-gray-600 alert rounded-full px-6" role="alert">
								<img src= {ALLImages('jpg68')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-black/20 border border-white/10 text-white alert dark:bg-gray-900 dark:text-white rounded-full px-6"
								role="alert">
								<img src= {ALLImages('jpg61')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Rounded Outline Alerts With Image
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-white dark:bg-bgdark border border-primary alert rounded-full px-6 text-primary" role="alert">
								<img src= {ALLImages('jpg59')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Primary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-secondary alert rounded-full px-6 text-secondary"
								role="alert">
								<img src= {ALLImages('jpg57')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Secondary</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-danger alert rounded-full px-6 text-danger" role="alert">
								<img src= {ALLImages('jpg60')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Danger</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-warning alert rounded-full px-6 text-warning" role="alert">
								<img src= {ALLImages('jpg62')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Warning</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-info alert rounded-full px-6 text-info" role="alert">
								<img src= {ALLImages('jpg72')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">info</span> alert! You should check in on some of those fields below.
							</div>
							<div className="bg-white dark:bg-bgdark border border-success alert rounded-full px-6 text-success" role="alert">
								<img src= {ALLImages('jpg70')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Success</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-200 dark:border-white/10 alert rounded-full px-6 text-gray-600 dark:text-white/70"
								role="alert">
								<img src= {ALLImages('jpg68')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Light</span> alert! You should check in on some of those fields below.
							</div>
							<div
								className="bg-white dark:bg-bgdark border border-gray-900 alert rounded-full px-6 text-gray-900 dark:border-gray-900 dark:text-gray-100"
								role="alert">
								<img src= {ALLImages('jpg61')} className="avatar w-6 h-6 ltr:mr-2 rtl:ml-2 rounded-full ring-0" alt="user-img"/>
								<span className="font-bold">Dark</span> alert! You should check in on some of those fields below.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Alerts With Description
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-yellow-50 border border-yellow-200 alert mb-0" role="alert">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-4 w-4 text-yellow-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16"
											height="16" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
										</svg>
									</div>
									<div className="ltr:ml-2 rtl:mr-2">
										<h3 className="text-sm text-yellow-800 font-semibold">
                        Cannot connect to the database
										</h3>
										<div className="mt-1 text-sm text-yellow-700">
                        We are unable to save any progress at this time.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Alerts With Link on Right
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-gray-50 border border-gray-200 alert mb-0" role="alert">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-4 w-4 text-gray-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16"
											height="16" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
										</svg>
									</div>
									<div className="flex-1 md:flex md:justify-between ltr:ml-2 rtl:mr-2">
										<p className="text-sm text-gray-700">
                        A new software update is available. See what's new in version 3.0.7
										</p>
										<p className="text-sm mt-3 md:mt-0 ltr:md:ml-6 ltr:md:mr-6">
											<Link className="text-gray-700 hover:text-gray-500 font-medium whitespace-nowrap" to="#">Details</Link>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Alerts With Actions
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-primary/10 border border-primary alert mb-0" role="alert">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-4 w-4 text-primary mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
										</svg>
									</div>
									<div className="ltr:ml-2 rtl:mr-2">
										<h3 className="text-gray-800 dark:text-gray-200 font-semibold">
                        YouTube would like you to send notifications
										</h3>
										<div className="mt-2 text-sm text-gray-600 dark:text-white/70">
                        Notifications may include alerts, sounds and icon badges. These can be configured in Settings.
										</div>
										<div className="mt-4">
											<div className="flex space-x-3 rtl:space-x-reverse">
												<button type="button"
													className="inline-flex px-2 py-1 justify-center underline items-center gap-2 rounded-md border border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm">
                            Don't allow
												</button>
												<button type="button"
													className="inline-flex px-2 py-1 justify-center underline items-center gap-2 rounded-md border border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm">
                            Allow
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Alerts With List
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-red-50 border border-red-200 alert mb-0" role="alert">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-4 w-4 text-red-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
										</svg>
									</div>
									<div className="ltr:ml-2 rtl:mr-2">
										<h3 className="text-sm text-red-800 font-semibold">
                        A problem has been occurred while submitting your data.
										</h3>
										<div className="mt-2 text-sm text-red-700">
											<ul className="list-disc space-y-1 ltr:pl-5 rtl:pr-5">
												<li>
                            This username is already in use
												</li>
												<li>
                            Email field can't be empty
												</li>
												<li>
                            Please enter a valid phone number
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-6">
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Alerts With Dismissable
							</h5>
						</div>
						<div className="box-body">
							<div id="dismiss-alert"
								className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-teal-50 border border-teal-200 alert mb-0"
								role="alert">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-4 w-4 text-teal-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16"
											height="16" fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
										</svg>
									</div>
									<div className="ltr:ml-3 rtl:mr-3">
										<div className="text-sm text-teal-800 font-medium">
                        File has been successfully uploaded.
										</div>
									</div>
									<div className="ltr:pl-3 rtl:pr-3 ltr:ml-auto rtl:mr-auto">
										<div className="mx-1 my-auto">
											<button type="button"
												className="inline-flex bg-teal-50 rounded-md text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
												data-hs-remove-element="#dismiss-alert">
												<span className="sr-only">Dismiss</span>
												<svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
													xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
													<path
														d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
														fill="currentColor" />
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 xl:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">
                  Alerts With Discovery
							</h5>
						</div>
						<div className="box-body">
							<div className="bg-white border shadow-lg alert mb-0 dark:bg-bgdark dark:border-white/10" role="alert">
								<div className="flex">
									<div className="flex-shrink-0">
										<svg className="h-4 w-4 text-primary mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
											fill="currentColor" viewBox="0 0 16 16">
											<path
												d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
										</svg>
									</div>
									<div className="ltr:ml-2 rtl:mr-2">
										<h3 className="text-gray-800 font-semibold dark:text-white">
                        New version published
										</h3>
										<p className="mt-2 text-sm text-gray-700 dark:text-white/70">
                        Chris Lynch published a new version of this page. Refresh to see the changes.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Alerts;
