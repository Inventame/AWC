# AWC
## awc-continue-down-button
Is a container for large texts

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-continue-down-button.html'>
    <body>
        <awc-continue-down-button target="second" icon-size="50" tooltip="Down"></awc-continue-down-button>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-cdb-bottom** | Set the space from bottom of the container to the button | 30px |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **icon-size** | *Number* - Set the icon size on pixels | 36 |
| **icon-color** | *Hex* - Set the color of the icon | #ffffff |
| **icon** | *String* - Set the icon of the button, use the iron-icons set from **Polymer Catalog** | expand-more |
| **background-color** | *Hex* - Set the background color of the button | transparent |
| **ripple-effect** | *Boolean* - Set the ripple effect | false |
| **fab** | *Boolean* - Set the button type, normal or fab | false |
| **target** | *String* - Expecifies the container to scroll down | none |
| **speed** | *Number* - Set the speed of the animation scroll on ms | 50 |
| **motion-less** | *Number* - Set of the button have to be animated or not | false |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **onScrollEnd** | Fires when the scroll animation comes to end | none |