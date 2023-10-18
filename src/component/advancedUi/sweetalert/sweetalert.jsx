import React from "react";
import Swal from "sweetalert2";
import images from '../../../assets/img/brand-logos/desktop-logo.png'
import PageHeader from "../../../layout/layoutsection/pageHeader/pageHeader";
// import 'animate.css';
const Sweetalert = () => {
	function Basicsweetalert() {
		Swal.fire({
			text: " Welcome to Your Admin Page",
			allowOutsideClick: false,
		});
	}

	function Dangersweetalert() {
		Swal.fire({
			// text: " Welcome to Your Admin Page",
			allowOutsideClick: false,
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href="">Why do I have this issue?</a>'
		});
	}

	function Imagesweetalert() {
		Swal.fire({
			// text: " Welcome to Your Admin Page",
			allowOutsideClick: false,
			imageUrl: images,
			// imageHeight: 40,
			imageAlt: 'Template Logo'
		});
	}
	
	function Image3dsweetalert() {
		Swal.fire({
			title: 'Do you want to save the changes?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Save',
			denyButtonText: `Don't save`,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
			  Swal.fire('Saved!', '', 'success')
			} else if (result.isDenied) {
			  Swal.fire('Changes are not saved', '', 'info')
			}
		  })
	}

	function Aminationsweetalert() {
		Swal.fire({
			title: 'I will shake when you click outside!',
			allowOutsideClick: () => {
			  const popup = Swal.getPopup()
			  popup.classList.remove('swal2-show')
			  setTimeout(() => {
				popup.classList.add('animate__animated', 'animate__headShake')
			  })
			  setTimeout(() => {
				popup.classList.remove('animate__animated', 'animate__headShake')
			  }, 500)
			  return false
			}
		  
		});
	}

	function Topend() {
		Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: true,
			timer: 1500
		  })
	  
	  }

	  function TopStart() {
		Swal.fire({
			position: 'top-start',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: true,
			timer: 1500
		  })
	  
	  }
	  
	  function BottomStart() {
		Swal.fire({
			position: 'bottom-start',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: true,
			timer: 1500
		  })
	  
	  }
	  function Bottomend() {
		Swal.fire({
			position: 'bottom-end',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: true,
			timer: 1500
		  })
	  
	  }
	  function Customziable() {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			// icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#5e76a6',
			cancelButtonColor: '#ef4444',
			confirmButtonText: 'Yes, delete it!'
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(
				'Deleted!',
				'Your file has been deleted.',
				'success'
			  )
			}
		  })
	  
	  }
	  function Autoalert() {
		let timerInterval
Swal.fire({
  title: 'Auto close alert!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
  }
})
	  }
	  function Ajaxcalling() {
		Swal.fire({
			title: 'Submit your username',
			input: 'text',
			inputAttributes: {
			  autocapitalize: 'off'
			},
			showCancelButton: true,
			confirmButtonText: 'Look up',
			showLoaderOnConfirm: true,
			preConfirm: (login) => {
			  return fetch(`//api.github.com/users/${login}`)
				.then(response => {
				  if (!response.ok) {
					throw new Error(response.statusText)
				  }
				  return response.json()
				})
				.catch(error => {
				  Swal.showValidationMessage(
					`Request failed: ${error}`
				  )
				})
			},
			allowOutsideClick: () => !Swal.isLoading()
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire({
				title: `${result.value.login}'s avatar`,
				imageUrl: result.value.avatar_url
			  })
			}
		  })
	  }
	

	  function Style1() {
		Swal.fire(
		   'The Internet?',
		   'That thing is still around?',
		   'question'
		 )
	 }

	  function Style2() {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#5e76a6',
			cancelButtonColor: '#ef4444',
			confirmButtonText: 'Yes, delete it!'
		  }).then((result) => {
			if (result.isConfirmed) {
			  Swal.fire(
				'Deleted!',
				'Your file has been deleted.',
				'success'
			  )
			}
		  })
	 }

	  function Style3() {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
			  confirmButton: 'ti-btn bg-secondary text-white hover:bg-secondary focus:ring-secondary dark:focus:ring-offset-secondary',
			  cancelButton: 'ti-btn bg-danger text-white hover:bg-danger focus:ring-danger dark:focus:ring-offset-danger'
			},
			buttonsStyling: false
		  })
	  
		  swalWithBootstrapButtons.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, cancel!',
			reverseButtons: true
		  }).then((result) => {
			if (result.isConfirmed) {
			  swalWithBootstrapButtons.fire(
				'Deleted!',
				'Your file has been deleted.',
				'success'
			  )
			} else if (
			  /* Read more about handling dismissals below */
			  result.dismiss === Swal.DismissReason.cancel
			) {
			  swalWithBootstrapButtons.fire(
				'Cancelled',
				'Your imaginary file is safe :)',
				'error'
			  )
			}
		  })
	 }
	return (
		<div>
<PageHeader currentpage="Sweetalert" activepage="Advanced UI" mainpage="Sweetalert" />

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn" aria-label="Try me! Example: A basic message"
								onClick={Basicsweetalert}
								id="basic">
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Danger Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary"
								onClick={Dangersweetalert}
								aria-label="Try me! Example: A modal with a title, an error icon, a text, and a footer"
								id="error-sweetalert">
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Image Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary"
							onClick={Imagesweetalert}

								aria-label="Try me! Example: A modal window with a long content inside" id="image-sweetalert">
								Try me!

							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Sweetalert With 3Buttons</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary" aria-label="Try me! Example: A dialog with three buttons" 
							onClick={Image3dsweetalert}
							id="sweetalert2"
								>
								Try me!
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Sweetalert With Animation</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary" aria-label="Try me!"
								id="sweetalert3"
								onClick={Aminationsweetalert}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Sweetalert style 1</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary" aria-label="Try me! Example: A title with a text under"
								id="sweetalert1" onClick={Style1}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Sweetalert style-2</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="confirm-btn" onClick={Style2}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Sweetalert style-3</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="sweetalert4" onClick={Style3}>
								Try me!
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-End Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="top-end" onClick={Topend}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Top-Start Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="top-start"
								onClick={TopStart}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bottom-Start Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="bottom-start"
								onClick={BottomStart}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-3">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Bottom-End Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="bottom-end" onClick={Bottomend}> 
								Try me!
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-5">
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">A message with customization</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A custom positioned dialog" id="customized-btn" onClick={Customziable}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Timer Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn"
								aria-label="Try me! Example: A message with auto close timer" id="timer-btn" 
								onClick={Autoalert}>
								Try me!
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Ajax loader Sweetalert</h5>
						</div>
						<div className="box-body text-center">
							<button type="button" className="ti-btn ti-btn-primary show-example-btn" aria-label="Try me! Example: AJAX request"
								id="ajax-btn" onClick={Ajaxcalling}>
								Try me!
							</button>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
export default Sweetalert;
