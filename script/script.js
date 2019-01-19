
window.onload= function(){
    document.getElementById('btn-result').onclick = getBurgerResult;

    getBurgerResult();

    function getBurgerResult(){
           let menu = document.getElementsByClassName('menu-item');
        let cost = 0;
        let kkal = 0;

        for(let i=0; i< menu.length;i++){
            if(menu[i].checked){
                cost += parseFloat(menu[i].getAttribute('data-cost'));
                kkal += parseFloat(menu[i].getAttribute('data-kkal'));
            }
        }
        document.getElementById('kkal-result').innerHTML = kkal;
        document.getElementById('cost-result').innerHTML = cost;
    }
}
