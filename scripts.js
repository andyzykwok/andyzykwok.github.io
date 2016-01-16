function gid(id){
    return document.getElementById(id);
}

window.onload=function(){
    iconslide ();

    helloheight ();
    
    var numofslides = gid('slider').getElementsByTagName('a').length
    gid('slider').style.width = numofslides+'00%';
    for (var i=0; i < numofslides; i++)
        gid('slider').getElementsByTagName('a')[i].style.width = (100/numofslides) + '%';
    autoslide();
}

window.onresize=function(){
    helloheight ();
    moreheight ();
}

//nav bar animations
window.onscroll=function(){
    navbar ();
} 

function iconslide () {
    icons = gid('iconslider').getElementsByTagName('i');
    iconheight = icons[0].clientHeight;
    topval = -20;
    for (var i=0; i < icons.length; i++) {
        icons[i].style.top = topval + 'px';
        topval = topval + iconheight;
    }

    iconheight = -1 * iconheight;
    document.iconslide = setInterval (function () {
        var icons = gid('iconslider').getElementsByTagName('i');
        var iconindex = icons.length;
        iconindex--;

        
        var moveicon = icons[iconindex].cloneNode(false);
        moveicon.style.top = (iconheight-20) + 'px';
        icons[iconindex].remove();
        gid('iconslider').insertBefore(moveicon, gid('iconslider').firstChild);

        for (var i=0; i < icons.length; i++) {
            if (i == 3) icons[i].style.opacity = '1';
            else icons[i].style.opacity = '0';

            var currenttop = parseInt(icons[i].style.top);
            var newtop = currenttop - iconheight; 
            icons[i].style.top = newtop + 'px';
        }

    }, 3500);
}

function helloheight () {
    var windowheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    gid('landing').style.height = windowheight + 'px';
}

function smoothscroll (scrollto, padding) {
    padding = typeof padding !== 'undefined' ? padding : 0;
    var scroll;
    var scrolledY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var destination = gid(scrollto).getBoundingClientRect().top + scrolledY - padding;
    var speed = Math.abs(scrolledY - destination)/50;
    if (destination > scrolledY) {
        scroll = setInterval(function () {
            scrolledY = scrolledY + speed;
            scrollTo(0, scrolledY);
            if (scrolledY >= destination) {
                scrollTo(0, destination);
                clearInterval (scroll);
            }
        }, 1);
    } else {
        scroll = setInterval(function () {
            scrolledY = scrolledY - speed;
            scrollTo(0, scrolledY);
            if (scrolledY <= destination) {
                scrollTo(0, destination);
                clearInterval (scroll); 
            }
        }, 1);
    }
}  

function autoslide () {
    clearInterval (document.slideinterval); 
    document.slideinterval = setInterval (function () {slide(-1);}, 5000);
}

function slide (content) {
    if (content < 0) {
        var current = parseInt(gid('slider').style.left)/100*(-1)+1;
        if (content == -2) current--;
        else current++;
        slide (current);
        return;
    } else {
        var totalslides = gid('slider').getElementsByTagName('img').length;
        if (content < 1) {
            slide (totalslides);
            return;
        } 
        if (content > totalslides) {
            slide (1);
            return;
        }
        var leftpos = (content - 1) * (-1) * 100;
        gid('slider').style.left = leftpos + '%';

        var sitelinks = gid('sitelinks').getElementsByTagName('a');
        for (var i = 0; i < sitelinks.length; i++) sitelinks[i].style.background = '#cbcbcb';
            sitelinks[content-1].style.background = '#333333';
        
        autoslide();
    }
}

document.navbarmode = 0; 
function navbar () {
    var scrolledY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (document.navbarmode == 0) {
        if (scrolledY > 50) {
            gid("navbar").style.paddingTop="0";
            gid('logo').style.opacity = 0.8;
        } else {
            gid("navbar").style.paddingTop="50px";
            gid('logo').style.opacity = 0;
        }

        if (scrolledY < 1000) {
            var a = scrolledY/1000;
            gid("navbar").style.background='rgba(53,61,74,' + a + ')';
        } else {
            gid("navbar").style.background='rgba(53,61,74,1)';
        }
    }
}

function movemap (ximgpos, yimgpos, location) {
    var xview = gid("mapwindow").clientWidth;
    var yview = gid("mapwindow").clientHeight;
    var xpos = (xview/2) - ximgpos;
    var ypos = (yview/2) - yimgpos;

    gid('travels').style.background = 'url(images/locations/'+location+'.jpg)';
    gid('travels').style.backgroundSize = 'cover';
    gid('travels').style.backgroundPosition = 'center center';
    gid('travels_fade').style.opacity = 0; 
    setTimeout (function () {
        gid('travels_fade').style.background = 'url(images/locations/'+location+'.jpg)';
        gid('travels_fade').style.backgroundSize = 'cover';
        gid('travels_fade').style.backgroundPosition = 'center center';
        gid('travels_fade').style.opacity = 1; 
    }, 510);

    gid('map').style.left = xpos + 'px';
    gid('map').style.top = ypos + 'px';
    gid('map2').style.left = xpos + 'px';
    gid('map2').style.top = ypos + 'px';
}

function openmobilemenu () {
    gid('overlayclose').style.display = 'block';
    navbar();
    document.navbarmode = 1;
    var scrolledY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    gid('navbar').style.position = 'absolute';
    gid('navbar').style.top = scrolledY + 'px';

    gid('window').style.height = window.innerHeight+'px';
    var _scrolledY = scrolledY * -1;
    gid('page').style.top = _scrolledY + 'px';

    gid('window').className = 'window windowanimate';

}

function closemobilemenu (mlink) {
    mlink = typeof mlink !== 'undefined' ? mlink : 0;

    gid('overlayclose').style.display = 'none';
    gid('window').className = 'window';

    var _scrolledY = parseInt(gid('page').style.top);
    var scrolledY = _scrolledY * -1;
    document.navbarmode = 0;
    setTimeout(function () {
        gid('window').style.height = 'auto';
        scrollTo (0, scrolledY);
        gid('page').style.top = 0;
        gid('navbar').style.top = 0;
        gid('navbar').style.position = 'fixed';
        navbar();
        if (mlink != 0) smoothscroll (mlink);
    }, 500);
    

}

function more (el) { 
    var windowheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (gid(el).clientHeight == 0) {
        gid('interests').style.height = 0; 
        gid('travels').style.height = 0;
        if (el == 'travels') {
            if (windowheight - gid('navbar').clientHeight > 650) gid(el).style.height = 600 + 'px';
            else gid(el).style.height = windowheight - gid('navbar').clientHeight + 'px';
        }
        else gid(el).style.height = gid(el+'content').clientHeight + 'px';
        smoothscroll ('travels', gid('navbar').clientHeight);
    }
    else {
        gid(el).style.height = 0;
        smoothscroll ('morebutton', gid('navbar').clientHeight);
    }
}

function moreheight () {
    var windowheight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (gid('interests').clientHeight != 0) gid('interests').style.height = gid('interestscontent').clientHeight + 'px';
    if (gid('travels').clientHeight != 0) {
        if (windowheight - gid('navbar').clientHeight > 650) gid('travels').style.height = '600px';  
        else gid('travels').style.height = windowheight - gid('navbar').clientHeight + 'px';  
    }
}