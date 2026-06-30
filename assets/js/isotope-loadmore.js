/*===================================
Author       : Bestwebcreator.
Template Name: Shopwise - eCommerce Bootstrap 4 HTML Template
Version      : 1.0
===================================*/

	var $container  = $(".loadmore");
	if( $container.length > 0 ) {
		if ($container.hasClass("masonry")){
			$container.isotope({
				itemSelector: '.grid_item',
				percentPosition: true,
				layoutMode: "masonry",
				masonry: {
					columnWidth: '.grid-sizer'
				},
			});
		} 
		else {
			$container.isotope({
				itemSelector: '.grid_item',
				percentPosition: true,
				layoutMode: "fitRows",
			});
		}
	}

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = $('.loadmore').data('item'); //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance
  var btn_text = $container.data('btn');
  
  
  loadMore(initShow); //execute function onload
  function loadMore(toShow) {
    $container.find(".grid_item.grid_item_hide").removeClass("grid_item_hide");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('grid_item_hide');
	
	$container.isotope('layout');
	

    //when no more to load, hide show more button
		if (hiddenElems.length == 0) {
			jQuery(".load_more_wrap #load-more").hide();
			var message = $('.loadmore').data('finish-message');
			$('.load_more_wrap').append("<span class='alert alert-info'>" + message + "</span>");
			try { if (io && sentinel) { io.unobserve(sentinel); } } catch(e){}
		} else {
			jQuery(".load_more_wrap #load-more").show();
		};

  }
  //append load more button
	$container.after("<div class='text-center load_more_wrap'><button id='load-more' class='btn btn-fill-out'>" + btn_text + "</button></div>");
	// optional: enable infinite scroll when data-infinite="true" on .loadmore
	var infinite = $container.data('infinite'); // set data-infinite="true" to enable
	var io = null;
	var sentinel = null;
	var loadingMore = false;
	if (infinite) {
		jQuery(".load_more_wrap #load-more").hide();
		jQuery('.load_more_wrap').append("<div id='load-more-sentinel' style='height:1px;width:100%'></div>");
		sentinel = document.getElementById('load-more-sentinel');
		if (sentinel && 'IntersectionObserver' in window) {
			io = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting && !loadingMore) {
						var show = $container.data('item-show') || 4;
						loadingMore = true;
						counter = counter + show;
						setTimeout(function(){
							loadMore(counter);
							loadingMore = false;
						}, 300);
					}
				});
			}, { rootMargin: '200px' });
			io.observe(sentinel);
		}
	}
 
  //when load more button clicked
  $("#load-more").click(function() {
	var show = $('.loadmore').data('item-show');
    counter = counter + show ;
	$("#load-more").addClass('loading');
		setTimeout(function(){
		  $('#load-more').removeClass('loading');
		  loadMore(counter);
		}, 800);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  