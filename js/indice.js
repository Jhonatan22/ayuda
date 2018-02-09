(function() {
	var menuEl = document.getElementById('ml-menu'),
		mlmenu = new MLMenu(menuEl, {
			// breadcrumbsCtrl : true, // show breadcrumbs
			// initialBreadcrumb : 'all', // initial breadcrumb text
			backCtrl : false, // show back button
			// itemsDelayInterval : 60, // delay between each menu item sliding animation
			//onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
		});
})();