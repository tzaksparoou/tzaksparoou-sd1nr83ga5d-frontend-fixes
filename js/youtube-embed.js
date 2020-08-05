document.addEventListener("DOMContentLoaded",
        function() {
            let div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = setThumbnail(v[n].dataset.id);
                div.onclick = setIframe;
                v[n].appendChild(div);
            }
        });

    function setThumbnail(id) {
        let thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function setIframe() {
        let iframe = document.createElement("iframe");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&controls=0&enablejsapi=1");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        iframe.setAttribute("class", "video-container");
        this.parentNode.replaceChild(iframe, this);
    }
