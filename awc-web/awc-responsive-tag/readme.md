# AWC
## awc-responsive-tag
Is a container for responsive content.

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-responsive-tag.html'>
    <body>
    	<awc-responsive-tag>
			<div class="desktop">
			    Visible on desktop mode
			</div>
			<div class="default">
			    Visble on desktop and tablet mode
			</div>
			<div class="responsive">
			    Visible on mobile and tablet mode
			</div>
			<div class="tablet">
			    Visible on tablet mode
			</div>
			<div class="mobile">
			    Visible on mobile mode
			</div>
    	</awc-responsive-tag>
    ``

### Api Reference

Is an inline tag, dont need any attribute or argument

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **onBecomeDesktop** | Fires when the container becomes on desktop mode | none |
| **onLeaveDesktop** | Fires when the container leaves the desktop mode | none |
| **onBecomeDefault** | Fires when the container becomes on default mode | none |
| **onLeaveDefault** | Fires when the container leaves the default mode | none |
| **onBecomeResponsive** | Fires when the container becomes on responsive mode | none |
| **onLeaveResponsive** | Fires when the container leaves the responsive mode | none |
| **onBecomeTablet** | Fires when the container becomes on tablet mode | none |
| **onLeaveTablet** | Fires when the container leaves the tablet mode | none |
| **onBecomeMobile** | Fires when the container becomes on mobile mode | none |
| **onLeaveMobile** | Fires when the container leaves the mobile mode | none |
