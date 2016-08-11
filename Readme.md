# AWC - Amazing Web Components Beta 1

by [Inventame]( "www.inventa.me")

This collections of components are completly **free**.

You can use it on your personal or non-personal projects

**This set of components are still in beta fase**

###Use it under your own risk.

---

This is a set of simple components to help you, to create
web pages **faster** and **easier**.

It is based on [Polymer 1.0]( "https://www.polymer-project.org/1.0/")
and the web components standard for extending HTML and componentizing your webs.

Also use [Material Design Lite]( "https://getmdl.io/") styles,
but you can use it with your favorite **CSS framework**.

---

### List of components
* [Back to top button]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-back-to-top/readme.md")
* [Explosive card]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-card-explosive/readme.md")
* [Carrousel]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-carrousel/readme.md")
* [Content wrapper]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-content-wrapper/readme.md")
* [Continue down button]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-continue-down-button/readme.md")
* [Facebook comments]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-facebook-commentp/readme.md")
* [Facebook timeline]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-facebook-timeline/readme.md")
* [Loading button]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-loading-button/readme.md")
* [Overlay menu]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-overlay-menu/readme.md")
* [Page preloading bar]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-page-preloading/readme.md")
* [Parallax container]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-parallax-container/readme.md")
* [Price table]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-price-table/readme.md")
* [Responsive tags]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-responsive-tag/readme.md")
* [Scroll spy]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-scroll-spy/readme.md")
* [Share button]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-share-button/readme.md")
* [Hero images]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-simple-hero-image/readme.md")
* [Social buttons]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-social-buttons/readme.md")
* [Fixed top and responsive menu]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-top-menu/readme.md")
* [Hero videos]("https://github.com/inventame/AWC/blob/branch/awc-web/awc-video-hero/readme.md")

---

### Use
You can use the "dist" folder to imports your components.

    ``
    <link rel="import" href="/path/to/your/dist/component">
    ``
    
In order to use your components you need to install the dependencies, on the folder
**dist/awc-web** install the bower components, runing on your cmd:

    ``
    $ bower install
    ``

---

### Testing
In order to test the components you can use the **testingserver** folder to run
a local server *http://localhost:3000* and browse what to do each component.

to run the testingserver, install dependencies on the testingserver folder, runing
on your cmd:

    ``
    $ npm install
    
    //and runing the server
    
    $ node index
    ``
    
---

### Create dist folder
In order to create your dist folder you need to run first on your cmd:

    ``
    $ npm install
    ``

And now we can create our own dist folder run from your cmd:

    ``
    $ gulp build
    ``
    
Every folder you have on **awc-web** folder will be compressed and moved to **dist** folder