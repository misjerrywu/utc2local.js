utc2local.js
============

utc2local.js is a jQuery plugin that converts UTC(+00:00) time to user browser's local time.

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="your_js_folder/utc2local.js"></script>

<span class='datetime'>2013-01-27 10:34:13</span>

<script type="text/javascript">
$(document).ready(function(){
  $('.datetime').utc2local();
});
</script>
