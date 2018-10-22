/**
 * @author Jerry Wu <mis.jerrywu@gmail.com>
 */

($ => {
  $.fn.utc2local = function() {

		$(this).each((index, element) => {

			let utcDatetime = $.trim($(element).html());
      let weekdayLiterals = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let monthLiterals = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

			utcDatetime = utcDatetime.split(' ');
			utcDate = utcDatetime[0].split('-');
			utcTime = utcDatetime[1].split(':');
			utcDatetime = new Date(utcDate[0], Number.parseInt(utcDate[1]) - 1, utcDate[2], utcTime[0], utcTime[1], utcTime[2], 0);
			let localDatetime = utcDatetime;
			localDatetime.setMinutes(utcDatetime.getMinutes() - utcDatetime.getTimezoneOffset());

			let weekday  = weekdayLiterals[localDatetime.getDay()];
			let month  = monthLiterals[localDatetime.getMonth()];

			$(element).html(`${weekday}, ${month} ${localDatetime.getDate()}, ${localDatetime.getFullYear()} ${('0' + localDatetime.getHours()).slice(-2)}:${('0' + localDatetime.getMinutes()).slice(-2)}`);
		});
	};

})(jQuery);
