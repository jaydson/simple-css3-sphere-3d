window.addEventListener('DOMContentLoaded',function () {
    (function() {

        var settings = {
            faces       : 18,
            interval    : 20
        },
        container = document.querySelector('#sphere'),
        circleone = null,
        circletwo = null,
        circlethree = null,
        distance = 360,
        i = 0;
                
        for (i; i < settings.faces; i++) {
            circleone = document.createElement('div');
            circletwo = document.createElement('div');
            circlethree = document.createElement('div');            

            circleone.style.webkitTransform   = 'rotateZ(' + distance + 'deg) rotateX(90deg) translateZ(200px)';
            circleone.style.MozTransform      = 'rotateZ(' + distance + 'deg) rotateX(90deg) translateZ(200px)';
            circleone.style.OTransform        = 'rotateZ(' + distance + 'deg) rotateX(90deg) translateZ(200px)';
            circleone.style.MSTransform       = 'rotateZ(' + distance + 'deg) rotateX(90deg) translateZ(200px)';
            circleone.style.transform         = 'rotateZ(' + distance + 'deg) rotateX(90deg) translateZ(200px)';

            circletwo.style.webkitTransform   = 'rotateZ(360deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circletwo.style.MozTransform      = 'rotateZ(360deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circletwo.style.OTransform        = 'rotateZ(360deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circletwo.style.MSTransform       = 'rotateZ(360deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circletwo.style.transform         = 'rotateZ(360deg) rotateY(' + distance + 'deg) translateZ(200px)';

            circlethree.style.webkitTransform   = 'rotateZ(90deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circlethree.style.MozTransform      = 'rotateZ(90deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circlethree.style.OTransform        = 'rotateZ(90deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circlethree.style.MSTransform       = 'rotateZ(90deg) rotateY(' + distance + 'deg) translateZ(200px)';
            circlethree.style.transform         = 'rotateZ(90deg) rotateY(' + distance + 'deg) translateZ(200px)';

            distance = distance + settings.interval;
            container.appendChild(circleone);
            container.appendChild(circletwo);
            container.appendChild(circlethree);
        }
    }());
}, false);