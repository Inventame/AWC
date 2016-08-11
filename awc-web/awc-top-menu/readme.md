# AWC
## awc-top-menu
Is a container for menu links with automatic responsive presentation and fixed to the top of the page.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-top-menu.html'>
    <body>
		<awc-top-menu
		    logo="https://elements.polymer-project.org/images/polymer.svg"
		    responsive-hero=true
		    logo-responsive-menu='https://elements.polymer-project.org/images/polymer.svg'
		    spy='.items' collapse>
    			<span class="title">Company Name</span>
    			<a href="#home" target='uno'>Home</a>
    			<a href="#about" target='dos'>About</a>
    			<a href="#products" target='tres'>Products</a>
    			<a href="#services">Services</a>
    			<a href="#contac">Contact</a>
		</awc-top-menu>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-tm-background** | Set the default background color on the presentation mode | none |
| **--awc-tm-color** | Set the default text coloron the presentation mode | #000000 |
| **--awc-tm-bar** | Set the color of the line on the active item | #2196f3 |
| **--awc-tm-background-scroll** | Set the background color on the scroll mode | #2196f3 |
| **--awc-tm-color-scroll** | Set the text color on the scroll mode | #ffffff |
| **--awc-tm-bar-scroll** | Set the color of the line on the active item on scroll mode | #ffffff |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **logo**  | *String* - Set the url of the logo | none |
| **logo-responsive** | *String* - Set the url of the logo on the responsive mode | none |
| **logo-size** | *Number* - Set the width of the logo | 100px |
| **logo-size-responsive** | *Number* - Set the width of the logo on responsive mode | 50px |
| **collapse** | *Boolean* - Set the behavior of the menu on responsive mode | true |
| **responsive-hero** | *Boolean* - Indicates if the logo on responsive mode have to be a hero image | false |
| **spy** | *String* - Set the selector to scroll spy and sync with the attribute "target" from the link in the menu | none |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **itemActiveChanged** | Fires when an item is been activated by click or scroll spy | *[Object HTML]* item |

