# AWC
## awc-video-hero
Is a container with video background

### Usage
    ``
    <link rel='import' href='/path/to/awc-web/awc-video-hero.html'>
    <body>
    	<awc-video-hero
    	    url="RSlK2aG8doY"
    	    video-type="video/mp4"
    	    background-image="image.jpg"
    	    type="youtube">
    		<div class="content" >
    			**You can put your content here**
    		</div>
    	</awc-video-hero>
    ``

### Api Reference

#### Properties
| Name | Description | Default |
| -----|-------------|---------|
| **type** | Set the type of the video [html, videojs, youtube] | html |
| **video-type** | Set the type of the video content | video/mp4 |
| **url** | Set the url of the video, on youtube videos just put the id of the video | none |
| **url-responsive** | Set the url video on responsive mode | none |
| **loop** | Set if the video have loop | true |
| **autoplay** | Set if the video start automatict | true |
| **muted** | Set if the video have to be mute | true |
| **class='fit'** | Set the behaviot of the container | none |
| **height** | Set the height of the container | none |
| **background-image** | Set the preloading image | default |
| **background-color** | Set the background of the container | default |

#### Methods
| Name | Description | Params |
| -----|-------------|--------|
| **play** | Play the video | none |
| **pause** | Pause the video | none |
| **stop** | Stop the video | none |

#### Events
| Name | Description | Params |
| -----|-------------|--------|
| **onbeforestart** | Fires before the start to play the video | none |
| **onend** | Fires when the video becomes to end | none |
