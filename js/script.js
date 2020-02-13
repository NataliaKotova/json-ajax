//ajax needs 5 parameters
//url, sepparate key, 

//ES6 back tick `

//` ${variable name} `
//select options choose endpoint, collections, photos, users
//choose the size, full, raw, regular, small, thumb



console.log('json & ajax');

//to test jquery
$(document).ready(function(){
  var myKey = JSON.parse(apiKey);  
  console.log(myKey[0]);
  myKey = myKey[0].key;
  console.log(myKey);

//reading users choice
document.getElementById('submit').addEventListener('click', function(){
	var endPoint = document.getElementById('endpoints').value;
	var size = document.getElementById('sizes').value;
  console.log(endPoint,size);
  displayData(endPoint,size);
  });

function displayData(ep, si){
//ep, si - endpoint and size
  console.log(ep, si);

$.ajax({
  // url:`https://api.unsplash.com/collections?client_id=${myKey}`,
  url:`https://api.unsplash.com/${ep}/?client_id=${myKey}`,
  type:'GET',
  data:'json',
  success: function(data){
    console.log(data);
    console.log(data[0].cover_photo.urls.raw);
    if(ep === 'collections'){
      collections(ep, si);
    } else if(ep === 'photos'){
      photos(data, ep, si);
    }
    function collections(d, e, s) {
      var k;
      var userSize;
      if(s === 'full') {
        userSize = d[k].cover_photo.urls.full;
      }
      else if (s === 'small'){
        userSize = d[k].cover_photo.urls.small;
      }
      else if (s === 'raw'){
        userSize = d[k].cover_photo.urls.raw;
      }
      
      for (j = 0; j < d.length; j++) {
        document.getElementById('result').innerHTML +=
        '<div class="col">' +
        '<img class="img-thumbnail" alt="Image" src="' + d[k].cover_photo.urls.thumb + '">'+
        '<div>'
      }
    }

    // if(si==='raw'){
    //   console.log(data[0].cover_photo.urls.raw);
    // }
    // else if(si === 'thumb'){
    //   console.log(data[0].cover_photo.urls.thumb);
    // }
    // else if(si === 'small'){
    //   console.log(data[0].cover_photo.urls.small);
    // }
    // else if(si === 'regular'){
    //   console.log(data[0].cover_photo.urls.regular);
    // }

  }, //success
  error: function(){
    console.log('error');
  } //error
}); //ajax

}; // function displayData ENDS here

});//document.ready