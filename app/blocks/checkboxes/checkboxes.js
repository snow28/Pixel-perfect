import $ from 'jquery';

$(() => {
	var checkbox = $('.js-checkbox');

	checkbox.on('click', function (){
		var checked = $(this).find('.js-box');
		console.log(checked);
		checked.toggleClass('active');
	});
	$('#box1').checked();
});
