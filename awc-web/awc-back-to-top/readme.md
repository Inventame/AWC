# AWC
## awc-back-to-top
Is a singleton element that is intended to add a button, to scroll to top on a large web page.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-back-to-top.html'>
    <body>
    	<awc-back-to-top></awc-back-to-top>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-btt-backgroundColor** | Change the background color of the button | #2196f3 |
| **--awc-btt-iconColor** | Change the color of the button | #ffffff |
| **--awc-btt-margin** | Set the margin of the button | 10px |
| **--awc-btt-bottom** | Set the distance from the bottom | 10px |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **speed**  | *Number* - The speed value represent the speed of the animation scroll.   | 400    |
| **icon** | *String* - Represent the icon to display on button. By default use the iron-icons provided by **Polymer Catalog**. | expand-less    |
| **ripple-effect** | *Boolean* - Indicates if the button have to use the ripple effect | true |
| **align** | *String* - Align the button to the (left, center, right) | right |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **onScrollEnd** | Fires when the scroll top animation ends | none |