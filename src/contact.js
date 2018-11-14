import React, { Component} from 'react';

class Contact extends Component {
  render() {
    return(
        
    <div>
        <p>
        <head>
	<title>Contact pagina</title>
 	<link rel="stylesheet" type="text/css" href="styles.css"/>
</head>
<body>
	<div class="contact-title">
		<h1>Zeg hallo</h1>
		<h2>We zijn er voor jou!</h2>
	</div>

	<div class="contact-form">
		<form id="contact-form" method="post" action="contact-form-handler.php">
		<input type="text" name="name" class="form-control" placeholder="Jouw Naam" required/>
		
		<input type="email" name="email" class="form-control" placeholder="Jouw Email" required/>

			<textarea name="message" class="form-control" placeholder="Bericht" row="4" required></textarea>

			<input type="submit" class="form-control submit" value="STUUR BERICHT"/>

		</form>
	</div>

</body>
        </p>
        </div>
);
  }

}

export default Contact;