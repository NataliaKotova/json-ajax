console.log('json & ajax');

//to test jquery
$(document).ready(function(){
  $('body').click(function(){
    $(this).css('color', 'blue');
  });


//JavaScript Data
// var jsData = [
//   {
//     name: "Peter",
//     age: 40
//   },
//   {
//     name: "John",
//     age: 25
//   }
// ];

// console.log(jsData);


// let i;
// for(i=0; i <jsData.length; i++){
//   document.getElementById('result').innerHTML +=
//     '<h1>' + jsData[i].name + ' is ' +
//     jsData[i].age + ' years old</h1>';
// }

// //json Data
// var jsonData = [
//   {
//     "name": "Lucy",
//     "age": 12
//   },
//   {
//     "name": "Mark",
//     "age": 77
//   }
// ];

// console.log(jsonData);

// let j;
// for(j=0; j <jsData.length; j++){
//   document.getElementById('result').innerHTML +=
//     '<h1>' + jsonData[j].name + ' is ' +
//     jsonData[j].age + ' years old</h1>';
// }

// //retrieving json data from an external file

// let person = JSON.parse(myData);
// console.log(person);

// //displaying json objects in the browser window

// var k;
// for(k=0; k< person.length;k++){
//   document.getElementById('result').innerHTML +=
//     '<h1 mb-5>' + person[k].name + ' is ' +
//     person[k].age + ' years old</h1>';
// }

// ajax method

$.ajax({
  url:'js/mock_data.json',
  type:'GET',
  data:'json',
  success: function(data){
    console.log(data);
    var i;
    for(i=0; i<data.length;i++) {
      document.getElementById('result').innerHTML +=
      '<div class="col col-sm-6 col-md-6 col-lg-4 mx-2 border">' + 
      '<h1>' + data[i].first_name + " " +
      data[i].last_name + '</h1>' +
      '<h2>' + data[i].gender + '</h2>' +
      '<h3>' + data[i].email + '</h3>' +
      '<img class="img-thumbnail" src=' + data[i].avatar + '" alt="Avatar">' +
      '</div>';
    }
  }, //success
  error: function(){
    console.log('error');
  } //error
}); //ajax

});