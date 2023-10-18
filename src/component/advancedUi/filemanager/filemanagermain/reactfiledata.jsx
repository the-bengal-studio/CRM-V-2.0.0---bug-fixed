import png45 from "../../../../assets/img/files/1.png";
import jpg11 from "../../../../assets/img/gallery/2.jpg";
import jpg14 from "../../../../assets/img/gallery/5.jpg";
import jpg15 from "../../../../assets/img/gallery/6.jpg";
import jpg17 from "../../../../assets/img/gallery/8.jpg";
import png46 from "../../../../assets/img/files/2.png";
import png47 from "../../../../assets/img/files/3.png";
import png48 from "../../../../assets/img/files/4.png";
import png49 from "../../../../assets/img/files/5.png";
import png50 from "../../../../assets/img/files/6.png";
import png52 from "../../../../assets/img/files/8.png";
import png53 from "../../../../assets/img/files/9.png";
import png54 from "../../../../assets/img/files/10.png";
import jpg64 from "../../../../assets/img/users/8.jpg";
import jpg58 from "../../../../assets/img/users/2.jpg";
import jpg60 from "../../../../assets/img/users/4.jpg";
import jpg76 from "../../../../assets/img/users/20.jpg";
import ALLImages from "../../../../common/imagesdata";



export const RecentfileData = [
    { id: 1, name: 'Josh Brown', File: '5 files', Size: '250 MB', Type: 'Floder ', Date: '29-09-2022, 16:40', },
    { id: 2, name: 'Jim Green', File: ' 2 files', Size: '100 MB', Type: 'Floder ', Date: '27-09-2022,3:40', },
    { id: 3, name: 'Joe Black', File: '1 files', Size: ' 50 MB', Type: 'PDF file', Date: '17-09-2022,13:40', },
    { id: 4, name: 'Edward king', File: '1 files ', Size: '50 MB', Type: 'Word Document', Date: '17-09-2022,13:40', },
    { id: 5, name: 'Jim red', File: '10 files', Size: '500MB', Type: "Folder", Date: '13-09-2022,5:20', },
]


let card1 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg64')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg60')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg58')} alt="Image Description" />
</div>

let card2 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg64')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg60')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg58')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg76')} alt="Image Description" />
</div>
let card3 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg64')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg60')} alt="Image Description" />
</div>
let card4 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg64')} alt="Image Description" />
</div>
let card5 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg64')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg63')} alt="Image Description" />
</div>
let card6 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg64')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg63')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg60')} alt="Image Description" />
</div>
let card7 = <div className="flex -space-x-2 rtl:space-x-reverse">
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg75')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg63')} alt="Image Description" />
    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-gray-200" src={ALLImages('jpg60')} alt="Image Description" />
</div>



export const Filemanagerlistdata = [
    { id: 1, floderimg: png46, class4: '', viewer: card1, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'File.pdf', filesize: '20MB', client1: jpg64, client2: jpg58, client3: jpg60, },
    { id: 2, floderimg: png50, class4: '', viewer: card2, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'Image1.png', filesize: '10MB', client1: jpg64, client2: jpg58, client3: jpg60, client4: jpg76 },
    { id: 3, floderimg: jpg11, class4: 'text-warning', viewer: card3, class3: 'sm:h-[146px] w-full', class2: 'hs-dropdown ti-dropdown  absolute top-5 ltr:right-5 rtl:left-5 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-5 ltr:left-5 rtl:right-5 block text-gray-500 dark:text-white/70 text-xs', class: 'p-0', typeoffile: 'Hillstation.jpg', filesize: '30MB', client1: jpg64, client2: jpg58, },
    { id: 4, floderimg: png49, class4: '', viewer: card4, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'My Documents', filesize: '1.5GB', client1: jpg64 },
    { id: 5, floderimg: png48, class4: 'text-warning', viewer: card5, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'project.xls', filesize: '34MB', client1: jpg64, client2: jpg58, },
    { id: 6, floderimg: jpg14, class4: '', viewer: card6, class3: 'sm:h-[146px] w-full', class2: 'hs-dropdown ti-dropdown  absolute top-5 ltr:right-5 rtl:left-5 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-5 ltr:left-5 rtl:right-5 block text-gray-500 dark:text-white/70 text-xs', class: 'p-0', typeoffile: 'Nature.jpg', filesize: '10MB', client1: jpg64, client2: jpg58, client3: jpg60 },
    { id: 7, floderimg: jpg15, class4: '', viewer: card2, class3: 'sm:h-[146px] w-full', class2: 'hs-dropdown ti-dropdown  absolute top-5 ltr:right-5 rtl:left-5 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-5 ltr:left-5 rtl:right-5 block text-gray-500 dark:text-white/70 text-xs', class: 'p-0', typeoffile: 'ice.jpg', filesize: '10MB', client1: jpg64, client2: jpg58, client3: jpg60, client4: jpg76 },
    { id: 8, floderimg: png46, class4: 'text-warning', viewer: card5, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'project.ppt', filesize: '10KB', client1: jpg64, client2: jpg58, },
    { id: 9, floderimg: png45, class4: 'text-warning', viewer: card7, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'project.docx', filesize: '30MB', client1: jpg64, client2: jpg58, },
    { id: 10, floderimg: png52, class4: '', viewer: card5, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'Fproject.mp4', filesize: '100KB', client1: jpg64, client2: jpg58, },
    { id: 11, floderimg: png47, class4: 'text-warning', viewer: card5, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'project.jpg', filesize: '1.5KB', client1: jpg64, client2: jpg58, },
    { id: 12, floderimg: jpg17, class4: '', viewer: card5, class3: 'sm:h-[146px] w-full', class2: 'hs-dropdown ti-dropdown  absolute top-5 ltr:right-5 rtl:left-5 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-5 ltr:left-5 rtl:right-5 block text-gray-500 dark:text-white/70 text-xs', class: 'p-0', typeoffile: 'Study.jpg', filesize: '1.5KB', client1: jpg64, client2: jpg58, },
    { id: 13, floderimg: png53, class4: '', viewer: card5, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'project2.docx', filesize: '1.5KB', client1: jpg64, client2: jpg58, },
    { id: 14, floderimg: png54, class4: 'text-warning', viewer: card5, class3: '', class2: 'hs-dropdown ti-dropdown  absolute top-0 ltr:right-0 rtl:left-0 block text-gray-500 dark:text-white/70 text-xs', class1: 'absolute top-0 ltr:left-0 rtl:right-0 block text-gray-500 dark:text-white/70 text-xs', class: '', typeoffile: 'project.zip', filesize: '1.5KB', client1: jpg64, client2: jpg58, },
]