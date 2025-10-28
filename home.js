$(function () {
    $('#myList a:last-child').tab('show')
})


function getcar1() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        $('#cars').html(resp[0].name);
        $('#carsinf').html(resp[0].info);
        $('#carsimg').attr('src', resp[0].logo);
    })
}
function getcar2() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[1].name);
        $('#carsinf').html(resp[1].info);
        $('#carsimg').attr('src', resp[1].logo);
    })
}
function getcar3() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[7].name);
        $('#carsinf').html(resp[7].info);
        $('#carsimg').attr('src', resp[7].logo);
    })
}
function getcar4() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[4].name);
        $('#carsinf').html(resp[4].info);
        $('#carsimg').attr('src', resp[4].logo);
    })
}
function getcar5() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[3].name);
        $('#carsinf').html(resp[3].info);
        $('#carsimg').attr('src', resp[3].logo);
    })
}
function getcar6() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[5].name);
        $('#carsinf').html(resp[5].info);
        $('#carsimg').attr('src', resp[5].logo);
    })
}
function getcar7() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[6].name);
        $('#carsinf').html(resp[6].info);
        $('#carsimg').attr('src', resp[6].logo);
    })
}
function getcar8() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/endtermweb/cars', function (resp, status, resp_obj) {
        console.log(status);
        $('#cars').html(resp[2].name);
        $('#carsinf').html(resp[2].info);
        $('#carsimg').attr('src', resp[2].logo);
    })
}

function getmerc() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/mercedes/mercedes', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div111').val();
        for (var i = 0; i < resp.length; i++) {
            $('#merc1').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return "Mercedes-Benz: '" + resp[i].type + "'";
                }
            })
            $('#merc2').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return resp[i].info;
                }
            })
            $('#merc3').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#merc3').attr('src', resp[i].img);
                }
            })
            $('#like').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#like').css('visibility', "visible");
                }
            })
        }
    })
}
function getbmw() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/bmw/bmw', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div222').val();
        for (var i = 0; i < resp.length; i++) {
            $('#bmw1').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return "BMW: '" + resp[i].type + "'";
                }
            })
            $('#bmw2').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return resp[i].info;
                }
            })
            $('#bmw3').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#bmw3').attr('src', resp[i].img);
                }
            })
            $('#like2').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#like2').css('visibility', "visible");
                }
            })
        }
    })
}
function gettesla() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/tesla/tesla', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div333').val();
        for (var i = 0; i < resp.length; i++) {
            $('#tesla1').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return "Tesla: '" + resp[i].type + "'";
                }
            })
            $('#tesla2').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return resp[i].info;
                }
            })
            $('#tesla3').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#tesla3').attr('src', resp[i].img);
                }
            })
            $('#like3').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#like3').css('visibility', "visible");
                }
            })
        }
    })
}
function gettoyota() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/toyota/toyota', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div444').val();
        for (var i = 0; i < resp.length; i++) {
            $('#toyota1').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return "Toyota: '" + resp[i].type + "'";
                }
            })
            $('#toyota2').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return resp[i].info;
                }
            })
            $('#toyota3').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#toyota3').attr('src', resp[i].img);
                }
            })
            $('#like4').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#like4').css('visibility', "visible");
                }
            })
        }
    })
}
function getferrari() {
    $.get('https://my-json-server.typicode.com/KuanyshZhardenbay/audi/ferrari', function (resp, status, resp_obj) {
        console.log(status);
        let inpt2 = $('#div555').val();
        for (var i = 0; i < resp.length; i++) {
            $('#ferrari1').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return "Ferrari: '" + resp[i].type + "'";
                }
            })
            $('#ferrari2').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    return resp[i].info;
                }
            })
            $('#ferrari3').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#ferrari3').attr('src', resp[i].img);
                }
            })
            $('#like5').html(function (ind, old_value) {
                if (inpt2 == resp[i].type) {
                    $('#like5').css('visibility', "visible");
                }
            })
        }
    })
}