# AWC
## awc-content-wrapper
Is a container for large texts

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-content-wrapper.html'>
    <body>
        <awc-content-wrapper>
            Put your text here
        </awc-content-wrapper>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-cw-more-gradient** | Set the fade on text when it is collapsed | 255,255,255 |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **width**  | *Number* - Set the width of the container. | auto |
| **height** | *Number* - Set the height of the container | 300px |
| **background** | *Hex* - Set the background color of the container | transparent |
| **fade-speed** | *String* - Set the speed of theexpand animation | 0.4s |
| **expand-text** | *String* - Set the text of the expand button | More |
| **collapse-text** | *String* - Set the text of the collapse button | Hide |
| **shadow** | *Number*- Set the amount of shadow of the container | 3 |
| **button-align** | *String* - Set the align of the button (left, center, right) | right |
| **icon-size** | *Number* - Set the icon size on pixels | inherith |
| **icon-color** | *Hex* - Set the color of the icon | #000000 |
| **expand-icon** | *String* - Set the icon of the expand button, use the iron-icons set of **Polymer Catalog** | expand-more |
| **collapse-icon** | *String* - Set the icon of the collapse button, use the iron-icons set of **Polymer Catalog** | expand-less |
| **ripple-effect** | *Boolean* - Set the ripple effect on button | false |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **onExpand** | Fires when the container expanded | none |
| **onCollapse** | Fires when the container collapsed | none |