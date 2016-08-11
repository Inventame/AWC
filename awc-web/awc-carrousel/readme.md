# AWC
## awc-carrousel
Is a container for a carrousel gallery

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-carrousel.html'>
    <body>
        <!-- simple image gallery -->
    	<awc-carrousel>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	</awc-carrousel>
    	
    	<!-- gallery with content and images -->
    	<awc-carrousel>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'>
    	        <div class='content'>
    	            Put your content here
    	        </div>
    	    </awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	    <awc-carrousel-item src='/path/to/yout/image' class='page'></awc-carrousel-item>
    	</awc-carrousel>
    ``

### Api Reference

#### Properties
| Name    | Description   | Default |
| --------|---------|---------|
| **selected**  | *Number* - Set the index of the element to show.   | 0 |
| **theme** | *String* - Set the current theme (light or dark). | light |
| **hide-dots** | *Boolean* - Indicates if the dots have to be hidden or not | false |
| **autoplay** | *Boolean* - Autoplay transitions | false |
| **time** | *Number* - Time for delay transition on ms | 2000 |

#### Methods
| Name | Description | Params |
| -----|-------------|--------|
| **next** | Select next page | none |
| **back** | Select back page | none |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
|  **onSelectedPage** | Fires when a page is selected | index[Number] |