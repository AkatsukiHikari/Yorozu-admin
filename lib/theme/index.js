var _ = require('lodash');

const theme = {
    colors:{
        primary: "blue-600",
        secondary: "blue-300",
        success: "green-700",
        info: "gray-300",
        warning: "yellow-500",
        danger: "red-500",
        dark: "current",
        light: "gray-200",
    },
}

/**
 * 是否是内置的颜色样式 
 * @param {*} color 
 */
export function is_sys_color( color ){
    let keys = _.keys( theme.colors );
    let c = _.findIndex( keys , function( o ) {
        return o == color
    })
    return c == -1 ? false : true;
}

export function theme_color( c ){
    return theme.colors[c];
}

/**
 * 颜色
 * @param {*} c 
 */
export function theme_bg_color( c ){
    let is_sys = is_sys_color( c );
    return is_sys ? `bg-${theme_color( c )}` : `bg-${c}`
}
