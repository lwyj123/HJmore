import extend from 'extend';



class HJmore {

    constructor(container, options = {}) {
        this.options = expandConfig(container, options);

        this.container = this.options.container;
        this.container.classList.add('hjmore-container');
        this.container.__hjmore = this;

        //load在底部时加载更多
        this.load = this.addLoader('hjmore-loader');
        //wait - finished
        this.load.classList.add('hjmore-finished');


     }
    /**
     * 添加load的DOM在末尾
     * @param {string} container     容器类名
     */
    addLoader(container) {
        if (typeof container === 'string') {
            let className = container;
            container = document.createElement('div');
            container.classList.add(className);
        }
        this.container.appendChild(container);
        // TODO 中断开发，进入HJevent的开发
        return container;
    }
}



/**
 * 默认options
 * @type {Object} 默认的options
 */
HJmore.DEFAULTS = {

};


/**
 * 扩充config
 * @param  {[type]} container  [description]
 * @param  {[type]} userConfig [description]
 * @return {[type]}            [description]
 */
function expandConfig(container, userConfig) {
    userConfig = extend(true, {
        container: container,
    }, userConfig);

    userConfig = extend(true, {}, HJmore.DEFAULTS, userConfig);
    ['container'].forEach(function(key) {
        if (typeof userConfig[key] === 'string') {
            userConfig[key] = document.querySelector(userConfig[key]);
        }
    });

    return userConfig;
}