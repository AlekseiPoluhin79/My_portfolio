document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);

	var gallery = document.querySelectorAll('.materialboxed');
	var instances_gallery = M.Materialbox.init(gallery);
});
