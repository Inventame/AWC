# AWC
## awc-facebook-comment
Is a singleton tag add facebook comments to your page.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-facebook-comment.html'>
    <body>
		<awc-facebook-comment header="Write Us" url="https://developers.facebook.com/docs/plugins/comments#configurator" numposts="5"  language="en_US"></awc-facebook-comment>
    ``

### Api Reference
#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **url**  | *String* - Set the url of the content to discuss| none |
| **language** | *String* - Set the language of the cards | en_US |
| **width** | *Number* - Set the width of the cards | none |
| **numposts** | *Number* - Set the num of posts to show | none |
| **header** | *Number* - Set the Text to call the action | none |
