# AWC
## awc-page-preloading
Is singleton tag to add a preloader bar on top of the page

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-page-preloading.html'>
    <body>
        <awc-page-preloading color="#2BC45C"></awc-page-preloading>
    ``

### Api Reference
#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **color** | *Hex* - Set the title of the bar | #2196f3 |
| **media** | *Boolean* - Especifies the type of loading, progressive or infinit loop | true |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| load | Fires when window is loaded | none |
