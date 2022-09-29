# dom_load Bookmarklet
Browser Search-in-Page Toolset ( built on standard HTML5 DOM3 JS and JSON )

This is the bookmarklet version of the Chrome Extension:
    https://github.com/ivanwfr/RTabsExtension

### Note about bookmarklet:
```
    Since 2020, this module is too big to fit withing chromium maximum bookmarklet size
    as it used to be (more than 2Mb on one line, down to around 1.5Mb).
    But it still can be sourced online from a ***browser toolbar entry*** such as:
```
> _the multi-line URL part will make it into the browser ***new bookmark dialog*** just fine_

```
Name:
    RTabs
URL:
    javascript:(function(){
        var s   = document.createElement('script');
        s.id    = 'dom_load';
        s.type  = 'text/javascript';
        s.src   = 'https://remotetabs.com/dev/rtabs/script/dom_load.js';
        s.title = 'dom_load'  ;
        document.body.appendChild(s);
    })();
```

INTRODUCTION:
<a href="https://remotetabs.com/dev/rtabs/intro.html"><img title="online..." src="/screenshot/intro.png"></a>

SCREENSHOTS:
<a href="https://remotetabs.com/dev/rtabs/screenshots.html"><img title="online..." src="/screenshot/screenshots.png"></a>
