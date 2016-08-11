# AWC
## awc-price-table
Is a container for a list of prices.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-price-table.html'>
    <body>
        <awc-price-table>
			<li class="item">
				<div class="header">
					<span class="title">5</span>
					<span class="sub-title">$0.007/hour</span>
				</div>
				<div class="details">
					<span>512MB / <span style="color: #777;">1 cpu</span></span>
					<span>20GB <span style="color: #777;">SSD Disk</span></span>
					<span>1TB <span style="color: #777;">Transfer</span></span>
				</div>
			</li>
			<li class="item">
				<div class="header">
					<span class="title">10</span>
					<span class="sub-title">$0.015/hour</span>
				</div>
				<div class="details">
					<span>1GB / <span style="color: #777;">1 cpu</span></span>
					<span>30GB <span style="color: #777;">SSD Disk</span></span>
					<span>2TB <span style="color: #777;">Transfer</span></span>
				</div>
			</li>
			<li class="item active">
				<div class="header">
					<span class="title">20</span>
					<span class="sub-title">$0.03/hour</span>
				</div>
				<div class="label">MOST POPULAR PLAN</div>
				<div class="details">
					<span>2GB / <span style="color: #777;">2 cpu</span></span>
					<span>40GB <span style="color: #777;">SSD Disk</span></span>
					<span>3TB <span style="color: #777;">Transfer</span></span>
				</div>
			</li>
			<li class="item">
				<div class="header">
					<span class="title">40</span>
					<span class="sub-title">$0.06/hour</span>
				</div>
				<div class="details">
					<span>4GB / <span style="color: #777;">2 cpu</span></span>
					<span>60GB <span style="color: #777;">SSD Disk</span></span>
					<span>4TB <span style="color: #777;">Transfer</span></span>
				</div>
			</li>
			<li class="item">
				<div class="header">
					<span class="title">80</span>
					<span class="sub-title">$0.119/hour</span>
				</div>
				<div class="details">
					<span>8GB / <span style="color: #777;">4 cpu</span></span>
					<span>80GB <span style="color: #777;">SSD Disk</span></span>
					<span>5TB <span style="color: #777;">Transfer</span></span>
				</div>
			</li>
		</awc-price-table>
    ``

### Api Reference
#### Styling
The following custom properties and mixins are available for styling:

| Custom Property | Description | Default |
| ----------------|-------------|---------|
| **--awc-pt-color** | Set the general color text | #666666 |
| **--awc-pt-border** | Set the general border | 2px solid #f1f1f1 |
| **--awc-pt-background-color** | Set the background color of the containers | transparent |
| **--awc-pt-active-color** | Set the color of the active container | #ffffff |
| **--awc-pt-active-border** | Set the corder of the active container | 2px solid #0080ff |
| **--awc-pt-active-background-color** | Set the background of the active container | #0080ff |
| **--awc-pt-active-label-color** | Set the color of the label of the active container | #ffffff |
| **--awc-pt-active-label-background-color** | Set the background of the label of the active container | #0066cc |

