// ==========================recommended==========================
function clicked_list(id){
    items = document.querySelectorAll(".main .recommended .row-2 .items")
    items.forEach(el => {
        el.style.display = 'none'
    });
    a_list = document.querySelectorAll(".main .recommended .row-1 ul li a")
    a_list.forEach(el=>{
        el.classList.remove('active')
    })
    document.querySelector(`.main .recommended .row-1 ul li a#${id}`).classList.add('active')
    document.querySelector(`.main .recommended .row-2 #${id}`).style.display = 'flex'
}
// ==========================color changer==========================
// select = document.querySelector()
function color_changer(varialble1,hex,button_color=null,button_shadow_color=null,image=null,category_shadow_color=null){
    document.documentElement.style.setProperty(varialble1, hex);
    document.getElementById("buy").style.backgroundColor = button_color
    document.getElementById("buy").style.boxShadow = `4px 4px 0px ${button_shadow_color}`
    document.getElementById('landing').style.backgroundImage = `url('${image}')`
    document.querySelectorAll('.circle .image').forEach(el=>{
        el.style.backgroundColor = hex
        el.style.boxShadow =`8px 2px 0px ${category_shadow_color}`
    })
}