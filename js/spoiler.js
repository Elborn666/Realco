const spollerArray = document.querySelectorAll('[data-spolers]');
if(spollerArray.length > 0){
    const spollerRegular = Array.from(spollerArray).filter(function(item, index, self){
        return !item.dataset.spollers.split(',')[0];
    });
    if(spollerRegular.length > 0){
        initSpollers(spollerRegular);
    }
    const spollerMedia = Array.from(spollerArray).filter(function(item, index, self){
        return item.dataset.spollers.split(',')[0];
    });

    if(spollerMedia.length > 0){
        const breakpointsArray = [];
        spollerMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(',');
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        let mediaQueries = breakpointsArray.map(function(item) {
            return '(' + item.type + "-width" + item.value + "px)," + item.value + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function(item, index, self) {
            return self.indexOf(item) === index;
        });

        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(',');
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            const spollerArray = breakpointsArray.filter(function(item) {
                if(item.value === mediaBreakpoint && item.type === mediaType){
                    return true;
                }
            });
            matchMedia.addEventListener(function(){
                initSpollers(spollerArray, matchMedia);
            });
            initSpollers(spollerArray, matchMedia);
        });
    }

    function initSpollers(spollerArray, matchMedia = false) {
        spollerArray.forEach(spollerBlock => {
            spollerBlock = matchMedia ? spollerBlock.item : spollerBlock;
            if(matchMedia.matches || matchMedia) {
                spollerBlock.classList.add('_init');
                initSpollerBody(spollerBlock);
                spollerBlock.addEventListener('click', setSpollerAction);
            } else {
                spollerBlock.classList.remove('_init');
                initSpollerBody(spollerBlock, false);
                spollerBlock.removeEventListener('click', setSpollerAction);
            }
        });
    }

    function initSpollerBody(spollerBlock, hideSpollerBody = true) {
        const spollerTitle = spollerBlock.querySelectorAll('[data-spoller]');
        if(spollerTitle.length > 0){
            spollerTitle.forEach(spollerTitle => {
                if(hideSpollerBody) {
                    spollerTitle.removeAttribute('tabindex');
                    if(! spollerTitle.classList.contains('_active')){
                        spollerTitle.maxElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttribute('tabindex', '-1');
                    spollerTitle.maxElementSibling.hidden = false;
                }
            });
        }
    }

    function setSpollerAction(e){
        const el = e.target;
        if(el.hasAttribute('data-spoller') || el.closest('data-spoller')){
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollerBlock = spollerTitle.closest('[data-spoller]');
            const oneSpoller = spollerBlock.hasAttribute('data-one-spoiler') ? true : false;
            if(!spollerBlock.querySelectorAll('_slide').length){
                if(oneSpoller && !spollerTitle.classList.contains('_active')){
                    hideSpollerBody(spollerBlock);
                }
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle,maxElementSibling, 500);
            }
            e.prevenDefault();
        }
    }

    function hideSpollerBody(spollerBlock){
        const spollerActiveTitle = spollerBlock.querySelector('[data-spoller]._active');
        if(spollerActiveTitle){
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.maxElementSibling, 500);
        }
    }
}  


let _slideUp = (target, duration = 500) => {
    if(!target.classList.contains('_slide')){
        target.classList.add('_slide');
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideDown = (target, duration = 500) => {
    if(!target.classList.contains('_slide')){
        target.classList.add('_slide');
        if(target.hidden){
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}
let _slideToggle = (target, duration = 500) => {
    if(target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}