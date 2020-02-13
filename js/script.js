//ajax needs 5 parameters

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
    console.log(endPoint,size);//actual parameter
    displayData(endPoint,size);//actual parameter
  });

  function displayData(ep, si){
  //ep, si - endpoint and size
    console.log(ep, si);

    //ajax method
    $.ajax({
      // url:`https://api.unsplash.com/collections?client_id=${myKey}`,
      url:`https://api.unsplash.com/${ep}/?client_id=${myKey}`,
      type:'GET',
      data:'json',
      success: function(data){
        console.log(data);
        console.log(data[0].cover_photo.urls.raw);
        if(ep === 'collections'){
          collections(data, ep, si);
        } else if(ep === 'photos'){
          photos(data, ep, si);
        }
        function collections(d, e, s) {
          var k;
          var userSize;
          document.getElementById('result').innerHTML = '';
            for(k = 0; k < d.length; k++ ){
              if(s === 'full') {
                userSize = d[k].cover_photo.urls.full;
              }
              else if (s === 'raw'){
                userSize = d[k].cover_photo.urls.raw;
              }
              else if (s === 'regular'){
                userSize = d[k].cover_photo.urls.regular;
              }
              else if (s === 'small'){
                userSize = d[k].cover_photo.urls.small;
              }
              else if (s === 'thumb'){
                userSize = d[k].cover_photo.urls.thumb;
              }
              document.getElementById('result').innerHTML +=
              '<div class="col">' +
                '<img class="img-thumbnail" alt="Image" src="' + userSize + '">' +
              '</div>';
          }
        }

        function photos(d, e,s){
          var j;
        var photoSize;
          document.getElementById('result').innerHTML = '';
      for(j = 0; j < d.length; j++ ){
        if (s === 'full') {
          photoSize = d[j].urls.full;
        } else if (s === 'raw') {
          photoSize = d[j].urls.raw;
        } else if (s === 'regular') {
          photoSize = d[j].urls.regular;
        }else if (s === 'small') {
          photoSize = d[j].urls.small;
        } else if (s === 'thumb') {
          photoSize = d[j].urls.thumb;
        }


        document.getElementById('result').innerHTML +=
        '<div class="col">' +
          '<img class="img-thumbnail" alt="Image" src="' + photoSize + '">' +
        '</div>';
      }
    }

    }, //success
    error: function(){
      console.log('error');
    } //error
  }); //ajax

  }; // function displayData ENDS here

});//document.ready