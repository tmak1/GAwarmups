$('.toggle').click(function(e) {
    e.preventDefault();
    var $this = $(e.target);
​
    $this.next().slideToggle(350);
});