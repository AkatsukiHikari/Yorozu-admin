import TNav from './src/nav.vue'

TNav.install = function(Vue){
    Vue.component( TNav.name , TNav);
}

export default TNav;