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
- Create an array:<br />
	options = { <br />
		'token':'0000000xxxx000xxxx0000',<br /> 
		'secret':'000000xxxx000xxxx0000', <br />
		'modal':true, <br />
		'fields':{ <br />
			'state_text': ['California','Ohio'],<br />
			'level_select':['1','2']<br />
		}<br />
	}<br />
			
<b>TEST</b>	
The tests were performed using the framework Jasmine using Grunt Server Task
