import React, { Component} from 'react';
import dt from './dt.png';

class About extends Component {
  render() {
    return(
        
    <div>
        <p>
        <head>
	 <meta charset="utf-8"/>
	 <title>about us</title>
     <link rel="stylesheet" type="text/css" href="styles.css"/>
  </head>
  <body>

<div class="team-section">
	<h1>About Us</h1>
	<span class="border"></span>

<div class="ps">
	<a href="#"><img src={dt} alt="dt"/></a>
	
</div>

<div class="section" id="p1">
	<span class="name">Donald Trump</span>
	<span class="border"></span>
	<p>
		We are Kamerplant inc. we strive to get the best plants available to you.

Over 40 years of dedication have granted us the best genetic plant-
strains available in the Netherlands and the whole world.

You can contact us for extra help, or find community support in our
"plant support" forum. 
		
	</p>

	
</div>
</div>

  </body>
        </p>
        </div>
);
  }

}

export default About;