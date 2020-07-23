$(function(){
    $(".pagination__placeholder").pagination({
        items: 100,
        itemsOnPage:12,
        pages: 15,
        displayedPages: 3,
        edges: 1,
        cssStyle: 'light-theme',
        nextText: 'arrow_forward',
        prevText: 'arrow_back'
    })
})