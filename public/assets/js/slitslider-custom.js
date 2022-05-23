$(function () {

	var Page = (function () {

		var $nav = $('#nav-dots > span'),
			slitslider = $('#slider').slitslider({
				onBeforeChange: function (slide, pos) {

					$nav.removeClass('nav-dot-current');
					$nav.eq(pos).addClass('nav-dot-current');

				}
			}),

			init = function () {

				initEvents();

			},
			initEvents = function () {
				let count = 1, len = $nav.length;

				setInterval(() => {
					slitslider.jump(count += 1);
					if (count === len) count = 0;
				}, 3000);


				$nav.each(function (i) {
					$(this).on('click', function (event) {

						var $dot = $(this);


						if (!slitslider.isActive()) {

							$nav.removeClass('nav-dot-current');
							$dot.addClass('nav-dot-current');

						}

						slitslider.jump(i + 1);
						count = i;
						return false;

					});

				});

			};

		return { init: init };

	})();

	Page.init();

}); 