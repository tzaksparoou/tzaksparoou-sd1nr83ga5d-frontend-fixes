/**
 * UI constructor
 */
var numberOfClick = 0;

function Ui() {
    // Container
    this.$ = document.querySelector.bind(document);
    this.$$ = document.querySelectorAll.bind(document);
    this.container = this.$("#gall");
    this.i = 0;
    this.contentLength = images.length;
    this.maxLoopLength = settings.firstNumberOfImages;
    this.modals = this.$$(".modalDialog");

    if (this.modals.length > 0) {
        this.getModals();
    }
}

Ui.prototype.getModals = function() {
    this.modalIds = [];
    this.modals.forEach(modalAttr.bind(this));

    function modalAttr(modal) {
        var id = modal.getAttribute('id');
        if (id) {
            this.modalIds.push(id);
        }
    }
}

// Prototypes 
/**
 * It is responsible to loop the config images
 */
Ui.prototype.loopData = function() {
    for (this.i; this.i < this.maxLoopLength; this.i++) {
        this.createAndAppendElement(images[this.i], this.i, function(res) {
            //console.log();
        });
    }
}

/**
 * Responsible to create and append newly created element with images & caption to the container
 * @param {Object} item - single item having image and caption 
 * @param {Number} index - index of the element, basically index of config images index
 * @param {Function} callback - callback function, it wil run after append element to the container successfully
 */
Ui.prototype.createAndAppendElement = function(item, index, callback) {
    var divEl = createElement("div");
    divEl.setAttribute("id", "element-" + index);
    divEl.setAttribute("class", "wrapper " + item.theme);
    var imgEl = createElement("img");
    imgEl.src = item.image;
    var titleEl = createElement("p");
    var anchorTag = createElement("a");
    anchorTag.setAttribute('href', '#' + this.modalIds[index]);
    anchorTag.innerHTML = item.title;
    titleEl.appendChild(anchorTag);
    titleEl.setAttribute("class", 'caption');

    divEl.appendChild(imgEl);
    divEl.appendChild(titleEl);
    this.container.appendChild(divEl);
    callback(divEl);
}

/**
 * Responsible to add next gallary element
 * It should invoke on click each gallery image
 */
Ui.prototype.addNext = function() {
    // counting number of click
    numberOfClick++;
    if (numberOfClick == settings.compareTo) {
        if (this.i < this.contentLength) {
            var nextIndex = this.i++;
            var nextImage = images[nextIndex];
            this.createAndAppendElement(nextImage, nextIndex, function(element) {
                var currentImg = document.querySelector("#element-" + nextIndex).querySelector('img');
                currentImg.onload = function() {
                    pgal.N = nextIndex + 1;
                    pgal.O[nextIndex] = new pgal.PGObj(nextIndex);
                    numberOfClick = 0;
                }
            });
        }
    }
}

/**
 * Outside of class constructor, it helps to create new element
 * Just created for shortcut 
 * @param {*} element 
 */
function createElement(element) {
    return document.createElement(element);
}




/**
 * Createing instance and initializing the UI feature
 */

var UI = new Ui();
UI.loopData();

// document.querySelector("#nextImage").addEventListener("click", UI.addNext);