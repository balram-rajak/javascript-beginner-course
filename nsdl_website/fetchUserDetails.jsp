






<script type="text/javascript" src="/jquery/jquery-3.5.0.min.js"></script>
<script type="text/javascript" src="/jquery/jquery-3.5.0.js"></script>
<script type="text/javascript" src="/js/common.js"></script>
<script type="text/javascript" src="/js/md5.js"></script> 
<script type="text/javascript" src="/js/Base64Encoder.js"></script> 
<script type="text/javascript" src="/js/jquery-ui.js"></script>




<link rel="stylesheet" href="/js/themes/base/ui.all.css" type="text/css"/>
<link rel="stylesheet" href="/themes/6/js-image-slider.css" type="text/css" />
<link rel="stylesheet" href="/css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="/css/style.css" type="text/css">
<link rel="stylesheet" href="/css/fonts.css" type="text/css">
<link rel="stylesheet" href="/css/hover.css" media="all">
<link rel="stylesheet" href="/css/font-awesome.min.css" media="all">
<link rel="stylesheet" href="/css/lightbox.min.css" type="text/css">
<link rel="stylesheet" href="/css/animate.css" type="text/css">
<link rel="stylesheet" href="/css/contact-buttons.css" type="text/css">
<link rel="stylesheet" href="/style/jquery.dualSlider.0.2.css" type="text/css" media="all" />
<link rel="stylesheet" href="/style/keyboardstyle.css" type="text/css" />




<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>NSDL Prepaid Card Portal</title>
		<link href="/css/new_style.css" rel="stylesheet">
       	<script type="text/javascript" src="/js/userDetails.js"></script>
	<script type="text/javascript">
	$(document).on({
		"contextmenu": function(e) {
		    alert("Right Click is not Allowed" );
			return false;
		}
		});
function doNothing(){
	
}
function goBack() {
	  window.history.back(-2);
	}
function RightClickDisabled()
	{
	alert("Right Click is not Allowed" );
	return false;
	}
</script>
	</head>

	<body class="login login-bg" >
		
		<div class="container-fluid">
			<center></center>
			<div class="container tablayout_cp">
				<!--<div class="logo_dive">
					<img class="m30" src="images/NSDL_LOGO.png"> 
				</div>-->
				<div class="clearfix">	
					<!-- <ul class="top-logo">
						<li> -->
						 <img width="220"  align="left" src="/images/Logo-nsdl.png" > 
						
					<ul class="right-header">
						<li><b>Call Center</b>  <span> – 022-42022100</span></li>
						<li><b>Email ID</b><span> – care@nsdlbank.co.in</span></li>
					</ul>
				</div>
				<div class="white-bg">
				<div class="text-center log_title">
					<div class="h5">
						<h5>
							User Details
						</h5>
					</div>
				</div>
				<!-- <p class="box6">
					Forgot Password
				</p> -->
				<div class="medt_txt">
					<span class="actionMessage">All Fields are Mandatory</span>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12 m10">
					<hr>
					</hr>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12 m10 trans_srch txt-input">
					<form id="forgotPass" name="forgotPass" action="/fetchUserDetails.jsp" method="post" class="form-horizontal margint">
						     <input type="hidden" name="TOKEN" id="TOKEN"/>
						
						<span class="actionMessage"> </span>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="form-group"></div>
							<div class="form-group">
								<font class="col-md-5 control-label">Card Number <span class="colo">*</span> </font>
								<div class="col-md-6 col-xs-12 inputGroupContainer">
									<div class="input-group">
										<span class="input-group-addon"><i
											class="glyphicon glyphicon-pencil"></i> </span>
										<input type="text" name="cardNo" id="cardNo"
											onkeypress="return IsNumeric(event)"
											onchange="checkCard(this,'')"
											autocomplete="off" maxlength="16" size="20"
											class="form-control">
									</div>
									(Please enter your 16 digit credit card number)
									<div id="msg" style="color: red"></div>
									
										
									
								</div>
							</div>
							<div class="form-group">
								<font class="col-md-5 control-label">Card Expiry Date <span class="colo">*</span>
								</font>
								<div class="col-md-6 col-xs-12 inputGroupContainer">
									<div class="input-group">
										<span class="input-group-addon"><i
											class="glyphicon glyphicon-calendar"></i> </span>

										MM
										<select name="select" id="select" onchange="getMonth(this);"
											style="height: 30px;">
											<option value="00">
												00
											</option>
											

											<option value="01"
												>
												01
											</option>
											

											<option value="02"
												>
												02
											</option>
											

											<option value="03"
												>
												03
											</option>
											

											<option value="04"
												>
												04
											</option>
											

											<option value="05"
												>
												05
											</option>
											

											<option value="06"
												>
												06
											</option>
											

											<option value="07"
												>
												07
											</option>
											

											<option value="08"
												>
												08
											</option>
											

											<option value="09"
												>
												09
											</option>
											
											<option value="10"
												>
												10
											</option>

											
											<option value="11"
												>
												11
											</option>

											
											<option value="12"
												>
												12
											</option>

											
										</select>
										YYYY
										<select name="select2" id="select2" onchange="getYear(this);"
											style="height: 30px;">
											<option value="0000">
												0000
											</option>
											
											<option value="2011"
												>
												2011
											</option>

											
											<option value="2012"
												>
												2012
											</option>

											
											<option value="2013"
												>
												2013
											</option>

											
											<option value="2014"
												>
												2014
											</option>

											
											<option value="2015"
												>
												2015
											</option>

											
											<option value="2016"
												>
												2016
											</option>

											
											<option value="2017"
												>
												2017
											</option>

											
											<option value="2018"
												>
												2018
											</option>

											
											<option value="2019"
												>
												2019
											</option>

											
											<option value="2020"
												>
												2020
											</option>

											
											<option value="2021"
												>
												2021
											</option>

											
											<option value="2022"
												>
												2022
											</option>

											
											<option value="2023"
												>
												2023
											</option>

											
											<option value="2024"
												>
												2024
											</option>

											
											<option value="2025"
												>
												2025
											</option>

											
											<option value="2026"
												>
												2026
											</option>

											
											<option value="2027"
												>
												2027
											</option>

											
											<option value="2028"
												>
												2028
											</option>

											
											<option value="2029"
												>
												2029
											</option>

											
											<option value="2030"
												>
												2030
											</option>

											
											<option value="2031"
												>
												2031
											</option>

											
											<option value="2032"
												>
												2032
											</option>

											
											<option value="2033"
												>
												2033
											</option>

											
											<option value="2034"
												>
												2034
											</option>

											
											<option value="2035"
												>
												2035
											</option>

											
											<option value="2036"
												>
												2036
											</option>

											
											<option value="2037"
												>
												2037
											</option>

											
											<option value="2038"
												>
												2038
											</option>

											
											<option value="2039"
												>
												2039
											</option>

											
											<option value="2040"
												>
												2040
											</option>

											
											<option value="2041"
												>
												2041
											</option>

											
											<option value="2042"
												>
												2042
											</option>

											
											<option value="2043"
												>
												2043
											</option>

											
											<option value="2044"
												>
												2044
											</option>

											
											<option value="2045"
												>
												2045
											</option>

											
											<option value="2046"
												>
												2046
											</option>

											
											<option value="2047"
												>
												2047
											</option>

											
											<option value="2048"
												>
												2048
											</option>

											
											<option value="2049"
												>
												2049
											</option>

											
											<option value="2050"
												>
												2050
											</option>

											
											<option value="2051"
												>
												2051
											</option>

											
											<option value="2052"
												>
												2052
											</option>

											
											<option value="2053"
												>
												2053
											</option>

											
											<option value="2054"
												>
												2054
											</option>

											
											<option value="2055"
												>
												2055
											</option>

											
											<option value="2056"
												>
												2056
											</option>

											
											<option value="2057"
												>
												2057
											</option>

											
											<option value="2058"
												>
												2058
											</option>

											
											<option value="2059"
												>
												2059
											</option>

											
											<option value="2060"
												>
												2060
											</option>

											
											<option value="2061"
												>
												2061
											</option>

											
											<option value="2062"
												>
												2062
											</option>

											
											<option value="2063"
												>
												2063
											</option>

											
											<option value="2064"
												>
												2064
											</option>

											
											<option value="2065"
												>
												2065
											</option>

											
											<option value="2066"
												>
												2066
											</option>

											
											<option value="2067"
												>
												2067
											</option>

											
											<option value="2068"
												>
												2068
											</option>

											
											<option value="2069"
												>
												2069
											</option>

											
											<option value="2070"
												>
												2070
											</option>

											
											<option value="2071"
												>
												2071
											</option>

											
											<option value="2072"
												>
												2072
											</option>

											
											<option value="2073"
												>
												2073
											</option>

											
											<option value="2074"
												>
												2074
											</option>

											
											<option value="2075"
												>
												2075
											</option>

											
											<option value="2076"
												>
												2076
											</option>

											
											<option value="2077"
												>
												2077
											</option>

											
											<option value="2078"
												>
												2078
											</option>

											
											<option value="2079"
												>
												2079
											</option>

											
											<option value="2080"
												>
												2080
											</option>

											
											<option value="2081"
												>
												2081
											</option>

											
											<option value="2082"
												>
												2082
											</option>

											
											<option value="2083"
												>
												2083
											</option>

											
											<option value="2084"
												>
												2084
											</option>

											
											<option value="2085"
												>
												2085
											</option>

											
											<option value="2086"
												>
												2086
											</option>

											
											<option value="2087"
												>
												2087
											</option>

											
											<option value="2088"
												>
												2088
											</option>

											
											<option value="2089"
												>
												2089
											</option>

											
											<option value="2090"
												>
												2090
											</option>

											
											<option value="2091"
												>
												2091
											</option>

											
											<option value="2092"
												>
												2092
											</option>

											
											<option value="2093"
												>
												2093
											</option>

											
											<option value="2094"
												>
												2094
											</option>

											
											<option value="2095"
												>
												2095
											</option>

											
											<option value="2096"
												>
												2096
											</option>

											
											<option value="2097"
												>
												2097
											</option>

											
											<option value="2098"
												>
												2098
											</option>

											
											<option value="2099"
												>
												2099
											</option>

											
										</select>
									</div>
									
										
									
								</div>
							</div>
							<div class="form-group">
								<font class="col-md-5 control-label">Captcha<span class="colo">*</span>
								</font>
								<div class="col-md-6 col-xs-12 inputGroupContainer">
									<div class="input-group">
										<span class="input-group-addon"><i
											class="glyphicon glyphicon-pencil"></i> </span>
										<input id="captchaKey" type="text" class="form-control"
											name="captchaKey" size="21" value="" autocomplete="off" />
									</div>
									<br>

									<img src="/Captcha.jpg"
										name="captchaimg" id="captchaimg" width="120" height="40" />
									<span><a id="captchaRef"> <img
												src="/images/refresh_button.gif" border="0"
												width="20" height="32" size="22" /> </a> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

									<br>
									
										
									
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
							<div class="form-group"></div>
							<div class="form-group">
								<font class="col-md-5 control-label">CVV<span class="colo">*</span>
								</font>
								<div class="col-md-6 col-xs-12 inputGroupContainer">
									<div class="input-group">
										<span class="input-group-addon"><i
											class="glyphicon glyphicon-phone"></i> </span>
										<input id="txtSecureCode" name="txtSecureCode" type="password"
											class="form-control" title="3 digits" maxlength="3"
											size="21" onkeypress="return IsNumeric(event)">
									</div>
									
										
									
								</div>
							</div>
						</div>
				</div>
				<div align="center">
					<div align="center">
						<input type="hidden" name="expiryDate" id="expiryDate" />
					</div>
					<div align="center">
						<input type="button" class="button hvr-float-shadow black-btn"
							id="submitButton" value="Submit" name="submitButton" 
							onclick="javascript:ajaxgetuserdetails('/getDetails.action','')"
							 />
						<input type="reset" class="button hvr-float-shadow black-btn btn-secondary"
							id="resetButton" value="Reset" name="resetButton"
							onclick="callReset();" />
					</div>
				</div>
				 <div align="right">
					<img src="/images/blue-arrows.png"	width="11" height="7" />
					<a id="Link"
						href="/goBack.action?TOKEN=7DJM-F158-GIRT-H96Y-WWKT-4H5Q-84DA-BGGY"><font>Back</font> </a>
				</div>
				</form>



				</div>
				<p>
					&nbsp;
				</p>
				<div class="footer">
				<span>Powered By</span><span class="blue-color"><b>In-Solutions Global</b></span><span><img src="/images/isg_logo.png" width="55"></span>
				</div>
			</div>
			
		</div>
		
		<div class="inn_footer">
			<p>
				Copyright 2017, Design &amp; Coding by -
				<a href="http://http://www.insolutionsglobal.com/" target="_blank">In-Solutions Global Pvt. Ltd.</a> 
			</p>
			<p>
				Site best viewed in browsers I.E 11+, Mozilla 3.5+, Chrome 3.0+,
				Safari 5.0+ on all desktops, laptops, and Android &amp; iOS
				mobile/tablet devices
			</p>
		</div>
	</body>
</html>
<script src="/JavaScriptServlet"></script>
