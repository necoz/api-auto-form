Dynamic Form Plugin - jQuery & Bootstrap
Extras - Sending data via ajax for a jSON API
	
===== INSTALL ===== 
- Copy the file rdform.js to your JS folder;
- Copy the file rdform.css to your CSS folder;
- Link your JS and CSS into your HTML:
	<script type="text/javascript" src="js/rdform.js"></script>	
	<link rel="stylesheet" type="text/css" href="css/rdform.css" />


===== HOW TO USE ===== 
- Make the plugin call:
	$('#rdForm').formrd(options);


===== RUNNING =====
- Create an array of Options:
	options = { 
		'token':'62bb61431348e228', 
		'secret':'51a266c2844ccd5', 
		'modal':true, 
		'fields':{ 
			'text_example': '',
			'select_example':['A','B','C','D']
		}
	}

===== TEST =====	
The tests were performed using the framework Jasmine using Grunt Server Task
