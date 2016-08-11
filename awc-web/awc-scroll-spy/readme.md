# AWC
## awc-scroll-spy
Is a singleton tag to spy containers, when the container is visible fires an event

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-scroll-spy.html'>
    <body>
    	<awc-scroll-spy spy='.items'></awc-scroll-spy>
    	...
		<div class="items" id='uno'>one</div>
		<div class="items" id='dos'>two</div>
		<div class="items" id='tres'>three</div>
		<div class="items" id='cuatro'>four</div>
		<div class="items" id='cinco'>five</div>
    ``

### Api Reference

#### Properties
| Name | Description | Default |
| -----|-------------|---------|
| **spy** | Especifies the selector to spy | none |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **itemActiveChanged** | Fires when a container becomes visible | item |
