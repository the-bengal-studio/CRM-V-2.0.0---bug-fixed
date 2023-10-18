import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";

const Notification = () => {

	//Basic Notification

	const BasicNotify = () => toast.success('Welcome to Synto Admin Dashboard!', {
		position: 'top-left'
	});
	const BasicNotify2 = () => toast.success('Welcome to Synto Admin Dashboard!', {
		position: 'top-center'
	});
	const BasicNotify3 = () => toast.success('Welcome to Synto Admin Dashboard!', {
		position: 'top-right'
	});
	const BasicNotify4 = () => toast.success('Welcome to Synto Admin Dashboard!', {
		position: 'bottom-left'
	});
	const BasicNotify5 = () => toast.success('Welcome to Synto Admin Dashboard!', {
		position: 'bottom-center'
	});
	const BasicNotify6 = () => toast.success('Welcome to Synto Admin Dashboard!', {
		position: 'bottom-right'
	});


	//Success Message

	const SuccessNotify = () => toast.success('Successfully toasted!', {
		reverseOrder: false
	});
	const ErrorgNotify = () => toast.error('Not Working toasted!', {
		reverseOrder: false, position: 'top-right'
	});

	return (
		<div>
			<PageHeader currentpage="Notification" activepage="Advanced Ui" mainpage="Notification" />
			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Left</h5>
						</div>
						<div className="box-body text-center">
							<Link to='#' className="ti-btn ti-btn-primary" onClick={() => BasicNotify()}><Toaster
								reverseOrder={false}
								gutter={8}
								containerClassName=""
								containerStyle={{}}
								toastOptions={{
									// Define default options
									className: '',
									duration: 5000,
									style: {
										background: '#363636',
										color: '#fff',
									},

									// Default options for specific types
									success: {
										duration: 3000,
										theme: {
											primary: 'green',
											secondary: 'black',
										},
									},
								}}
							/>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Center</h5>
						</div>
						<div className="box-body text-center">
							<Link to='#' className="ti-btn ti-btn-primary" onClick={() => BasicNotify2()}><Toaster
								reverseOrder={false}
								gutter={8}
								containerClassName=""
								containerStyle={{}}
								toastOptions={{
									// Define default options
									className: '',
									duration: 5000,
									style: {
										background: '#363636',
										color: '#fff',
									},

									// Default options for specific types
									success: {
										duration: 3000,
										theme: {
											primary: 'green',
											secondary: 'black',
										},
									},
								}}
							/>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Right</h5>
						</div>
						<div className="box-body text-center">
							<Link to='#' className="ti-btn ti-btn-primary" onClick={() => BasicNotify3()}><Toaster
								reverseOrder={false}
								gutter={8}
								containerClassName=""
								containerStyle={{}}
								toastOptions={{
									// Define default options
									className: '',
									duration: 5000,
									style: {
										background: '#363636',
										color: '#fff',
									},

									// Default options for specific types
									success: {
										duration: 3000,
										theme: {
											primary: 'green',
											secondary: 'black',
										},
									},
								}}
							/>Basic Notification</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">

				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bottom-Left</h5>
						</div>
						<div className="box-body text-center">
							<Link to='#' className="ti-btn ti-btn-primary" onClick={() => BasicNotify4()}><Toaster
								reverseOrder={false}
								gutter={8}
								containerClassName=""
								containerStyle={{}}
								toastOptions={{
									// Define default options
									className: '',
									duration: 5000,
									style: {
										background: '#363636',
										color: '#fff',
									},

									// Default options for specific types
									success: {
										duration: 3000,
										theme: {
											primary: 'green',
											secondary: 'black',
										},
									},
								}}
							/>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bottom-Center</h5>
						</div>
						<div className="box-body text-center">
							<Link to='#' className="ti-btn ti-btn-primary" onClick={() => BasicNotify5()}><Toaster
								reverseOrder={false}
								gutter={8}
								containerClassName=""
								containerStyle={{}}
								toastOptions={{
									// Define default options
									className: '',
									duration: 5000,
									style: {
										background: '#363636',
										color: '#fff',
									},

									// Default options for specific types
									success: {
										duration: 3000,
										theme: {
											primary: 'green',
											secondary: 'black',
										},
									},
								}}
							/>Basic Notification</Link>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bottom-Right</h5>
						</div>
						<div className="box-body text-center">
							<Link to='#' className="ti-btn ti-btn-primary" onClick={() => BasicNotify6()}><Toaster
								reverseOrder={false}
								gutter={8}
								containerClassName=""
								containerStyle={{}}
								toastOptions={{
									// Define default options
									className: '',
									duration: 5000,
									style: {
										background: '#363636',
										color: '#fff',
									},

									// Default options for specific types
									success: {
										duration: 3000,
										theme: {
											primary: 'green',
											secondary: 'black',
										},
									},
								}}
							/>Basic Notification</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Success Notification</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn  ti-btn-success" id="success" onClick={() => SuccessNotify()}>Success Notification</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-6">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title"> Error Notification</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-danger" id="error" onClick={() => ErrorgNotify()}>Error Notification</button>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};

export default Notification;
