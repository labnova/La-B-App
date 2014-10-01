$(document).ready(function() {
	$(document).on("pageshow", "[data-role='page']", function() {
		if( $($(this)).hasClass("header_default")) {
			
			$('<header data-role="header" data-position="fixed" data-theme="a"><a href="#" data-rel="back" class="ui-btn-left ui-btn-icon-left  ui-arrow-icon-l">Indietro</a><a href="#mydialog" class="ui-btn-right ui-icon-info ui-btn-icon-right">Info</a><h1>La(B)App</h1></header>')
				.prependTo( $(this) ) 
				.toolbar({position:'fixed'});

			$('[data-role="header"] h1').text($(this).jqmData('title'))
			

		} //if header

		if($($(this)).hasClass('footer_default')) {
			$('<footer data-role="footer" data-position="fixed" data-theme="b">'+
		'<div  data-role="controlgroup" style="text-align:center; "data-type="horizontal">'+
		'<a href="#lavori" class="ui-btn"><i style="margin-right:10px;" class="fa fa-git"></i>Lavori</a>'+
		'<a href="#blog" class="ui-btn"><i style="margin-right:10px;" class="fa fa-calendar-o"></i>Notizie</a>'+
		'<a href="#libri" class="ui-btn"><i style="margin-right:10px;" class="fa fa-university"></i>Libri</a>'+
		'<a href="#frammenti" class="ui-btn"><i style="margin-right:10px;" class="fa fa-file-video-o"></i>Frammenti</a>'+
		'</div>'+


	'</footer>').appendTo($(this))
			.toolbar({position:'fixed'});
		}

		var current= $('.ui-page-active').attr('id');

		$('[data-role="footer"] a.ui-btn-active').removeClass('ui-btn-active');
		$('[data-role="footer"] a').each(function() {
			if($(this).attr('href')==='#'+current) {
				$(this).addClass('ui-btn-active');
			}
		});

	});  //mostra pagina

}); //document.ready



function listPosts(data){
	console.log(data);
	 output += '<p>Ciao</p>';
	
	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';


	 output += '<ul data-role="listview" data-filter="true" data-input="#searchposts">';


	$.each(data.posts, function(key,val) {

		var tempDiv= document.createElement('tempDiv');
		tempDiv.innerHTML= val.excerpt;
		$('a', tempDiv).remove();
		var excerpt= tempDiv.innerHTML;

		output += '<li>';
		output += '<a href="#blogpost" onclick="showPost(' +val.id+ ')">';
		output += (val.thumbnail) ? '<img src="'+val.thumbnail+'" alt="'+val.title+'" />' : '<img src="http://www.labnova.it/wp-content/uploads/2014/04/logo_lab.jpg" alt="La(B)Nova">';
		output += '<h3>' +val.title+ '</h3>';
		output += '<p>' +excerpt+'</p>';
		output += '</a>';
		output += '</li>';


	}); //andare attraverso ogni post


	output += '</ul>';

	$("#postList").html(output);

} //listPosts

function showPost(id) {
	
	//utilizzare il metodo get_post delle JSON API
	$.getJSON("http://www.labnova.it/?json=get_post&post_id="+id+"&callback=?", function(data){
		var output='<h3>'+data.post.title+'</h3>';
		output += data.post.content;
		$('#mypost').html(output);
	} );
} //showPost

function listVideos(data) {
	
	var output='';
	for(var i=0; i<data.feed.entry.length; i++) {
		var title=data.feed.entry[i].title.$t;
		var thumbnail=data.feed.entry[i].media$group.media$thumbnail[0].url;
		var description=data.feed.entry[i].media$group.media$description.$t;
		var id=data.feed.entry[i].id.$t.substring(38);

		var blocktype=((i % 2)===1) ? 'b':'a';

		output +='<div class="ui-block-'+blocktype+'">';
		output += '<h3 class="movietitle">'+title+'</h3>';
		output +='<a href="#videoplayer" data-transition="fade" onclick="playVideo(\''+id+ '\', \''+title+' \', \''+ escape(description) +'\' )"> ';
		output +='<img src="'+thumbnail+'" alt=" '+title+' " />';
		output +='</a>';
		output +='</div>';
	} //entries Loop
	$('#videoList').html(output);
} //listVideos

function playVideo(id, title, description) {
	var output='<iframe src="http://www.youtube.com/embed/'+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
	output +='<h3>'+title+'</h3>';
	output +='<p>'+ unescape(description) +'</p>';
	$('#myplayer').html(output);

}

function jsonFlickrFeed(data) {
	
	var output="";

	for(var i=0; i<data.items.length;i++) {
		var title=data.items[i].title;
		
		var link=data.items[i].media.m.substring(0,57);
		var blocktype=
		((i%4)===3) ? 'd':
		((i%4)===2) ? 'c':
		((i%4)===1) ? 'b':
		'a';
		output +='<div class="ui-block-'+blocktype+'">';
		output +='<a href="" data-transition="fade" onclick="showPhoto(\''+link+'\',\''+title+'\')">';
		output +='<img src="'+link+'_m.jpg" alt="'+title+'">';
		output +='</a>';
		output +='</div>';
	}

	$('#photolist').html(output);
}


function showPhoto(link, title) {
	var output ='<a href="#foto" data-transition="fade"> ';
	 output += '<img src="'+link+'.jpg" alt="'+title+'"   /> ';
	 output +='</a>';

	$('#myphoto').html(output);

}

function listTweets(data) {
	var output= '<ul data-role="listview">';
	$.each(data, function(key, val) {
		var text= data[key].text;
		var thumbnail= data[key].user.profile_image_url;
		//thumbnail= thumbnail.substring(0, thumbnail.length-12)+'_bigger';
		var name= data[key].user.name;

		text=text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(i){
			var url= i.link(i);
			return url;
		});

		text=text.replace(/[@]+[A-Za-z0-9-_]+/g, function(i){
			var item= i.replace("@", "");
			var url= i.link("http://twitter.com/"+item);
			return url;
		});

		text=text.replace(/[#]+[A-Za-z0-9-_]+/g, function(i){
			var item= i.replace("@", "");
			var url= i.link("http://twitter.com/"+item);
			return url;
		});

		output +='<li>';
		output += '<img src="'+thumbnail+'" alt="foto di '+name+'" />';
		output += '<div>'+text+'</div>';
		output += '</li>';


	}); //attraverso ogni dato

	output +='</ul>';
	$('#tweetlist').html(output);
} //listTweets