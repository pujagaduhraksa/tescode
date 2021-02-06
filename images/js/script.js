// event saat link
$('.page-scroll').on('click', function function_name(argument) {
	
	// ambil isi tujuan 
	var tujuan = $(this).attr('href')

	// tangkap elemen yg bersangkutan

	var elementujuan = $(tujuan);
	console.log(elementujuan);

	// pindah scroll
	$('body').animate({

		scrollTop: elementujuan.offset().top
		
	});

});