import React from "react";
import ALLImages from "../../../common/imagesData";
import { Link } from 'react-router-dom'

const TermsConditions = () => {
	return (
		<div>
      <div className="flex relative before:bg-primary/80 before:absolute before:w-full before:h-full">
        <img src={ALLImages('png118')} alt="" className="h-[400px] w-full rounded-sm" id="profile-img2"/>
      </div>
      <div className="absolute top-24 inset-x-1/4 text-center space-y-3">
        <div className="text-white space-y-3">
          <p className="text-xl text-white/70">Template</p>
          <h1 className="text-4xl sm:text-5xl font-bold">Terms &amp; Conditions</h1>
          <p className="text-sm text-white/50">Updated On :17-05-2023</p>
        </div>
      </div>


      <div className="main-content -mt-20">

        <div className="container mx-auto relative mb-10">

          <div className="box">
            <div className="box-header">
              <h2 className="font-semibold text-base text-primary text-center uppercase">Welcome to the Synto Admin Template.
                Please review the following basic terms &amp; conditions.
                Please note that your use of our template has some important terms to follow and adhere to.</h2>
            </div>
            <div className="box-body" id="terms">
              <div className="mb-5">
                <p className="mb-3 text-gray-500 dark:text-white/70">
                    <span className="font-bold text-gray-500 dark:text-white/70">If you stay in the USA </span>the Synto <Link className="text-primary" to="#"><u>Terms and Conditions</u></Link> consists of below rules and <Link className="text-primary" to="#"><u>User Agreements</u></Link> consists of below policies <Link className="text-primary" to="#"><u>Synto Rules &amp; Privacy Policies</u></Link> incorporated with the below conditions.
                </p>
                <p className="mb-0 text-gray-500 dark:text-white/70">
                    <span className="font-bold text-gray-500 dark:text-white/70">If you stay any where in the world other than USA </span>the Synto <Link className="text-primary" to="#"><u>Terms and Conditions</u></Link> consists of below rules and <Link className="text-primary" to="#"><u>User Agreements</u></Link> consists of below policies <Link className="text-primary" to="#"><u>Synto Rules &amp; Privacy Policies</u></Link> incorporated with the below conditions.
                </p>
              </div>
              <h2 className="font-semibold text-lg mb-4">Privacy Policy</h2>
              <div className="space-y-4 ltr:ml-6 rtl:mr-6 mb-6">
                <div className="">
                  <p className="mb-2 font-semibold text-sm">1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className="text-sm text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="">
                  <p className="mb-2 font-semibold text-sm">2 - Etiam id ante suscipit, imperdiet urna vel, posuere tellus.</p>
                  <p className="text-sm text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="">
                  <p className="mb-2 font-semibold text-sm">3 - Sed eu est finibus, placerat purus in, egestas diam..</p>
                  <p className="mb-2 text-sm text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                  <p className="text-sm text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <div className="">
                  <p className="mb-2 font-semibold text-sm">4 - Quisque sed magna iaculis, convallis dui eget, consectetur lectus..</p>
                  <p className="mb-2 text-sm text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                  <ul className="list-disc list-inside text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Etiam id ante suscipit, imperdiet urna vel, posuere tellus.</li>
                    <li>Sed eu est finibus, placerat purus in, egestas diam.</li>
                    <li>Quisque sed magna iaculis, convallis dui eget, consectetur lectus.</li>
                    <li>Suspendisse a mauris a magna placerat consectetur ac a elit.</li>
                    <li>Nullam ut nulla faucibus, elementum mi nec, dictum massa.</li>
                    <li>Cras tincidunt augue non blandit convallis.</li>
                    <li>Etiam vitae nibh in nisi scelerisque vestibulum in eu nibh.</li>
                    <li>Nulla ac augue eget quam rhoncus imperdiet.</li>
                    <li>Donec vel nulla mollis, imperdiet eros eu, cursus nisl.</li>
                  </ul>
                </div>
                <div className="">
                  <p className="mb-2 font-semibold text-sm">5 - Suspendisse a mauris a magna placerat consectetur ac a elit..</p>
                  <p className="mb-2 text-sm text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">Ut lacinia lacus et massa euismod, id ultricies leo fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris mattis pellentesque justo, a elementum augue vestibulum non. Donec tempor ullamcorper nulla, quis pharetra elit iaculis non. Nunc faucibus ac dolor non blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nulla purus, pellentesque sed dapibus vel, placerat sit amet elit. Praesent sit amet euismod enim. Ut consectetur turpis in ornare placerat. Cras sem velit, feugiat eget libero at, rhoncus suscipit ligula. Donec quis ultrices ex.</p>
                  <ul className="list-disc list-inside text-gray-500 dark:text-white/70 ltr:ml-6 rtl:mr-6">
                    <li>Vivamus semper libero sed massa porta, et porttitor nunc sollicitudin.</li>
                    <li>Aliquam condimentum lacus in ipsum efficitur pretium.</li>
                    <li>Donec hendrerit ante varius, rhoncus urna maximus, rhoncus dolor.</li>
                    <li>Donec sit amet ligula a sapien interdum porttitor.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>


    </div>
	);
};
export default TermsConditions;
