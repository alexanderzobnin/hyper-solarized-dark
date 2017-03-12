exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#839496',
    backgroundColor: "#002b36",
    cursorColor: '#839496',
    borderColor: '#839496',
    colors: {
      black: '#073642',
      red: '#dc322f',
      green: '#859900',
      yellow: '#b58900',
      blue: '#268bd2',
      magenta: '#d33682',
      cyan: '#2aa198',
      white: '#eee8d5',
      lightBlack: '#002b36',
      lightRed: '#cb4b16',
      lightGreen: '#586e75',
      lightYellow: '#657b83',
      lightBlue: '#839496',
      lightMagenta: '#6c71c4',
      lightCyan: '#93a1a1',
      lightWhite: '#fdf6e3'
    },
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: #586e75;
      }
      .tabs_nav .tabs_title {
        color: #839496;
      }
      .tabs_nav .tabs_list .tab_tab {
        background-color: #002b36;
      }
      .tabs_nav .tabs_list .tab_active {
        background: #073642;
      }
      .tabs_nav .tabs_list .tab_active .tab_textActive {
        color: #93a1a1;
      }
      .header_header .header_windowHeader {
        background-color: #002b36;
      }
      .header_header .header_windowHeader .header_appTitle {
        color: #839496;
      }
    `
  });
}
