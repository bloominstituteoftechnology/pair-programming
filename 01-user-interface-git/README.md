# User Interface and Git - pair programming exercises

## _Driver - Navigator_ pair programming
The ***driver*** will... 
* share their screen
* control the keyboard
* talk & think aloud with their navigator (like you would do in an interview or in the workplace)   

The ***navigator*** will...  
* have the README open 
* talk & think aloud with their driver (like you would do in an interview or in the workplace) 
* provide suggestions and instructions to the driver (both WHAT they should do and WHY you think they should do it)  


The ***driver*** and ***navigator*** will switch roles at the designated point in the programming exercise.

## Before you start
![github](img/Octocat.png) Want to work directly with this repository? Make sure to follow Lambda's GitHub workflow and [fork the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo).

You can also copy & paste the starter code into [codepen](https://codepen.io/).  

## The problem 
Try to replicate the site shown in the images below.  
![view](img/replicate.png)

The following shows how your site should behave on a smaller screen (or if you resize the window)
![view-resizing](img/replicate.gif)

#### 10 mins
The ***mentee*** will drive while attempting to:
* add the three images
* define the style for `<img>` elements in the CSS
* define the style for `.flex-container` in the CSS

#### 10 mins
The ***mentor*** will drive while attempting to:
* complete any of the above tasks not finished in the first 10 minutes
* add the three numeric labels
* format the numeric labels by defining the style for `<div>` elements in the CSS

### Resources

#### Links to images used:
* https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg
* https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg
* https://images.pexels.com/photos/399647/pexels-photo-399647.jpeg

#### Starter code

`index.html`
```html
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="flex-container">
            <!-- To be completed -->
        </div>
    </body>
</html>

```

`style.css`
```css
.flex-container {
    /* To be completed */
  }

img {
    /* To be completed */
}

div {
    /* To be completed */
}
```

### STRETCH 
Investigate the `flex-grow` property. Use it to make the image of the dog grow faster, relative to other images, as we resize the screen.