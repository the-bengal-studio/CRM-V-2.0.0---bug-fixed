import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';

export function Dark(actionfunction) {
    const theme = store.getState()
    actionfunction({...theme,
        "class":"dark",
        "dataHeaderStyles":"dark",
        "dataMenuStyles":"dark"
    })
    localStorage.setItem("Syntodarktheme", "dark");
    localStorage.removeItem("Syntolighttheme");
}
export function Light(actionfunction) {
    const theme = store.getState()
    actionfunction({...theme,
        "class":"light",
        "dataHeaderStyles":"light",
        "dataMenuStyles": theme.dataNavLayout == 'horizontal' ? 'light': "dark"})
    localStorage.setItem("Syntolighttheme", "light");
    localStorage.removeItem("Syntodarktheme")
}

export function Ltr(actionfunction) {
    const theme = store.getState()
    actionfunction({...theme,"dir":"ltr"})
    localStorage.removeItem("Syntortl");
};
export function Rtl(actionfunction) {
    const theme = store.getState()
    actionfunction({...theme,"dir":"rtl"})
    localStorage.setItem("Syntortl", "rtl");
};
export const HorizontalClick = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
    "dataNavLayout":"horizontal",
    "dataMenuStyles": theme.class == 'dark' ? 'dark': "light",
    "dataVerticalStyle":""})
    localStorage.setItem("Syntolayout", "horizontal");
};
export const Vertical = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavLayout":"vertical",
        "dataMenuStyles":"dark",
        "dataVerticalStyle":"overlay",
        "toggled":""
    })
    localStorage.setItem("Syntolayout", "vertical");
};

export const Menuclick = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavStyle":"menu-click",
        "dataVerticalStyle":"",
        "toggled":"menu-click-closed",
    })
    localStorage.setItem("Syntonavstyles", "menu-click");
};
export const MenuHover = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavStyle":"menu-hover",
        "dataVerticalStyle":"",
        "toggled":"menu-hover-closed",
        "horStyle":""
    })
    localStorage.setItem("Syntonavstyles", "menu-hover");
};
export const IconClick = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavStyle":"icon-click",
        "dataVerticalStyle":"",
        "toggled":"icon-click-closed",
    })
    localStorage.setItem("Syntonavstyles", "icon-click");
};
export const IconHover = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavStyle":"icon-hover",
        "dataVerticalStyle":"",
        "toggled":"icon-hover-closed"
    })
    localStorage.setItem("Syntonavstyles", "icon-hover");
};

export const Regular = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataPageStyle":"regular"
    })
    localStorage.setItem("Syntoregular", "Regular");
    localStorage.removeItem("Syntoclassic");
};
export const Classic = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataPageStyle":"classic",
    })
    localStorage.setItem("Syntoclassic", "Classic");
    localStorage.removeItem("Syntoregular");
};

export const Fullwidth = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataWidth":"fullwidth",
    })
    localStorage.setItem("Syntofullwidth", "Fullwidth");
    localStorage.removeItem("Syntoboxed");

};
export const Boxed = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataWidth":"boxed",
    })
    localStorage.setItem("Syntoboxed", "Boxed");
    localStorage.removeItem("Syntofullwidth");
};
export const FixedMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuPosition":"fixed",
    })
    localStorage.setItem("Syntomenufixed", "MenuFixed");
    localStorage.removeItem("Syntomenuscrollable");
};
export const scrollMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuPosition":"scrollable",
    })
    localStorage.setItem("Syntomenuscrollable", "Menuscrolled");
    localStorage.removeItem("Syntomenufixed")
};
export const Headerpostionfixed = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderPosition":"fixed",
    })
    localStorage.setItem("Syntoheaderfixed", 'FixedHeader');
    localStorage.removeItem("Syntoheaderscrollable");
};
export const Headerpostionscroll = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderPosition":"scrollable",
    })
    localStorage.setItem("Syntoheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("Syntoheaderfixed");
};

export const Defaultmenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataVerticalStyle":"default",
        "dataNavLayout":"vertical",
        "toggled":"closed"
    })
    localStorage.removeItem("Syntoverticalstyles");
};
export const Closedmenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavLayout":"vertical",
        "dataVerticalStyle":"closed",
        "toggled":"close-menu-close"
    })
    localStorage.setItem("Syntoverticalstyles", "closed");

};

export const iconText = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavLayout":"vertical",
        "dataVerticalStyle":"icontext",
        "toggled":"icon-text-close"
    })
    localStorage.setItem("Syntoverticalstyles", "icontext");
};
export const iconOverayFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavLayout":"vertical",
        "dataVerticalStyle":"overlay",
        "toggled":"icon-overlay-close",
        "icon-overlay":""
    })
    localStorage.setItem("Syntoverticalstyles", "overlay");
};
export const DetachedFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavLayout":"vertical",
        "dataVerticalStyle":"detached",
        "toggled":"detached-close",
    })
    localStorage.setItem("Syntoverticalstyles", "detached");
};

export const DoubletFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataNavLayout":"vertical",
        "dataVerticalStyle":"doublemenu",
        "toggled":"double-menu-open",
    })
    localStorage.setItem("Syntoverticalstyles", "doublemenu");
};
export const colorMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuStyles":"color",
    })
    localStorage.setItem("SyntoMenu", "color");
    localStorage.removeItem("gradient");
};

export const lightMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuStyles":"light",
    })
    localStorage.setItem("SyntoMenu", "light");
    localStorage.removeItem("light");
};

export const darkMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuStyles":"dark",
    })
    localStorage.setItem("SyntoMenu", "dark");
    localStorage.removeItem("light");
};

export const gradientMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuStyles":"gradient",
    })
    localStorage.setItem("SyntoMenu", "gradient");
    localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataMenuStyles":"transparent",
    })
    localStorage.setItem("SyntoMenu", "transparent");
    localStorage.removeItem("gradient");
};

export const lightHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderStyles":"light",
    })
    localStorage.setItem("SyntoHeader", "light");
    localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderStyles":"dark",
    })
    localStorage.setItem("SyntoHeader", "dark");
    localStorage.removeItem("light");
};
export const colorHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderStyles":"color",
    })
    localStorage.removeItem("dark");
    localStorage.setItem("SyntoHeader", "color");
};
export const gradientHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderStyles":"gradient",
    })
    localStorage.removeItem("transparent");
    localStorage.setItem("SyntoHeader", "gradient");
};
export const transparentHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "dataHeaderStyles":"transparent",
    })
    localStorage.removeItem("gradient");
    localStorage.setItem("SyntoHeader", "transparent");
};

export const primaryColor1 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "colorPrimaryRgb":"58, 88, 146",
        "colorPrimary":"58 88 146"
    })
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "colorPrimaryRgb":"92, 144, 163",
        "colorPrimary":"92 144 163"
    })
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "colorPrimaryRgb":"172, 172, 80",
        "colorPrimary":"172 172 80"
    })
    localStorage.setItem("primaryRGB", "172, 172, 80");
    localStorage.setItem("primaryRGB1", "172 172 80");
};
export const primaryColor4 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "colorPrimaryRgb":"165, 94, 131",
        "colorPrimary":"165 94 131"
    })
    localStorage.setItem("primaryRGB", "165, 94, 131");
    localStorage.setItem("primaryRGB1", "165 94 131");
};
export const primaryColor5 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "colorPrimaryRgb":"87, 68, 117",
        "colorPrimary":"87 68 117"
    })
    localStorage.setItem("primaryRGB", "87, 68, 117");
    localStorage.setItem("primaryRGB1", "87 68 117");
};

export const backgroundColor1 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bodyBg":"50 62 93",
        "darkBg":"64 76 107",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "50 62 93");
    localStorage.removeItem("darkBgRGB");
};
export const backgroundColor2 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bodyBg":"81 93 50",
        "darkBg":"95 107 64",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "81 93 50");
    localStorage.removeItem("50 62 93");
};
export const backgroundColor3 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bodyBg":"93 64 107",
        "darkBg":"79 50 93",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "93 64 107");
};
export const backgroundColor4 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bodyBg":"64 101 107",
        "darkBg":"50 87 93",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "64 101 107");
};
export const backgroundColor5 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bodyBg":"107 64 64",
        "darkBg":"93 50 50",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "107 64 64");
};

const ColorPicker = (props) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
//themeprimarycolor
const Themeprimarycolor = ({actionfunction}) => {
    const theme = store.getState()
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e) => {
        let { r, g, b } = hexToRgb(e.target.value)
        updateState(e.target.value);
        actionfunction({...theme,
            "colorPrimaryRgb":`${r} ${g} ${b}`,
            "colorPrimary":`${r} ${g} ${b}`
        })
        localStorage.setItem("dynamiccolor", `${r} ${g} ${b}`)
    };
    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({actionfunction}) => {
    const theme = store.getState()
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e) => {
        let { r, g, b } = hexToRgb(e.target.value)
        updateState(e.target.value);
        actionfunction({...theme,
            "bodyBg":`${r} ${g} ${b}`,
            "darkBg":`${r} ${g} ${b}`,
            "class":"dark",
            "dataHeaderStyles":"dark"
        })
        localStorage.setItem("Dynamicbackground", `${r} ${g} ${b}`)
    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
}

export const bgImage1 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bgImg":"bgimg1"
    })
    localStorage.setItem("bgimage", "bgimg1");
};
export const bgImage2 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bgImg":"bgimg2"
    })
    localStorage.setItem("bgimage", "bgimg2");
};
export const bgImage3 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bgImg":"bgimg3"
    })
    localStorage.setItem("bgimage", "bgimg3");
};
export const bgImage4 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bgImg":"bgimg4"
    })
    localStorage.setItem("bgimage", "bgimg4");
};
export const bgImage5 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({...theme,
        "bgImg":"bgimg5"
    })
    localStorage.setItem("bgimage", "bgimg5");
};
export const Reset = (actionfunction) => {
    const theme = store.getState()
    Vertical(actionfunction)
    actionfunction({...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        StylebodyBg:"107 64 64",
        StyleDarkBg:"93 50 50",
        toggled:"closed",
        dataNavStyle:"",
        horStyle:"",
        dataPageStyle:"regular",
        dataWidth:"fullwidth",
        dataMenuPosition:"fixed",
        dataHeaderPosition:"fixed",
        iconOverlay:"",
        colorPrimaryRgb:"",
        colorPrimary:"",
        bodyBg:"",
        darkBg:"",
        bgImg:"",
        iconText:"",
        body:{
            class:""
        }
    })
    localStorage.clear();
}

export const LocalStorageBackup = (actionfunction) => {
    (localStorage.Syntodarktheme) ? Dark(actionfunction) : "";
    (localStorage.Syntolighttheme) ? Light(actionfunction) : "";
    (localStorage.Syntortl) ? Rtl(actionfunction) : "";
    (localStorage.Syntoregular) ? Regular(actionfunction) : "";
    (localStorage.Syntoclassic) ? Classic(actionfunction) : "";
    (localStorage.Syntofullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.Syntoboxed) ? Boxed(actionfunction) : "";
    (localStorage.Syntomenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.Syntomenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.Syntoheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.Syntoheaderscrollable) ? Headerpostionscroll(actionfunction) : "";
    (localStorage.bgimage1) ? bgImage1(actionfunction) : '';
    (localStorage.bgimage2) ? bgImage2(actionfunction) : '';
    (localStorage.bgimage3) ? bgImage3(actionfunction) : '';
    (localStorage.bgimage4) ? bgImage4(actionfunction) : '';
    (localStorage.bgimage5) ? bgImage5(actionfunction) : '';

    (localStorage.Syntonavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.Syntonavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.Syntonavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.Syntonavstyles === "icon-hover") ? IconHover(actionfunction) : '';


    (localStorage.Syntolayout == 'horizontal') && HorizontalClick(actionfunction);

    // ThemeColor MenuColor Start
    switch (localStorage.SyntoMenu) {
        case 'light':
            // lightTheme();
            break;
        case 'dark':
            darkTheme(actionfunction);
    
            break;
        case 'color':
            colorMenu(actionfunction);
    
            break; 
        case 'gradient':
            gradientMenu(actionfunction);
    
            break;
        case 'transparent':
            transparentMenu(actionfunction);
    
            break;
        default:
            break;
    }
    // ThemeColor MenuColor End

    // ThemeColor Header Colors: start
    switch (localStorage.SyntoHeader) {
        case 'light':
            lightHeader(actionfunction);
    
            break;
        case 'dark':
            darkHeader(actionfunction);
    
            break;
        case 'color':
            colorHeader(actionfunction);
    
            break;
        case 'gradient':
            gradientHeader(actionfunction);
    
            break;
        case 'transparent':
            transparentHeader(actionfunction);
    
            break;
        default:
            break;
    }
    // ThemeColor Header Colors: End

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);
    
            break;
        case '92, 144, 163':
            primaryColor2(actionfunction);
    
            break;
        case '172, 172, 80':
            primaryColor3(actionfunction);
    
            break;
        case '165, 94, 131':
            primaryColor4(actionfunction);
    
            break;
        case '87, 68, 117':
            primaryColor5(actionfunction);
    
            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.darkBgRGB) {
        case '50 62 93':
            backgroundColor1(actionfunction);
    
            break;
        case '81 93 50':
            backgroundColor2(actionfunction);
    
            break;
        case '93 64 107':
            backgroundColor3(actionfunction);
    
            break;
        case '64 101 107':
            backgroundColor4(actionfunction);
    
            break;
        case '107 64 64':
            backgroundColor5(actionfunction);
    
            break;
        default:
            break;
    }

    //layout
    if (localStorage.Syntoverticalstyles) {
        let verticalStyles = localStorage.getItem("Syntoverticalstyles");

        switch (verticalStyles) {
            case "default":
                Defaultmenu(actionfunction)
                break;
            case "closed":
                Closedmenu(actionfunction)
                break;
            case "icontext":
                iconText(actionfunction)
                break;
            case "overlay":
                iconOverayFn(actionfunction)
                break;
            case "detached":
                DetachedFn(actionfunction)
                break;
            case "doublemenu":
                DoubletFn(actionfunction)
                break;
            // default:
            //     let defaultbutton = document.getElementById("switcher-default-menu");
            //     defaultbutton.checked = true;
            //     break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState()
        actionfunction({...theme,
            "colorPrimaryRgb":localStorage.dynamiccolor,
            "colorPrimary":localStorage.dynamiccolor
        })
    }
    //Theme BAckground:
    if (localStorage.Dynamicbackground) {
        const theme = store.getState()
        actionfunction({...theme,
            "bodyBg":localStorage.Dynamicbackground,
            "darkBg":localStorage.Dynamicbackground,
        })
        Dark(actionfunction)
    }
}