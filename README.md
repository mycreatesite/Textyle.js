
# Textyle.js

A simple text effect with jQuery and tiny CSS.

# How to use

## JS
Textyle.js requires **jQuery** and **textyle.js** ( or **textyle.min.js**)

### read

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="textyle.min.js"></script>
	
### call ( most simply )

	$('target').textyle();

## CSS

 ### target element

 opacity: 0;

### span (as child element)

 - **translate effect**
		position: relative;
		top: xxx;
		left: xxx;
    	
 - **fade effect**
		opacity: 0;

### example
    target {
    	opacity: 0;
    }
    target span {
    	/* translate effect */
    	position: relative;
    	top: 10px;
    	left: 10px;
    	/* fade effect */
    	opacity: 0;
    }

## Opitions

You can choose some following options or add callback function.
values below is default.

	$('target').textyle({
		duration : 400,
		delay : 100,
		easing : 'swing',
		callback : null
	});

### example

    $('target').textyle({
    	duration : 600,
    	delay : 150,
    	easing : 'linear',
    	callback : function(){
	   		$(this).css({
	   		color :  'coral',
	   		transition :  '1s',
	   		});
    	}
    });

# DEMO
<iframe height='577' scrolling='no' title='Textyle.js - Simple Text Effect -' src='//codepen.io/mycreatesite/embed/vvpmgy/?height=577&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/mycreatesite/pen/vvpmgy/'>Textyle.js - Simple Text Effect -</a> by mycreatesite (<a href='https://codepen.io/mycreatesite'>@mycreatesite</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>