$("#form").submit(function(e) 
{
    e.preventDefault()
    var query=$("#search").val()
    //alert(query)
    let result=''

   // var api_key='3a2f1e00-6ef3-11ea-812f-2b1fe6720687'
    var url='https://app.zenserp.com/api/v2/search?apikey=3a2f1e00-6ef3-11ea-812f-2b1fe6720687'+ '&q=' + query



    $.get(url, function(data){
    


        $("#result").html('')


        console.log(data)
        data.organic.forEach(res => {
            
            result=`
            
            <h1>${res.title}</h1><a target=_blank href="${res.url}">${res.url}</a>
            <p>${res.description}</p>
            <br><br><br>
            `
            $("#result").append(result)

        });
        





    })

})
