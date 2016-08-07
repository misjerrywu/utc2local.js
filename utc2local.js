/**
 * @author Jerry Wu <mis.jerrywu@gmail.com>
 */

(function($){
  $.fn.utc2local = function() {
	
		$(this).each(function(){
			
			var utc_datetime = $.trim($(this).html());
		
			utc_datetime = utc_datetime.split(' ');
			utc_date = utc_datetime[0];
			utc_date = utc_date.split('-');
			utc_time = utc_datetime[1];
			utc_time = utc_time.split(':');
			utc_datetime = new Date(utc_date[0], parseInt(utc_date[1]) - 1, utc_date[2], utc_time[0], utc_time[1], utc_time[2], 0);
			var local_datetime = utc_datetime;
			local_datetime.setMinutes(utc_datetime.getMinutes() - utc_datetime.getTimezoneOffset());
			
			var week_day  = '';
			
			switch(local_datetime.getDay())
			{
				case 0:
					week_day = 'Sun';
					break;
				case 1:
					week_day = 'Mon';
					break;
				case 2:
					week_day = 'Tue';
					break;
				case 3:
					week_day = 'Wed';
					break;
				case 4:
					week_day = 'Thu';
					break;
				case 5:
					week_day = 'Fri';
					break;
				case 6:
					week_day = 'Sat';
					break;
			}
			
			var month  = '';
			
			switch(local_datetime.getMonth())
			{
				case 0:
					month = 'Jan';
					break;
				case 1:
					month = 'Feb';
					break;
				case 2:
					month = 'Mar';
					break;
				case 3:
					month = 'Apr';
					break;
				case 4:
					month = 'May';
					break;
				case 5:
					month = 'Jun';
					break;
				case 6:
					month = 'Jul';
					break;
				case 7:
					month = 'Aug';
					break;
				case 8:
					month = 'Sep';
					break;
				case 9:
					month = 'Oct';
					break;
				case 10:
					month = 'Nov';
					break;
				case 11:
					month = 'Dec';
					break;
			}
			
			$(this).html(week_day + ', '+ month + ' ' + local_datetime.getDate() + ', ' + local_datetime.getFullYear() + ' ' + ('0' + local_datetime.getHours()).slice(-2) + ':' + ('0' + local_datetime.getMinutes()).slice(-2));
		});	
	};
	
})(jQuery);
