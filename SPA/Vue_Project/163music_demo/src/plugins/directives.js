export default function (Vue) {
    Vue.directive('height',{
        inserted(el,binding){
            if( typeof binding.value == undefined){
                el.style.height = document.documentElement.clientHeight;
            }else if( typeof binding.value == 'number'){
                el.style.height = document.documentElement.clientHeight - binding.value + "px";
            }
        }
    })
}