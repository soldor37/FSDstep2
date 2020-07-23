$(document).ready(() => {
    $('.iqdropdown').iqDropdown({
        selectionText: 'Сколько гостей',
        textPlural: 'гостя',
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
  });