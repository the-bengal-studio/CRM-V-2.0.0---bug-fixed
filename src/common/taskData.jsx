let Task1 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png71')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Zanex Laravel Project</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>05-12-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Admin
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-black/20 hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Design
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-black/20 hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-danger text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "20%" }} aria-valuenow={200} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>20%</span></p>
        </div>
        <div className="sm:flex">
            <span className="badge bg-success/10 text-success rounded-sm sm:mb-0 ">
                Low
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm sm:mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex sm:space-y-0 space-y-2">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>4</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>5</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg60')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg69')}
                    alt="Image Description" />
                <span
                    className="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">4+</span>
                </span>
            </div>
        </div>
    </div>
</div>

let Task2 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png69')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Tailwind Ui Web Application</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>20-09-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Tailwind
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Design
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-danger text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "30%" }} aria-valuenow={300} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>30%</span></p>
        </div>
        <div className="sm:flex">
            <span className="badge bg-danger/10 text-danger rounded-sm sm:mb-0">
                High
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm sm:mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex sm:space-y-0 space-y-2">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>4</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>3</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>2</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
            </div>
        </div>
    </div>
</div>

let Task3 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png76')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Spruha Vue Project</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>28-10-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Vue
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-danger text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "10%" }} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>10%</span></p>
        </div>
        <div className="sm:flex">
            <span className="badge bg-warning/10 text-warning rounded-sm sm:mb-0">
                Medium
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm sm:mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex sm:space-y-0 space-y-2">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg75')}
                    alt="Image Description" />
            </div>
        </div>
    </div>
</div>

let Task4 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png68')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Server side validation</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>20-10-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Angular
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-info text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "40%" }} aria-valuenow={400} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>40%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-warning/10 text-warning rounded-sm mb-0">
                Medium
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg75')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" />
            </div>
        </div>
    </div>
</div>

let Task5 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png70')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Designing Landing Page</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>20-10-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Angular
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-info text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "50%" }} aria-valuenow={500} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>50%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-success/10 text-success rounded-sm mb-0">
                Low
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg75')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" />
            </div>
        </div>
    </div>
</div>

let Task6 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png72')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">New Project Blueprint</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>30-11-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Angular
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-info text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "30%" }} aria-valuenow={300} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>30%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-info/10 text-info rounded-sm mb-0">
                Critical
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg75')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" /><span
                        className="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">2+</span>
                </span>
            </div>
        </div>
    </div>
</div>

let Task7 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png73')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">New Plugin Development</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>30-11-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    React
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-info text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "60%" }} aria-valuenow={600} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>60%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-danger/10 text-danger rounded-sm mb-0">
                High
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg75')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" /><span
                        className="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">10+</span>
                </span>
            </div>
        </div>
    </div>
</div>

let Task8 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png74')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Designing New Authentication Pages</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>30-11-2022</span></p>
                </div>
            </div>
            <div className="ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    React
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-warning text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "40%" }} aria-valuenow={400} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>40%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-danger/10 text-danger rounded-sm mb-0">
                High
            </span>
            <span className=" ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg71')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg75')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" /><span
                        className="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">15+</span>
                </span>
            </div>
        </div>
    </div>
</div>

let Task9 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png75')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Designing New Authentication Pages</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>30-11-2022</span></p>
                </div>
            </div>
            <div className="ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Justo kasd duo sanctus et elitr et, sed diam clita lorem sed eirmod, clita
                labore tempor et
                sanctus et ipsum stet, eos.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Laravel
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-warning text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "60%" }} aria-valuenow={600} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>60%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-warning/10 text-warning rounded-sm mb-0">
                Medium
            </span>
            <span className=" ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg62')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg58')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" /><span
                        className="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">5+</span>
                </span>
            </div>
        </div>
    </div>
</div>

let Task10 = <div className="box task-box">
    <div className="box-body space-y-4">
        <div className="flex">
            <div className="flex space-x-3 rtl:space-x-reverse">
                <img src={ALLImages('png77')}
                    className="p-1 h-full avatar avatar-sm bg-gray-100 dark:bg-black/20 rounded-sm" alt="logo" />
                <div className="my-auto hidden sm:block">
                    <h5 className="text-base font-semibold w-44 truncate">Documentation For New Template</h5>
                    <p className="text-gray-500 dark:text-white/70 text-xs my-auto flex space-x-1 rtl:space-x-reverse"><i
                        className="ri-calendar-line"></i><span>15-11-2022</span></p>
                </div>
            </div>
            <div className="ltr:ml-auto rtl:mr-auto hs-dropdown ti-dropdown [--placement:left-top]">
                <Link aria-label="anchor" to="#"
                    className="hs-dropdown-toggle ti-dropdown-toggle hover:bg-transparent dark:hover:bg-transparent inline-flex  !p-0 flex-shrink-0 justify-center items-center gap-2 w-full rounded-sm border-0 font-medium text-gray-500 shadow-none align-middle focus:outline-none focus:ring-0 focus:ring-offset-0 transition-all dark:text-white/70">
                    <i className="ri ri-more-2-line text-lg leading-none"></i>
                </Link>
                <div className="hs-dropdown-menu w-40 min-w-[10rem] mt-0 transition-none ti-dropdown-menu">
                    <Link className="ti-dropdown-item" to="#"><i className="ri-eye-line"></i>View</Link>
                    <Link className="ti-dropdown-item" to="#"><i className="ri-edit-2-line"></i>Edit</Link>
                    <Link className="task-remove ti-dropdown-item" to="#"><i
                        className="ri-delete-bin-6-line"></i>Delete</Link>
                </div>
            </div>
        </div>
        <div>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil adipisci tempora minus quaerat, rem eum, corporis at, dolor provident id quia similique corrupti sit? Tenetur obcaecati voluptas placeat? Alias, voluptatibus?.</p>
            <div>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Html
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
                <span className="badge bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-200 ltr:mr-1 rtl:ml-1">
                    Developing
                    <button aria-label="button" type="button"
                        className="flex-shrink-0 h-4 w-4 inline-flex items-center justify-center rounded-full text-gray-500 dark:text-white/70 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-black/20 dark:hover:text-white focus:outline-none focus:bg-gray-200 focus:text-gray-500">
                        <i className="ri-close-line"></i>
                    </button>
                </span>
            </div>
        </div>
        <div className="flex space-x-3 rtl:space-x-reverse">
            <div className="ti-main-progress h-2 bg-gray-200 dark:bg-black/20">
                <div className="ti-main-progress-bar bg-success text-[8px] text-white text-center" role="progressbar"
                    style={{ width: "100" }} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 dark:text-white/70 text-xs my-auto leading-[0]"><span>100%</span></p>
        </div>
        <div className="sm:flex space-y-2 sm:space-y-0">
            <span className="badge bg-danger/10 text-danger rounded-sm mb-0">
                High
            </span>
            <span className="ltr:ml-auto rtl:mr-auto badge bg-primary/10 text-primary rounded-sm mb-0">
                Due Date: 25-12-2022
            </span>
        </div>
    </div>
    <div className="box-footer">
        <div className="sm:flex space-y-2 sm:space-y-0">
            <div className="font-medium space-x-1 rtl:space-x-reverse my-auto">
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-attachment-line"></i><span>2</span></Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-chat-2-line"></i><span>1</span> </Link>
                <Link to="#"
                    className="text-xs leading-[0] inline-flex items-centertext-gray-500 dark:text-white/70 space-x-1 rtl:space-x-reverse rounded-full bg-gray-100 px-2 py-3 font-normal hover:bg-gray-300 focus:bg-gary-800 dark:bg-black/20 dark:hover:bg-bgdark"><i
                        className="ri-eye-line"></i><span>3</span></Link>
            </div>
            <div className="flex -space-x-2 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto">
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg62')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg59')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg58')}
                    alt="Image Description" />
                <img className="avatar w-6 h-6 rounded-full" src={ALLImages('jpg76')}
                    alt="Image Description" /><span
                        className="inline-flex items-center justify-center avatar w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
                    <span className="font-medium text-gray-500 leading-none dark:text-white/70">2+</span>
                </span>
            </div>
        </div>
    </div>
</div>


	  //Task content

	  export const Taskcontent = [
		{ id: "1", content: Task1 },
		{ id: "2", content: Task2 },
		{ id: "3", content: Task3 },
	  ];


      //Parent heading

	const taskStatus = {
		requested: {
		  name: "New project",
		  items: Taskcontent
		},
		toDo: {
		  name: "In progress",
		  items: []
		},
		inProgress: {
		  name: "Pending",
		  items: []
		},
		done: {
		  name: "Completed",
		  items: []
		}
	  };