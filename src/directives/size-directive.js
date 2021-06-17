import Vue from 'vue'

Vue.directive("size", {
    bind(el, binding){
        if(binding.value === 'small'){
            el.style.fontSize = "12px";
            el.style.color = "orange";
        } else if(binding.value === 'big'){
            el.style.fontSize = "28px";
            el.style.color = "blue";
        } else {
            el.style.fontSize = "15px";
            el.style.color = "gray";
        }
    }
})

