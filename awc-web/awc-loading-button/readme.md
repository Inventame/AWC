# AWC
## awc-loading-button
Is a button with loading state

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-loading-button.html'>
    <body>
        <awc-loading-button button-text="Large" size="lg" loading-text="Loading..."></awc-loading-button>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-lb-color** | Set the color of the text | #424242 |
| **--awc-lb-background** | Set the background color | transparent |
| **--awc-lb-spinner-color** | Set the color of the spinner | #4285f4 |
| **--awc-lb-spinner-stroke** | Set the stroke of the spinner | 3px |
| **--awc-lb-success-background** | Set the background color when is success | #00C853 |
| **--awc-lb-success-color** | Set the color of the text when is success | #ffffff |
| **--awc-lb-error-background** | Set the background color when is on error | #F44336 |
| **--awc-lb-error-color** | Set the color of the text when is on error | #ffffff |

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **shadow** | *Number* - Set the amount of shadow | none |
| **button-text** | *String* - Set the text of the button | none |
| **loading-text** | *String* - Set the text of the button when is loading | none |
| **success-text** | *String* - Set the text of the button when is success | none |
| **error-text** | *String* - Set the text of the button when is error | none |
| **size** | *String* - Set the size of the button [xs, xm, md, lg] | md |
| **ripple-effect** | *Boolean* - Set the ripple effect | false |
| **disabled** | *Boolean* - Disable the button | false |
| **auto-loading** | *Boolean* - Fires the loading state on click | false |

#### Methods
| Name | Description | Params |
| -----|-------------|--------|
| startLoading | Start the loading effect | none |
| stopLoading | Stops the loading sffect | none |
| success | Set the success state | none |
| error | Set the error state | none |
| default | Set the default state | none |
