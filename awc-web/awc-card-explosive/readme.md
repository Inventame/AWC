# AWC
## awc-card-explosive
Is a container with expanded content.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-card-explosive.html'>
    <body>
    	<awc-card-explosive>
    	    <div class='default'>Default content of a card</div>
    	    <div class='expanded'>
    	        <!-- If you want to use the default close button use -->
			<button class='awc-ce-close'></button>
			<!-- with close button aligne to left -->
			<button class='awc-ce-close awc-ce-close-align-left'></button>
    	        Expanded content
    	        ...
    	    </div>
    	</awc-card-explosive>
    ``

### Api Reference

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **expand-on-click** | *Boolean* - Set the behavior of the expand event, if have to expand on click or not | true |
| **x** | *String* or *Number* - Set the x axis to display the expanded content | 50% |
| **y** | *String* or *Number* - Set the y axis to display the expanded content | 50% |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **onCardExpanded** | Fires when the card been expanded | none |
| **onCardCollapse** | Fires when the card been collapsed | none |
