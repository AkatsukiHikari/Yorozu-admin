import Page401 from './401.vue'
import Page404 from './404.vue'


Page401.install = function(Vue){
    Vue.component(Page401.name, Page401)
}

Page404.install = function(Vue){
    Vue.component(Page404.name, Page404);
}


export  {
    Page401,
    Page404,
};