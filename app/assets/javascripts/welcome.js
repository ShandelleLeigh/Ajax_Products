// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


//Product state
// var currentProduct = {}
// var showForm = false  // this makes it so that it doesnt' automatically show form
// var editingProduct;

//Helper functions
function toggleForm() {
  showForm = !showForm;
  // on click it shows form if it wasnt shown, or hides if already showing
  $('#product-form').remove();
  $('#products-list').toggle();

  if (showForm) {
    $.ajax({
      url: '/form',
      method: 'GET',
      datatype: 'JSON'
    }).done( function(html) {
      $('#toggle').on('click')
    });
  }
}

//.ajax can do get or post, depending on current state (of creating new product or editing existing product)

$(document).ready( function() {
  $('#toggle').on('click', function() {
  $.ajax({
      url: 'http://json-server.devpointlabs.com/api/v1/products',
      method: 'GET',
      datatype: 'JSON'
    }).done( function(product) {
      console.log(product)
      var list = $('#products-list');
      list.empty();
      product.forEach( function(product) {
        var li = '<li>' + product.name + " " + product.id + '</li>'
        list.append(li)
      });
    });
  });
});


// $(document).ready( function() {
//   $(document).on('click', '#delete-product', function() {
//     var id = $(this).siblings('.product-item').data().id
//     $.ajax({
//       url: 'http://json-server.devpointlabs.com/api/v1/products/' + id,
//       type: 'DELETE'
//     }).done( function() {
//       var row = $("[data-id='" + id + "'")
//       row.parent().remove('li')
//     });
//   });
//
//   $(document).on('click', '#edit-product', function() {
//     editingProduct = $(this).siblings('.product-item').data().id
//     toggleForm();
//   });

  //Form submit handler
//   $(document).on('submit', '#product-form form', function(e) {
//     e.preventDefault();
//     var data = $(this).serializeArray();
//     var url = 'http://json-server.devpointlabs.com/api/v1/products';
//     var method = 'POST';
//     if (editingProduct) {
//       url = url + '/' + editingProduct;
//       method = 'PUT'
//     }
//
//     $.ajax({
//       url: url,
//       type: method,
//       dataType: 'JSON',
//       data: data
//     }).done( function(product) {
//       toggleForm();
//       getProduct(product.id);
//     }).fail( function(err) {
//       alert(err.responseJSON.errors)
//     });
//   });
//
//   //Toggle form click handler
//   $('#toggle').on('click', function() {
//     toggleForm()
//   });
//
//   //Product select click handler
//   $(document).on('click', '.product-item', function() {
// // $('.product-item').on('click', function() {
// //^^wrong way,  wont generate characters for new, dynamically added products
//     currentProduct.id = this.dataset.id;
//     currentProduct.name = this.dataset.name;
//     $.ajax({
//       url: 'http://json-server.devpointlabs.com/api/v1/products/' + currentProduct.id,
//       type: 'GET',
//       dataType: 'JSON'
//     });
//   });
// });
