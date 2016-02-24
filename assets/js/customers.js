$(document).ready(function(){


  $.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(data){
    for (var i = 0; i < data.length; i++) {

      // create each column necessary to display order
      // #, Full Name, Email, City, State, Race, Gender
      // ['id']
      $('<td/>').text([i])
      // append all columns to the table row
      $('<tr/>').append();
      // insert table row into DOM
    }
  })
});
