import FormElements from './FormElements.scss'


$(function(){
    //меняет цвет стрелки при раскрытии дропдауна
    $('.dropdown__input').click(()=>{
        $('.dropdown .dropdown__arrow').toggleClass('dropdown__arrow_focus')
    })
})