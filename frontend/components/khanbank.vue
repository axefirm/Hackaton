<template lang="html">
  <div id="wrap">
    <div id="header">
      <div id="header-content">
        <h1 id="logo">
          <img id="logo1" src="https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0022_logo.png">
          <img id="logo2" src="https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0021_card-logo.png">
          <div id="line1"></div>
        </h1>
      </div>
    </div>
    <div id="content-wrap">
      <div id="content">
        <div id="main">
          <div id="PayText">
            <span style="color: #3e9641;">ТӨЛБӨР ХИЙХ</span>
            <span style="color: #808285;"> / PAYMENT</span>
          </div>
          <div id="indicator" style="display:none;">
            <label for="indicatorImage" class="formLabel">&nbsp;</label>
            <div class="val" id="indicatorImage">
              <img src="https://epp.khanbank.com/payment/merchants/img/ajax-loader.gif" height="19" width="220" alt="indicator">
            </div>
          </div>
                  <div id="sidebar">
                  <div id="atm">
          </div>
                  <div id="AtmText"><span style="font-size: 15px; font-style: bold; color: #6d6f71;">АТМ-ААС И-ПИН КОД АВАХ ЗААВАР</span></div>
                  <div id="AtmText"><span style="font-size: 15px; font-style: bold; color: #383738;">&emsp;&emsp;&emsp;ТА </span><span style=" font-size: 15px; font-style: strong; color: #68ad41;"><a href="../manual.pdf">ЭНД</a></span><span style="color: #979a9c;"> ДАРЖ АВНА УУ.</span></div>
                  </div>

          <div id="main_tbl">
            <form name="PaymentForm" action="" method="post" id="formPayment">
              <input id="mdOrder" type="hidden">
              <input id="location" type="hidden" value="/../">
              <input type="hidden" id="expiry">
              <input id="language" value="EN" type="hidden">
              <div id="errorBlock" style="color:red;"></div>
              <table cellpadding="10" id="paymentDataTable">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <div id="numberCountdown"></div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div id="infoBlock"></div>
                      <div id="bar1">ГҮЙЛГЭЭНИЙ МЭДЭЭЛЭЛ / ORDER DETAILS</div>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" align="left">
                      <span class="txt_white">Дүн:<br></span>
                      <span style="font-size: .85em; font-style: italic; color: #666;">Amount:</span>
                      <td width="50%" align="left">
                        <div id="amount"></div>
                      </td>
                    </td>
                  </tr>
                  <tr>
                                  <td width="50%" align="left">
                                  <span class="txt_white">Гүйлгээний дугаар:<br></span>
                                  <span style="font-size: .85em; font-style: italic; color: #666;">Order ID:</span>
                                  <td width="50%" align="left">
                  <div id="orderNumber"></div>
                  </td>
                                  </td>
                                  </tr>
                                  <tr></tr>
                                  <tr>
                    <td colspan="2">
                                          <div id="bar1">ХУВИЙН МЭДЭЭЛЭЛ / PERSONAL INFORMATION</div>
                    </td>
                  </tr>
                                  <tr>
                    <td left="right" width="20">
                                      <span class="txt_white">Карт эзэмшигчийн нэр:<br></span>
                      <span style="font-size: .85em; font-style: italic; color: #666;">Cardholder name:</span>
                    </td>
                    <td>
                      <input name="TEXT" maxlength="90" id="iTEXT" size="30" type="text" autocomplete="off" autofocus />
                      <br>
                      <span hidden="true" id="iChk" style="font-size: .85em; font-style: italic; color: #666;">Картан дээрх нэрээ зөв оруулна уу.</span>
                    </td>
                  </tr>
                                  <tr></tr>
                                  <tr>
                    <td colspan="2">
                                      <div id="bar1">КАРТЫН МЭДЭЭЛЭЛ / CARD INFORMATION</div>
                    </td>
                  </tr>
                                  <tr>
                    <td width="50%" align="left">
                                          <span class="txt_white">Картын дугаар:<br></span>
                        <span style="font-size: .85em; font-style: italic; color: #666;">
                          Card number:
                        </span>
                    </td>
                    <td>
                      <input name="$PAN" maxlength="16" id="iPAN" size="30" type="text" autocomplete="off" />
                    </td>
                  </tr>
                                  <tr>
                    <td align="left">
                      <span class="txt_white">Картын ард талд байх 3 орон бүхий CVV код: <br>
                        <span style="font-size: .85em; font-style: italic; color: #666;">
                          (Enter the code CVC2/CVV2)
                        </span>
                      </span>
                    </td>
                    <td>
                      <input name="$CVC" maxlength="3" id="iCVC" size="30" type="password" autocomplete="off" />
                                          <div id="behind_card"><img id="card_arrow" src="https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0015_sum.png" height="28" width="54"></div>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <span class="txt_white">Хүчинтэй хугацаа: <br></span>
                        <span style="font-size: .85em; font-style: italic; color: #666;">
                          Expiry Date:
                        </span>
                    </td>
                    <td>
                      <select name="MM" id="month">
                        <option value="01" selected>&nbsp;&nbsp;1 - January</option>
                        <option value="02">&nbsp;&nbsp;2 - February</option>
                        <option value="03">&nbsp;&nbsp;3 - March</option>
                        <option value="04">&nbsp;&nbsp;4 - April</option>
                        <option value="05">&nbsp;&nbsp;5 - May</option>
                        <option value="06">&nbsp;&nbsp;6 - June</option>
                        <option value="07">&nbsp;&nbsp;7 - July</option>
                        <option value="08">&nbsp;&nbsp;8 - August</option>
                        <option value="09">&nbsp;&nbsp;9 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                      </select> /
                      <select name="YYYY" id="year">
                        <option value='2010' selected>2010</option>
                        <option value='2011'>2011</option>
                        <option value='2012'>2012</option>
                        <option value='2013'>2013</option>
                        <option value='2014'>2014</option>
                        <option value='2015'>2015</option>
                        <option value='2016'>2016</option>
                        <option value='2017'>2017</option>
                        <option value='2018'>2018</option>
                        <option value='2019'>2019</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      <input name="SendPayment" type="hidden" id="realPayment">
                      <input name="SendPayment2" value="Гүйлгээ хийх / Submit" type="button" class="button" id="buttonPayment" @click="done">

                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <form id="acs" method="post" action=""><input type="hidden" id="MD" name="MD"/><input type="hidden" id="PaReq" name="PaReq"/><input type="hidden" id="TermUrl" name="TermUrl"/></form>

          </div>
      </div>
      </div>
      </div>
	</div>
</template>

<script>
export default {
    methods: {
        done (){
            this.$router.push("/done");
        }
    }
}
</script>

<style lang="css" scoped>
* { padding: 0; margin: 0; outline: 0; }

body {
    margin: 0; 	padding: 0;
    font: normal 73%/1.6em 'Trebuchet MS', Tahoma, sans-serif;
    color: #555;
    background-color:#fff;
    text-align: center;
}

/* links */
a:link, a:visited { background: inherit; color: #72A545; text-decoration: none; }
a:hover { background: inherit; color: #006699; text-decoration: underline; }

/* headers */
h1, h2, h3 { font: bold 1em 'Trebuchet MS', Tahoma, Sans-serif; }
h1 { font-size: 1.4em; color: #65944A; }
h2 { font-size: 1.2em; text-transform: uppercase; }
h3 { font-size: 1.2em; }

p, h1, h2, h3 {
    margin: 10px 15px;
}
ul, ol {
    margin: 10px 30px;
    padding: 0 15px;
}
/* images */
img {
    border: 2px solid #DADADA;
    padding: 5px;
    background: #FAFAFA;
}



#card_arrow
{
	border: 0px solid #DADADA;
    padding: 0px;
    background: #FAFAFA;
	margin: 38px 0px 5px 35px;
}
f
img.float-right {
    margin: 5px 0px 5px 15px;
}
img.float-left {
    margin: 5px 15px 5px 0px;
}
#logo img {
    border: 0px;
    background: #FFFFFF;
    padding: 0px;
	margin: 15px 5px 5px -9px;
}

code {
    margin: 5px 0;
    padding: 10px;
    text-align: left;
    display: block;
    overflow: auto;
    font: 500 1em/1.5em 'Lucida Console', 'courier new', monospace;
    /* white-space: pre; */
    background: #FAFAFA;
    border: 0px solid #f2f2f2;
    border-left: 3px solid #72A545;
}
acronym {
    cursor: help;
    border-bottom: 1px solid #777;
}
blockquote {
    margin: 15px; 	padding: 0 0 0 20px;
    background-color: #FAFAFA;
    background-position: 8px 10px;
    border: 1px solid #f2f2f2;
    border-left: 3px solid #72A545;
    font: bold 1.2em/1.5em "Trebuchet MS", Tahoma, sans-serif;
    color: #666666;
}

/* start - table */
table {
    border-collapse: collapse;
    margin: 10px 15px;
}
th strong {
    color: #fff;
}
th {
    background: #74A846;
    height: 29px;
    padding-left: 11px;
    padding-right: 11px;
    color: #fff;
    text-align: left;
    border-left: 1px solid #B6D59A;
    border-bottom: solid 2px #FFF;
}
tr {
    height: 30px;
}
td {
    padding-left: 11px;
    padding-right: 11px;
    /* border-left: 1px solid #FFE1C3; */
    border-left: 1px solid transparent;
    border-bottom: solid 1px transparent;
}
td.first,th.first {
    border-left: 0px;
}
tr.row-a {
    background: #F8F8F8;
}
tr.row-b {
    background: #EFEFEF;
}
/* end - table */

/* form elements */
form {
    margin:10px 15px; padding: 0;
    border: 0px solid #f2f2f2;
    background-color: #ffffff;
    font-size: 12px;
}
label {
    display:block;
    font-weight:bold;
    margin:5px 0;
}
input {
    padding: 2px;
    border:1px solid #AAA;
    font: normal 1em "Trebuchet MS", Tahoma, sans-serif;
    color:#777;
    font-size: 12px;
}

input[type=text]:focus, input[type=password]:focus, select:focus, input[type=button]:focus, textarea:focus {
  box-shadow: 0 0 5px rgba(44, 142, 64, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(44, 142, 64, 1);
}
textarea {
    width:400px;
    padding:2px;
    font: normal 1em "Trebuchet MS", Tahoma, sans-serif;
    border:1px solid #eee;
    height:100px;
    display:block;
    color:#777;
}
input.button {
    margin: 0;
    font: bold 1em Arial, Sans-serif;
    background: #FFF url(https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0010_Vector-Smart-Object.png);
	background-repeat: no-repeat;
    padding: 2px 3px;
    color: #fff;
    border: 0px solid #DADADA;

	display: inline-block;
	border-radius: 4px;
	border: none;
	text-align: center;
	width: 141px;
	height: 20px;
	transition: all 0.5s;
	cursor: pointer;
}

/* search form */
.searchform {
    background-color: transparent;
    border: none;	margin: 0; padding: 0;
}
.searchform p { margin: 10px; padding: 0; }
.searchform input.textbox {
    width: 130px;
    color: #333;
    height: 20px;
    padding: 2px;
    vertical-align: top;
}
.searchform input.button {
    font: bold 12px Arial, Sans-serif;
    color: #333;
    width: 60px;
    height: 26px;
    border: 1px solid #DADADA;
    padding: 3px 5px;
    vertical-align: top;
}

/* ----------------------------
	  LAYOUT
------------------------------- */

#PayText {
	margin:10px 40px; padding: 0px;
	font: 22px Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", serif;
	font-weight: bold;
	}

#AtmText {
	margin:10px 45px; padding: 0px;
	font: 15px "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", Verdana, sans-serif;
	font-weight: normal;
	}

#header-content, #content, #footer-content {
    width: 98%;
}


/* header */
#header {
    text-align: left;
}
#header-content {
    margin: 0 auto; padding: 0;
    position: relative;
}

#main_tbl img#bar01{
	height: 30px;
	width:513px;
	padding: 0px 0px;
	margin: 0px 0px 0px -52px;
	border: 0px;
	}
#bar1 {
	background-image:url(https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0018_mur-1-copy-2.png);
	background-repeat: no-repeat;
	height: 15px;
	width:513px;
	padding: 7px 0px;
	margin: 0px 0px 5px -51px;
	border: 0px;
	font: bold 13px 'Trebuchet MS', Sans-serif;
	color: #FFFFFF;
	text-indent: 50px;
	}

#header-content h1#logo {
    font: bold 45px 'Trebuchet MS', Sans-serif;
    letter-spacing: -2px;
    color: #FFF;
    margin: 0; padding: 0;

    /* change the values of left and top to adjust the position of the logo */
    top: 0; left: 0px;
}
#header-content h1#logo a {
    text-decoration: none;
    color: #FFF;
}
#header-content #slogan {
    position: absolute;
    font: bold 12px 'Trebuchet Ms', Sans-serif;
    text-transform: none;
    color: #FFF;
    margin: 0; padding: 0;

    /* change the values of left and top to adjust the position of the slogan */
    top: 55px; left: 40px;
}
#payment_form {
	position:absolute;
	top:10px;
	left:500px;
}
#payment_form table {
	border:1px solid #aaa;
}
#payment_form table td, #payment_form table th {
	border:1px solid #aaa;
}

/* header menu */
#header-content ul {
    font: bolder 1.3em 'Trebuchet MS', sans-serif;
    color: #FFF;
    list-style: none;
    margin: 0; padding: 0;
}
#header-content li {
    display: inline;
}
#header-content table {
    width: 98%;
}
#header-content img#logo1 {
    height: 59px;
	width:307px;
	padding: 0px 0px;
	margin: 30px 0px 0px 30px;
}
#header-content img#logo2 {
    height: 30px;
	width:280px;
	padding: 15px 0px;
	margin: 30px 0px 0px 220px;
}


#header-content td {
    border: 0;
    vertical-align: top;
}
#header-content li a {
    float: right;
    display: block;
    padding: 3px 12px;
    color: #FFF;
    background-color: #333;
    text-decoration: none;
    border-right: 1px solid #272727;
}
#header-content li a:hover {
    background: #65944A;
    color: #FFF;
}
#header-content li a#current  {
    background: #65944A;
    color: #FFF;
}
/* content */
#content-wrap {
    width: 100%;
}
#wrap {
	background-color:#fff;
	background: url("https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0023_background.png");
	margin:20px auto;
	width:940px;
	height:753px;
}
#content {
    text-align: left;
    padding: 0;
    margin: 0 auto;
}

/* sidebar */
#sidebar {
    float: right;
    width: 370px;
	height: 299px;
    margin: 0px 0 10px 0; padding: 0px;
	border: 0px;
	background-image:url(https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0011_Vector-Smart-Object.png);
    background-repeat: no-repeat;
}

#atm
{
	float: right;
	border: 0px solid #DADADA;
    padding: 0px;
	margin: 15px 50px 5px 35px;
	height: 185px;
	width: 278px;
	background-image: url(https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0012_Vector-Smart-Object.png);
	background-repeat: no-repeat;
}

#line1 {
    height: 6px;
	width:940px;
	padding: 0px 0px;
	margin: 0px 0px 0px -9px;
	background-image:url(https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0007_line.png);
	background-repeat: no-repeat;
}

#behind_card {
    float: right;
    width: 300px;
	height: 112px;
    margin: -42px -280px 0px 0; padding: 0px;
	border: 0px;
	background-image:url(https://epp.khanbank.com/payment/merchants/img/tasalbar-zahialah-page-design-last_0008_card.png);
    background-repeat: no-repeat;
	background-position:right;
}

#sidebar h1 {
    padding: 10px 0px 5px 10px;
    margin: 0;
    font: bold 1.3em 'Trebuchet MS', Tahoma, Sans-serif;
}
.sidebox {
    background: #F5F5F5;
    border: 1px solid #EFEDED;
    margin-bottom: 10px;
}

/* sidebar menu */
#sidebar ul.sidemenu {
    list-style:none;
    margin: 10px 0 15px 0;
    padding: 0;
    background: #F2F2F2;
}
#sidebar ul.sidemenu li {
    padding: 0px 10px;
}
#sidebar ul.sidemenu a {
    display:block;
    font-weight:normal;
    color: #333;
    height: 1.5em;
    padding:.3em 0 .3em 15px;
    line-height: 1.5em;
    border-bottom: 1px dashed #D4D4D4;
    text-decoration:none;
}
#sidebar ul.sidemenu a.top{
    border-top: 1px dashed #D4D4D4;
}
#sidebar ul.sidemenu a:hover {
    padding: .3em 0 .3em 10px;
    border-left: 5px solid  #65944A;
    color: #65944A;
}

/* main */
#main {
    width: 100%;
    margin: 0 0 10px 0; padding: 0;
}
#main h1 {
    padding: 10px 0px 0px 5px;
    margin: 0 0 0 10px;
    border-bottom: 1px solid #f2f2f2;
    font: normal 1.8em 'Trebuchet MS', Tahoma, Sans-serif;
}
#main ul li {
    list-style-image: url(https://epp.khanbank.com/payment/merchants/bullet.gif);
}

/* footer */
#footer {
    clear: both;
    margin: 0; padding: 0;
    font: normal .95em/1.6em 'Trebuchet MS', Tahoma, Arial, sans-serif;
    text-align: left;
}

#footer h1, #footer p {	margin-left: 0; }

#footer-content {
    border-top: 1px solid #EAEAEA;
    margin: 0 auto;
    padding-left: 15px;
}
#footer-content a {
    text-decoration: none;
}
#footer-content a:hover {
    color: #333;
}

/* footer list */
#footer-content ul.flist {
    list-style: none;
    margin: 0; padding: 0;
    border-top: 1px solid #f2f2f2;
}
#footer-content ul.flist li {
    border-bottom: 1px solid #f2f2f2;
}
#footer-content ul.flist li a:link,
#footer-content ul.flist li a:visited {
    color: #555;
    display: block;
    font-weight: normal;
    padding: 5px 0 ;
    width: 98%;
}
#footer-content ul.flist li a:hover {
    text-decoration: none;
    color: #222;
}


#footer-content .col {
    width: 240px;
    padding: 0 5px 30px 0;
}
#footer-content .col2 {
    width: 330px;
    padding: 0 0 30px 0;
}
#footer-content .space-sep {
    margin-right: 20px;
}

/* alignment classes */
.float-left  { float: left; }
.float-right { float: right; }
.align-left  { text-align: left; }
.align-right {	text-align: right; }

/* additional classes */
.clear { clear: both; }
.gray  { color: #BFBFBF; }


.login-invalid {
    background: url('https://epp.khanbank.com/payment/merchants/invalid.png') no-repeat;
    height: 16px;
    width: 16px;
    margin-top: 4px;
    margin-left: 4px;
    float: left;
}

.login-valid {
    background: url('https://epp.khanbank.com/payment/merchants/valid.png') no-repeat;
    height: 16px;
    width: 16px;
    margin-top: 4px;
    margin-left: 4px;
    float: left;
}


.txt_white {
	color: #444;
	font-weight: bold;
	font-size: 12px;
}
</style>
