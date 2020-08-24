function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);


var isSafari = /(?=.*safari)(?=.*mac)/i.test(window.navigator.userAgent);

if (isSafari) {
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "css/safari.css";

    document.querySelector("head").insertAdjacentElement("beforeend", style);
}

//Shows image as a background for mobile devices or a random video for larger screens.
$(function () {
    var randomVideo = Math.floor(Math.random() * $('.bgvideo').length);
    if (mobileCheck()) {
        $('.bgvideo').eq(randomVideo).removeAttr("loop").css("filter", "").show();
    } else {
        // $('.bgvideo').eq(randomVideo).show();
        $('.bgvideo').eq(randomVideo).attr("autoplay", "").attr("preload", true).css("filter", "").show();
    }
});
var $$ = document.querySelectorAll.bind(document);
// -----------------------------------------------------------------------------------------------

to_px = function (x) { return ''.concat(Math.round(x), 'px'); }
g_resize = function () { pgal.resize(); }

var pgal = {
    O: [],
    N: 0,
    S: 0,
    items: 0,
    xm: 0,
    ym: 0,
    nx: 0,
    ny: 0,
    nw: 0,
    nh: 0,
    cx: 0,
    cy: 0,
    zoom: 1,
    x: 0,
    y: 0,
    z: -30000,
    xt: 0,
    yt: 0,
    zt: 0,
    imageSpread: 10,

    init: function () {
        this.cx = this.nw / 2;
        this.cy = this.nh / 2;
        this.items = document.getElementById('gall').getElementsByTagName('div');
        this.N = this.items.length;
        for (var i = 0; i < this.N; i++) this.O[i] = new this.PGObj(i);
        this.run();
        var randonNumberLimit = settings.firstNumberOfImages + 1;
        var randonNumber = Math.floor(Math.random() * randonNumberLimit);
        this.O[randonNumber].click();
    },
    resize: function () {
        var o = document.getElementById('gall');
        this.nx = o.offsetLeft;
        this.ny = o.offsetTop;
        this.nw = o.offsetWidth;
        this.nh = o.offsetHeight;
        // Different size of images if it is a mobile device or not
        if (mobileCheck()) {
            if (!isChrome) {
                this.zoom = this.nh / 800;
            } else {
                this.zoom = this.nh / 1000;
            }
        } else {
            this.zoom = this.nh / 1800;
        }
    },
    run: function () {
        if (mobileCheck() && !isChrome) {
            pgal.cx += (pgal.xm - pgal.cx) * .5;
            pgal.cy += (pgal.ym - pgal.cy) * .5;
            pgal.x += (pgal.xt - pgal.x) * .4;
            pgal.y += (pgal.yt - pgal.y) * .4;
            pgal.z += (pgal.zt - pgal.z) * .6;
        } else {
            pgal.cx += (pgal.xm - pgal.cx) * .1;
            pgal.cy += (pgal.ym - pgal.cy) * .1;
            pgal.x += (pgal.xt - pgal.x) * .05;
            pgal.y += (pgal.yt - pgal.y) * .05;
            pgal.z += (pgal.zt - pgal.z) * .1;
        }
        var i = pgal.N;
        while (i--) pgal.O[i].anim();
        setTimeout(pgal.run, 16);
    },
    PGObj: function (n) {
        this.n = n;
        this.x = pgal.zoom * Math.random() * pgal.nw * 3 - pgal.nw;
        this.y = pgal.zoom * Math.random() * pgal.nh * 3 - pgal.nh;
        this.z = Math.round(n * (10000 / pgal.N));
        this.w = pgal.items[n].querySelector('img').width;
        this.h = pgal.items[n].querySelector('img').height;
        if (mobileCheck()) {
            this.w = window.innerWidth - 80;
            this.h = window.innerHeight - 50;
        }
        pgal.items[n].querySelector('img').style.width = "100%";
        this.obj = pgal.items[n];
        this.obs = this.obj.style;
        this.obj.parent = this;
        this.obj.onclick = function () { this.parent.click(); }
        this.obj.ondrag = function () { return false; }
        this.obj.style.zIndex = Math.round(1000000 - this.z);
        this.F = false;
        this.CF = 100;
        this.sto = [];
        this.anim = function () {
            var f = 700 + this.z - pgal.z;
            if (f > 0) {
                var d = 700 / f; // changes perspective angle (default:1000)
                var X = pgal.nw * .5 + ((this.x - pgal.x - pgal.cx) * d);
                var Y = pgal.nh * .5 + ((this.y - pgal.y - pgal.cy) * d);
                var W = d * this.w * pgal.zoom;
                var H = d * this.h * pgal.zoom;
                this.obs.left = to_px(X - W * .5);
                this.obs.top = to_px(Y - H * .5);
                this.obs.width = to_px(W);
                this.obs.height = to_px(H);
                if (isChrome || !mobileCheck()) {
                    if (H < pgal.nh * .07) this.obj.style.opacity = 0.5;
                    if (H >= pgal.nh * .07) this.obj.style.opacity = 1;
                }

            } else {
                this.x = pgal.zoom * Math.random() * pgal.nw * pgal.imageSpread - pgal.nw;
                this.y = pgal.zoom * Math.random() * pgal.nh * pgal.imageSpread - pgal.nh;
                this.z += 10000;
                this.obs.zIndex = Math.round(1000000 - this.z);

            }

        }
        /**
         * It helps to remove all the active classes from camption DOM
         */
        this.removeAllActive = function () {
            $$(".caption").forEach(function (cap) {
                cap.classList.remove('active');
            });
        }

        this.click = function () {
            // remove all the active class
            this.removeAllActive();
            if (pgal.S != this) {
                UI.addNext();
                pgal.xt = this.x;
                pgal.yt = this.y;
                pgal.zt = this.z;
                pgal.S = this;
                this.obj.querySelector('p').classList.add("active");
            } else {
                pgal.S = 0;
                pgal.zt += 1600;

            }
        }
    }
}

// event handlers
window.onresize = g_resize;

document.onmousemove = function (e) {
    if (!mobileCheck()) {
        if (window.event) e = window.event;
        pgal.xm = (e.x || e.clientX) - pgal.nx - pgal.nw * .5;
        pgal.ym = (e.y || e.clientY) - pgal.ny - pgal.nh * .5;
    }
}

window.onload = function () {
    g_resize();
    pgal.init();
}