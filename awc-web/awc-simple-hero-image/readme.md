# AWC
## awc-simple-hero-image
Is a container with a full image background

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-simple-hero-image.html'>
    <body>
        <awc-simple-hero-image
            url="test/desktop.png"
            url-mobile="test/mobile.png"
            url-tablet="test/tablet.png"
            url-responsive="test/responsive.png">
            ** you can put content here **
        </awc-simple-hero-image>
    ``

### Api Reference

#### Properties
| Name | Description | Default |
| -----|-------------|---------|
| **url** | The image to display, if no other is set always use this image | none |
| **url-mobile** | The image to display on mobile mode | none |
| **url-tablet** | The image to display on tablet mode | none |
| **url-responsive** | The image to display on responsive mode | none |
| **class='fit'** | The class fit set the behavior of the image (fit, bottom, top) | fit |
