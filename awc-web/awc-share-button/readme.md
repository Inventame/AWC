# AWC
## awc-share-button
Is a singleton tag to add a social share behavior to your links or content.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-share-button.html'>
    <body>
        <awc-share-button url="https://g.co/kgs/i2hx06" text="Article Number One" from="www.inventame.com"></awc-share-button>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-sb-text-color** | Set the text color | #6B787A |
| **--awc-sb-icon-color** | Set the icon color | #6B787A |
| **--awc-sb-icon-background** | Set the icon background color | #CFD8DC |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **url**  | *String* - Set the url of the content to share | none |
| **text** | *String* - Set the text to share | none |
| **from** | *String* - Set the url from the content is sahred | none |
| **type** | *String* - Set the type of the icon [default, fab] | default |
| **display-text** | *Boolean* - Indicates if the text have to be displayed | false |
| **email** | *Boolean* - Set the email option | true |
| **facebook** | *Boolean* - Set the facebook option | true |
| **twitter** | *Boolean* - Set the twitter option | true |
