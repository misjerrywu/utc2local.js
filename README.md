utc2local.js
===========

utc2local.js is a jQuery plugin that converts UTC(+00:00) time to the user's browser local time.

## Installation
#### NPM
`npm i utc2local`

## Usage

    <p><span class="datetime">2013-01-27 10:34:13</span></p>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script type="text/javascript" src="utc2local.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        $('.datetime').utc2local();
      });
    </script>
