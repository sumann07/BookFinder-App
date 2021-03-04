function bookSearch(){
	var search =  document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
 
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + search
       )
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    console.log(data);
    result(data);
    
  })
  .catch(function(){
    
  });
}
function result(data) {
	   
	    for(i=0;i<3;i++){
	   		var jdata = data.items[i].volumeInfo	

	   		document.getElementById("results").innerHTML +=  "<div class='row bookWrap'><div class='col-sm-4 col-sm-offset-2'><h2>" + jdata.title + "</h2>" + "<h3>" + jdata.authors[0] + "</h3>" + "<h4>" + jdata.publishedDate + "</h4></div>" + "<div class='col-sm-4'><img src='" + jdata.imageLinks.thumbnail + "'></div><a  target='_blank' href='" + jdata.infoLink + "'><button class='btn btn-primary'>Learn More</button></a></div>"
	    }
	    }