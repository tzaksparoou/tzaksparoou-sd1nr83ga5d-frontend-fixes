"use strict";

/**
 * settings {Object} - All the settings
 * - firstNumberOfImages {Number} -  Total number of images which will be loaded on page load
 * - compareTo {Number}  -  Total number of clicks for image load. (3), one image will get load every 3 click
 * - bgImgBlur {Number}  -  Blur level of background images in pixels
 * - bgImgOpacity {Number}  -  Transparency level of background images in decimals (0.0-> fully transparent, 1.0->fully opaque)
 * - perspectiveAngleFactor {Number}  -  Arbitrary factor for image spread. Recommended values 500-1200 - CAREFULL:It might produce unnecessary sideffects 
 */
var settings = {
    firstNumberOfImages: 14,
    compareTo: 1,
    bgImgBlur: 2,
    bgImgOpacity: 0.5,
    perspectiveAngleFactor: 500 // Default:700
}