// $('.show-filters').on('click', function () {


//   $('.filters-list').show()



// })


$('.filters a').on('click', function () {


  // assign the variable using the var keyword
  var filter = $(this).attr('data-filter')

  // 1. hide all the products

  // 2. show the products with a particular filter
  $('.product').hide()
  $(filter).show()


  // first we remove all the selected classes from our filters
  $('.filters a').removeClass('selected')

  // this will add a class name of selected to the current filter
  // link that we have just clicked on
  $(this).addClass('selected')

  // console.log('it works!')

  // prevents the a tag from returning its default action
  return false
})