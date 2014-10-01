<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Costruzione app jQuery Mobile</title>
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.min.css" />
  <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="http://code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.min.js"></script>

<meta name='viewport' content="width=device-width,initial-scale=1, maximum-scale=1" />
<meta name="apple-mobile-web-app-capable" content='yes'>
<meta name='apple-mobile-web-app-status-bar-style' content="black">

</head>
<body>

<section id="home"  class="header_default footer_default" data-role="page">




	<div class="ui-content">
	<nav class="ui-controlgroup">
	<a href='#blog' class='ui-btn ui-icon-edit ui-btn-icon-left ui-corner-all ui-btn-b'>Blog</a>
	<a href='#video' class='ui-btn ui-icon-edit ui-btn-icon-left ui-corner-all ui-btn-b'>Video</a>
	<a href='#foto' class='ui-btn ui-icon-edit ui-btn-icon-left ui-corner-all ui-btn-b'>Foto</a>
	<a href='#tweets' class='ui-btn ui-icon-edit ui-btn-icon-left ui-corner-all ui-btn-b'>Tweets</a>
	</nav>
	
	</div>



	
</section>

<!--pagina:blog-->
<section id="blog" class="header_default footer_default" data-role='page' data-title="Blog">



	<h1>Benvenuti</h1>
	<div data-role="content" id="postList">
	

	</div><!--contenuto del Blog-->
	

	

</section><!--Pagina del Blog-->

<!--pagina:blogpost -->
<section id="blogpost" class="header_default footer_default" data-role='page' data-title="Notizia">

	<div data-role="content">
	
		<div id="mypost"></div>

	</div>
	

	
</section>

<section id='video' class="header_default footer_default" data-role="page" data-title='Video'>
	<div data-role='content'>
		<div class='ui-grid-a' id='videoList'></div>


	</div> <!--content -->
		

</section> <!-- pagina dei video -->

<section id='videoplayer' class="header_default footer_default" data-role='page' data-title='Player'>
	<div data-role='content'>
	<div id='myplayer'></div>

	</div>	<!--content -->

</section> <!-- pagina del player -->

<section id="foto" class="header_default footer_default" data-role="page" data-title="Photo grid">
<div data-role='content'>
	<div  id="photolist" class='ui-grid-c'></div>

	</div>	<!--content -->

</section> <!-- pagina foto -->

<section id="showphoto" class="header_default footer_default" data-role="page">
<div data-role="content">
	<div id="myphoto"></div>


</div> <!--content -->
	
</section> <!-- pagina della foto singola -->

<section id="tweets" class="header_default footer_default" data-role="page" data-title="Tweets">
<div data-role="content" id="tweetlist">
	<div id="myphoto"></div>


</div> <!--content -->
	
</section> <!-- pagina Tweets -->


<section id="mydialog" data-role="dialog" data-title="Info">
<header data-role="header"><h1>Info</h1></header>
	<div data-role="content">
		<p>Beta di La(B)App</p>
	</div>
</section> <!-- pagina Dialog -->


<script src="js/scripts.js"></script>
<script src="http://www.labnova.it/?json=1&count=7&callback=listPosts"></script>
<script src="https://gdata.youtube.com/feeds/users/GoogleDevelopers/uploads?alt=json&max-results=20&callback=listVideos" /></script>
<!-- <script src="http://api.flickr.com/services/feeds/photos_public.gne?id=60913863@N08&format=json"></script> -->
<script src="http://www.storialab.it/app_lab/tweets_json.php?count=30&callback=listTweets"></script>
</body>
</html>


