<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
  
  <html>
  <head>
	<title>Instagram signup</title>
    <link rel="stylesheet" href="instasignup.css"/>
    <link rel="icon" href="instalogo.png"/>
	</head>
	<body id="body">
	<form action="Updatefile" method="post" id="form1">
		<h3 class="heading" >Instagram</h3>
		<pre class="pre" >Sign up to see photoes and videos
from your friends.</pre>
		<button id="facebtn">Log in with Facebook</button>
		<br><br>
		<hr class="starthr">
		<br>
		<h6 class="or" >OR</h6>
		<br><hr class="endhr">
		<br><br>
		<input type="text" placeholder="Mobile Number or Email" name="email" id="email" required/>
		<span id="asterick" style="color:red;font-size:large;margin-left:2px" >*</span>
		<br>
		<input type="text" placeholder="Full Name" name="fullname" id="fullname" required />
		<span id="asterick2" style="color:red;font-size:large;margin-left:2px" >*</span>
		<br>
		<input type="text" placeholder="Username" name="username" id="username" required/>
		<span id="asterick3" style="color:red;font-size:large;margin-left:2px" >*</span>
		<br>
		<input type="password" placeholder="Password" name="pass" id="password" required/>
		<span id="asterick4" style="color:red;font-size:large;margin-left:2px" >*</span>
		<br>
		<p class="head1"> People who use our service may have uploaded<br> your contact informationto instagram.<a href="#"> Learn<br> More</a></p>
		<p class="head1" > By signing up,you agree to our <a href="#">Terms, Privacy <br>Policy</a> and <a href="#">Cookies Policy .</a></p>
		<button id="signupbtn">Sign up</button>
	</form>
	<form class="footform" id="form2">
		<p>Have an account? <a href="insta.jsp" class="login" >Log in</a>
	</form>
	<p class="getapp">Get the app.</p>
	<div id="loader">
		<div class="loading">
		</div>
	</div>
	<script src="instasignup.js"></script>
	</body>
</html>
