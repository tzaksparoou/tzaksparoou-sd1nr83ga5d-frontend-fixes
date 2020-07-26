# Javascript 3d image zoom 
This application is fully javascript based 3d image zoom gallery 

## How to run application 
It is an normal html and javascript application so it can be run normally by opening the
`index.html` file in browser. Though, the normal application it is recommended to open application using any http request not thought the file system.

## Settings 
`settings.js`

```Javascript 
var settings = {
    firstNumberOfImages: 15, // total number of images that will load on page load
    compareTo: 3 // Total number of clicks by user on image to load next image 
}
```

## Random image feature
Image will be random view on page load. This feature depands on total number of imagse loading for the first time on page load

## How set modal 
It is recommended to place  the modal  in index.html in the sequence of image placed in `images.js` file. see the example below

*Image sequence*

```Javascript
 [{
        image: "/images/1.jpg",
        title: 'This is a caption of test1<br>But will it break?'
    },
    {
        image: "/images/2.jpg",
        title: "This is a caption of test2<br>But will it break?"
    }, {
        image: "/images/3.jpg",
        title: "This is a caption of test3<br>But will it break?"
    },
```

*modal sequence* -  Please do not forget to define the modal `id`

```html
<div id="modal1">
    <!-- modal content for 1-->
</div>
<div id="modal2">
    <!-- modal content for 2-->
</div>
<div id="modal3">
    <!-- modal content for 3-->
</div>
<!-- Continue -->
```
____