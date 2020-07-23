$(document).ready(() => {
    $('.guest').iqDropdown({
        maxItems: 20, 
        setSelectionText: (itemCount, totalItems) => { 
            if(totalItems == 0){
                return 'Сколько гостей'
            }else if(totalItems == 1){
                return totalItems + ' гость'
            }else if(totalItems == 2 || totalItems == 3 || totalItems == 4){
                return totalItems + ' гостя'
            }else{
                return totalItems + ' гостей'
            }
        },
    });
    $('.furn').iqDropdown({
        maxItems: 20,
        setSelectionText: (itemCount, totalItems) => { 
            if(totalItems == 0){
                return 'Выберите удобства'
            }
            let res = '';
            if(itemCount.item1 == 1){
                res+= itemCount.item1 + ' спальня, '
            }else if(itemCount.item1 > 1 && itemCount.item1 < 5){
                res+= itemCount.item1 + ' спальни, '
            }else if(itemCount.item1 >= 5){
                res+= itemCount.item1 + ' спален, '
            }

            if(itemCount.item2 == 1){
                res+= itemCount.item2 + ' кровать..'
            }else if(itemCount.item2 > 1 && itemCount.item2 < 5){
                res+= itemCount.item2 + ' кровати..'
            }else if(itemCount.item2 >= 5){
                res+= itemCount.item2 + ' кроватей..'
            }

            if(itemCount.item3 == 1 && itemCount.item1 == 0 && itemCount.item2 == 0){
                res+= itemCount.item3 + ' ванная комната'
            }else if(itemCount.item3 > 1 && itemCount.item1 == 0 && itemCount.item2 == 0){
                res+= itemCount.item3 + ' ванные комнаты'
            }
            return res;
        },
    });
    // $('.furn').iqDropdown({
    //     maxItems: 20,
    //     setSelectionText: (itemCount, totalItems) => { 
    //         if(totalItems == 0){
    //             return 'Выберите удобства номера'
    //         }else if(totalItems == 1){
    //             return totalItems + ' гость'
    //         }else if(totalItems == 2 || totalItems == 3 || totalItems == 4){
    //             return totalItems + ' гостя'
    //         }else{
    //             return totalItems + ' гостей'
    //         }
    //     },
    // });
  });