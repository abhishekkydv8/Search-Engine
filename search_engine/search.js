$("#form").submit(function(e) 
{
    e.preventDefault()
    var query=$("#search").val()
    //alert(query)
    let result=''

    var api_key='c1accb52d2c82f3e1b440a05af3afcbd'
    var url='http://api.serpstack.com/search?access_key=' + api_key + '&type=web&query=' + query



    $.get(url, function(data){
    


        $("#result").html('')


        console.log(data)
        data.organic_results.forEach(res => {
            
            result=`
            
            <h1>${res.title}</h1><br><a target=_blank href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>
            `
            $("#result").append(result)

        });
        





    })

})