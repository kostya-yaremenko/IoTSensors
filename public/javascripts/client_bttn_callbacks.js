/**
 * Created by kostya on 19.05.2018.
 */
var chanel_counter = 0;
var chanel_id_pref = 'chanel_';
var l_device_id = 'l_device_';
var chanel_block ='<div class="well" id="chanel_{1}"><p><strong>{2}</strong></p><ul class="list-group"></ul></div>';
var list_block = '<li class="list-group-item" id="l_device_"> <div class="row"><div class="col-sm-2"><img src="{1}" class="img-circle" height="35" width="35" alt="Avatar"></div><div class="col-sm-5"><p align="left" class="font-weight-bold"><font size="3">{2}</font></p></div><div class="col-sm-3" ></div><div class="col-sm-2" ><button type="button" class="close" aria-label="Close" ><span aria-hidden="true"><font size="6">&times;</font></span></button></div></div></li>';
var bttn_list_block = '<li><a href="#">{1}</a></li>';

var chanels = {};

var getChanelIdByName = function(name) {
    for(i=0; chanels.lenght; ++i){
        if (chanels[i].name == name){
            return i
        }
    }
}

var getDeviceId = function(){

}

var addChanelToBttn = function(chanel_name) {
    var chanel_id = chanel_id_pref+getChanelIdByName(chanel_name);
    var device_id = getDeviceId();
    var temp = bttn_list_block.sub(0, -1);
    temp = temp.replace('{1}', chanel_name);
    // chanels[chanel_id].devices.push(device_id);
    console.log(temp);
    document.querySelector('.chanels_bttn').innerHTML+=temp;
}

var handleClickOnAddChanel = function (event) {
    var input_obj = document.querySelector('#new_chanel_name')
    var chanel_name = input_obj.value;
    if (chanel_name == '') {
        alert('Enter chanel Name!');
        return;
    }
    var temp = '';
    temp = chanel_block+temp;
    temp = temp.replace('{1}', chanel_counter);
    temp = temp.replace('{2}', chanel_name);
    document.getElementById('chanels_list').innerHTML+=temp;

    chanels[chanel_id_pref+chanel_counter] = {name:chanel_name};
    addChanelToBttn(chanel_name);
    ++chanel_counter;
    input_obj.value = '';
    console.log(chanel_name);
};

var button = document.querySelector('#add_chanel_bttn');
console.log(""+(button));
button.addEventListener('click', handleClickOnAddChanel);

