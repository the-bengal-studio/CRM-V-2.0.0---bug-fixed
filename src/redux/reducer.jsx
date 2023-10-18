let initialState = {
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
};

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {

    case "ThemeChanger":
      state = payload
      return state

    default:
      return state;
  }
}