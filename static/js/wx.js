

function wxdata(tidval){

var result='';



  $.ajax({

        type: "post",

      //  url: 'https://hge8e.me/wxadmgenew/chw/index.php/Home/wxdata/wxcxres?',
        url: '',

          data:{


       // tid:tidval,
       typename:tidval,

     },

//      data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。

        cache: false,

        async : false,

        dataType: "json",

        success: function (data ,textStatus, jqXHR)

        {

          console.log('数据请求成功')

          console.log(data); 

        result=data;

        

        },

        error:function (XMLHttpRequest, textStatus, errorThrown) {      

            console.log('数据请求失败');

        }

     });

return result;

}

//6  22

var urlval2=window.location.hostname; //返回mp.csdn.net

let arrym = urlval2.split('.');

var mindex=arrym.length

urlval=arrym[mindex-2]+'.'+arrym[mindex-1];

var urlvalcxval=urlval+'url';

var imgvalcxval=urlval+'img';

var cnzzvalcxval=urlval+'cnzz';



//下载链接开始  https://aaaa.00dqj.cn/

var downlaodarr=wxdata(urlvalcxval);

var  loaddl_arr=downlaodarr[0]; 

//console.log(loaddl_arr)

var downclassfiy=downlaodarr['classify'];

//loaddl_arr=['dmn865'];/*微信号,可添加数个*/

var load_index = Math.floor((Math.random()*loaddl_arr.length));//,''


//var wximg="<img  src='wximg/"+loadhref+".jpg' >"

if(downclassfiy=='1'){


var loadhref = loaddl_arr[load_index]['wx']; 

var  loadhrefimg=loaddl_arr[load_index]['wximgurl']; 

var wximg="<img  src='' >"


}

else{

     var loadhref = loaddl_arr[load_index]['kwd'];  

}


//下载链接结束  https://aaaa.00dqj.cn/

//logo和名称开始
var logoarr=wxdata(imgvalcxval);

var  logoname=logoarr[0]; 

//console.log(logoname)

var logonameclassfiy=logoarr['classify'];

//logoname=['dmn865'];/*微信号,可添加数个*/

var logon_index = Math.floor((Math.random()*logoname.length));//,''


if(logonameclassfiy=='1'){


var logonname = logoname[logon_index]['wx']; 

var  logonnameimg=logoname[logon_index]['wximgurl']; 

var logowximg="<img   src='' >"

var wximgurl=""+logonnameimg

//<img src="static/picture/logo.jpg" style="border-radius: 10px;">

}

else{

     var logonname = logoname[logon_index]['kwd'];  

}


//logo和名称结束


//cnzz开始  https://aaaa.00dqj.cn/

var cnzzarr=wxdata(cnzzvalcxval);

var  cnzz_arr=cnzzarr[0]; 

//console.log(loaddl_arr)

var cnzzclassfiy=cnzzarr['classify'];

//loaddl_arr=['dmn865'];/*微信号,可添加数个*/

var cnzz_index = Math.floor((Math.random()*cnzz_arr.length));//,''


//var wximg="<img  src='wximg/"+loadhref+".jpg' >"

if(cnzzclassfiy=='1'){


var cnzzhref = cnzz_arr[cnzz_index]['wx']; 

var  cnzzhrefimg=cnzz_arr[cnzz_index]['wximgurl']; 

var cnzzwximg="<img  src='' >"


}

else{

     var cnzzhref = cnzz_arr[cnzz_index]['kwd'];  

}


//cnzz结束  










