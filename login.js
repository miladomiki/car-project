function getlogin() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/posts', function (resp, status, resp_obj) {
        console.log(status);
        let input1 = $('#logmail').val();
        let input2 = $('#logpas').val();
        for (var i = 0; i < resp.length; i++) {
            if (input1 == resp[i].email && input2 == resp[i].password) {
                $('#suclogin').css({
                    'opacity': "1",
                    'visibility': "visible",
                    'z-index': "3"
                })
                $('#container').css({
                    'opacity': "0",
                    'visibility': "hidden",
                })

            }
            else if (input1 != resp[i].email && input2 != resp[i].password) {
                console.log(
                    $('#errlogin').css({
                        'opacity': "1",
                        'visibility': "visible",
                        'z-index': "3"
                    })
                )
                console.log(
                    $('#container').css({
                        'opacity': "0",
                        'visibility': "hidden",
                    })
                )
            }
        }
    })
}
