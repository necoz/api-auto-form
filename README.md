<b>Dynamic Form Plugin - jQuery & Bootstrap</b>
<br />Extras - Sending data via ajax for a jSON API
	
<b>INSTALL</b>
- Copy the file rdform.js to your JS folder;
- Copy the file rdform.css to your CSS folder;
- Link your JS and CSS into your HTML:
	<script type="text/javascript" src="js/rdform.js"></script>	
	<link rel="stylesheet" type="text/css" href="css/rdform.css" />


<b>HOW TO USE</b> 
- Make the plugin call:
	$('#rdForm').formrd(options);


<b>RUNNING</b>
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

<b>TEST</b>	
The tests were performed using the framework Jasmine using Grunt Server Task
