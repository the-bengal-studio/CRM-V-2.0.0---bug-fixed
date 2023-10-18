import React from "react";
import ALLImages from "../../../../common/imagesData";
import PageHeader from "../../../../layout/layoutsection/pageHeader/pageHeader";

const Invoicedetails = () => {
	const print = () => {
		window.print();
	  }

	return (
		<div>
			<PageHeader currentpage="Invoice Details" activepage="Pages" mainpage="Invoice Details" />
			<div className= "grid grid-cols-12 gap-6 lg:max-w-4xl mx-auto">
				<div className= "col-span-12">
					<div className= "box">
						<div className= "box-body">
							<div className= "flex flex-col lg:flex-row justify-between mb-5 space-y-4">
								<div>
									<div className= "mb-2">
										<img src= {ALLImages('logo')} alt="logo" className= "flex dark:hidden"/>
										<img src= {ALLImages('dark')} alt="logo" className= "hidden dark:flex"/>
									</div>
									<div className= "mt-1">Cecilia Chapman</div>
									<div className= "mt-1">P.O. Box 283 8562 Fusce Rd., 20620</div>
									<div className= "mt-1">ypurdomain@example.com</div>
								</div>
								<div className= "text-end">
									<h3 className= "text-2xl text-primary uppercase font-semibold">Invoice</h3>
									<div className= "mt-1"><span className= "font-bold"> #INV-0033970</span></div>
									<div className= "mt-1">Created Date: <span className= "font-bold"> September 28 2022</span></div>
									<div className= "mt-1">Due Date:<span className= "font-bold"> September 28 2022</span></div>
								</div>
							</div>
							<hr className= "pb-5 dark:border-t-white/10"/>
							<div className= "flex flex-col lg:flex-row justify-between mb-5 space-y-4">
								<div className= "lg:col-span-6 col-span-12">
									<h3 className= "font-semibold text-xl">Billed To :</h3>
									<address className= "not-italic">
                                Cecilia Chapman<br/>
                                P.O. Box 283 8562 Fusce Rd., 20620<br/>
                                ypurdomain@example.com
									</address>
								</div>
								<div className= "lg:col-span-6 col-span-12 text-end">
									<h3 className= "font-semibold text-xl">Shipped To :</h3>
									<address className= "not-italic">
                                Cecilia Chapman<br/>
                                P.O. Box 283 8562 Fusce Rd., 20620<br/>
                                ypurdomain@example.com
									</address>
								</div>
							</div>
							<div className= "py-5">
								<div className= "overflow-auto lg:overflow-hidden">
									<table className= "ti-custom-table !border dark:border-white/10">
										<thead className= "bg-gray-100 dark:bg-black/20 overflow-hidden">
											<tr>
												<th scope="col" className= "">S.No</th>
												<th scope="col" className= "">Product</th>
												<th scope="col" className= "">Quantity</th>
												<th scope="col" className= "">Unit</th>
												<th scope="col" className= "!text-end">Amount</th>
											</tr>
										</thead>
										<tbody className= "">
											<tr>
												<td className= "">1</td>
												<td className= "">
													<span className= "font-bold">Logo Creation</span>
													<p className= "text-gray-500 dark:text-white/70">PhotoShop</p>
												</td>
												<td className= "font-semibold ">2</td>
												<td className= "">$60.00</td>
												<td className= "text-end font-medium">$120.00</td>
											</tr>
											<tr>
												<td className= "">2</td>
												<td className= "">
													<span className= "font-bold">Online Store Design &amp; Development</span>
													<p className= "text-gray-500 dark:text-white/70">Html</p>
												</td>
												<td className= "font-semibold ">3</td>
												<td className= "">$80.00</td>
												<td className= "text-end font-medium">$240.00</td>
											</tr>
											<tr>
												<td className= "">3</td>
												<td className= "">
													<span className= "font-bold">App Design</span>
													<p className= "text-gray-500 dark:text-white/70">Android Studio</p>
												</td>
												<td className= "font-semibold ">1</td>
												<td className= "">$40.00</td>
												<td className= "text-end font-medium">$40.00</td>
											</tr>
											<tr className= "!border-b-0">
												<td colSpan={3} className= "ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">
													<h3 className= "font-bold text-xl">Invoice Payment Method</h3>
												</td>
												<td className= "">Sub-Total</td>
												<td className= "!text-end">$700.00</td>
											</tr>
											<tr className= "!border-b-0 !border-t-0">
												<td colSpan={3} className= "ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">Account :<span className= "font-bold"> 000252522525253625</span> </td>
												<td className= "">Tax</td>
												<td className= "!text-end">3%</td>
											</tr>
											<tr className= "!border-b-0 !border-t-0">
												<td colSpan={3} className= "ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">Account Name : <span className= "font-bold"> Synto</span></td>
												<td className= "">Discount</td>
												<td className= "!text-end">20%</td>
											</tr>
											<tr  className= "!border-t-0">
												<td colSpan={3} className= "ltr:border-r rtl:border-l border-gray-200 dark:border-white/10">Bank Details :<span className= "font-bold"> Lorem Ipsum</span> </td>
												<td className= "">Total</td>
												<td className= "!text-end">$900.2</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className= "sm:grid grid-cols-12 gap-6 pb-5 space-y-5">
								<div className= "lg:col-span-6 col-span-12">
									<h3 className= "text-xl fon-bold mb-2">Terms And Conditions</h3>
									<p className= "text-gray-500 dark:text-white/70 font-light text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
								</div>
								<div className= "lg:col-span-6 col-span-12 text-end my-auto">
									<div className= "text-3xl text-primary">Synto</div>
									<h3 className= "font-semibold">Signature</h3>
								</div>
							</div>
							<hr className= "pb-5 dark:border-t-white/10"/>
							<div className= "flex justify-end">
								<button type="button" className= "w-20 !p-1 ti-btn ti-btn-primary" onClick={print}> Print</button>
								<button type="button" className= "w-20 !p-1 ti-btn ti-btn-secondary">Save</button>
								<button type="button" className= "w-20 !p-1 ti-btn ti-btn-danger">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Invoicedetails;
