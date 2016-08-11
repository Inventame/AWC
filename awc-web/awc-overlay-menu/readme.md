# AWC
## awc-overlay-menu
Is a container for drawer menus

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-overlay-menu.html'>
    <body>
        <awc-overlay-menu id='menu' title='Responsive' hero='true' logo='https://elements.polymer-project.org/images/polymer.svg'>
			<a href="#">Item 1</a>
			<a href="#">Item 2</a>
			<a href="#">Item 3</a>
		</awc-overlay-menu>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-om-color** | Set the color of the text | #424242 |
| **--awc-om-background-color** | Set the background color | #CFD8DC |
| **--awc-om-hover-background-color** | Set the background color when is hover | #B0B5BA |
| **--awc-om-hover-color** | Set the color of the text when is hover | #829494 |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **title** | *String* - Set the title of the menu | Menu |
| **logo** | *String* - Set the image of the menu | none |
| **hero** | *Boolean* - Especifies if the logo have to be displayed as a hero image | false |
| **hero-height** | *String* - Especifies the height of the hero image | 100px |

#### Methods
| Name | Description | Params |
| -----|-------------|--------|
| show | Show the menu | none |
| hide | Hide the menu | none |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| click | Fires when menu is clicked | Html.Object (target) |
| onShow | Fires when the menu is showing | none |
| onHide | Fires when the menu is hidding | none |
