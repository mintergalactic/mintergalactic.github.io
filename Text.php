<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-witdh, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/Text.css">
	<title> Talath, l'autre monde </title>
</head>

<body onmousedown="WhichButton(event)">

	<div class="fly-in-text hidden">
		Morpheus : Bonjour.
	</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript">
	$(function()
	{
		setTimeout(function()
		{
			$('.fly-in-text').removeClass('hidden');
		},500);

		window.oncontextmenu = function()
		{
			window.location.href="http://localhost/private/Talath3/Menu.php";
		}

	})
	();


</script>

<script type="text/javascript">
	
	function Charger_Page()
	{
		window.location.href="http://localhost/private/Talath3/Menu.php";
	}


$(function()
{
	setTimeout(function()
	{
		$('.fly-in-text').addClass('blink');
	},3000);

}
		)
();

function WhichButton(event)
{
	Charger_Page()
}
</script>

</body>
</html>