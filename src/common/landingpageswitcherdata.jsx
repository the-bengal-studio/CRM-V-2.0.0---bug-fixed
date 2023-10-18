import React, { useState, ChangeEvent, useEffect } from 'react';

export function Dark(theme,actionfunction) {
    actionfunction({...theme,"class":"dark","dataHeaderStyles":"dark"})
    localStorage.setItem("Syntodarktheme", "dark");
    localStorage.removeItem("Syntolighttheme");
}
export function Light(theme,actionfunction) {
    actionfunction({...theme,"class":"light","dataHeaderStyles":"light"})
    localStorage.setItem("Syntolighttheme", "light");
    localStorage.removeItem("Syntodarktheme")
}

export function Ltr(theme,actionfunction) {
    actionfunction({...theme,"dir":"ltr"})
    localStorage.removeItem("Syntortl");
};
export function Rtl(theme,actionfunction) {
    actionfunction({...theme,"dir":"rtl"})
    localStorage.setItem("Syntortl", "rtl");
};

export const primaryColor1 = (theme,actionfunction) => {
    actionfunction({...theme,
        "colorPrimaryRgb":"58, 88, 146",
        "colorPrimary":"58 88 146"
    })
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (theme,actionfunction) => {
    actionfunction({...theme,
        "colorPrimaryRgb":"92, 144, 163",
        "colorPrimary":"92 144 163"
    })
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (theme,actionfunction) => {
    actionfunction({...theme,
        "colorPrimaryRgb":"172, 172, 80",
        "colorPrimary":"172 172 80"
    })
    localStorage.setItem("primaryRGB", "172, 172, 80");
    localStorage.setItem("primaryRGB1", "172 172 80");
};
export const primaryColor4 = (theme,actionfunction) => {
    actionfunction({...theme,
        "colorPrimaryRgb":"165, 94, 131",
        "colorPrimary":"165 94 131"
    })
    localStorage.setItem("primaryRGB", "165, 94, 131");
    localStorage.setItem("primaryRGB1", "165 94 131");
};
export const primaryColor5 = (theme,actionfunction) => {
    actionfunction({...theme,
        "colorPrimaryRgb":"87, 68, 117",
        "colorPrimary":"87 68 117"
    })
    localStorage.setItem("primaryRGB", "87, 68, 117");
    localStorage.setItem("primaryRGB1", "87 68 117");
};

export const backgroundColor1 = (theme,actionfunction) => {
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
export const backgroundColor2 = (theme,actionfunction) => {
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
export const backgroundColor3 = (theme,actionfunction) => {
    actionfunction({...theme,
        "bodyBg":"93 64 107",
        "darkBg":"79 50 93",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "93 64 107");

};
export const backgroundColor4 = (theme,actionfunction) => {
    actionfunction({...theme,
        "bodyBg":"64 101 107",
        "darkBg":"50 87 93",
        "class":"dark",
        "dataMenuStyles":"dark",
        "dataHeaderStyles":"dark"
    })
    localStorage.setItem('darkBgRGB', "64 101 107");
};
export const backgroundColor5 = (theme,actionfunction) => {
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
        <div className='color-picker-input'>
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
const Themeprimarycolor = ({theme,actionfunction}) => {
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
        <div className="Themeprimarycolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({theme,actionfunction}) => {
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

export const LandingpageReset = (theme,actionfunction) => {
    actionfunction({...theme,
        dir: "ltr",
        class: "light",
        StylebodyBg:"107 64 64",
        StyleDarkBg:"93 50 50",
        colorPrimaryRgb:"",
        colorPrimary:"",
    })    
    localStorage.clear();

}

