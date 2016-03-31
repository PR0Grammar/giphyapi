$(document).ready(function(){
    $("#submit").click(function(){
       var query=$("#query").val();
       getGiphyGifs(query,function(gifs){
          $.each(gifs,function(key,value){
             $("#search-results").append("<img src='" +value.images.fixed_height.url+ "'>")
             console.log(gifs);
          });
       });
    });
   
   
   
   
});