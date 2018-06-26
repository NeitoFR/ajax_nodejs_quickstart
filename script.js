$(function () {
    $('#str').keyup(function(evt){
        console.log('Launching request');
        if(evt.target.value.length != 0){
            $.post('http://localhost:3000/askhint', 
            {
                string : $('#str').val()
            }, 
            function(data, status){
                var str = '';
                // console.log(status, ' : ', data);
                $('#txtHint').text(data.join(', '))
            });
        }
        else
        $('#txtHint').text('')
    });
    $('#button').click(function(evt){
        $.post('http://localhost:3000/askhint', 
        {
            string : 'a'
        }, 
        function(data, status){
            console.log(status, ' : ', data);
        });
    })
});