module.exports = {
    title: "Andy's Blog",
    description: 'This is my blog built with vuepress!',
    base: '/vuepress_blog/',
    //dest: '/dist/',
    theme: 'ououe',
    themeConfig: {
        cover: {
            base: '/cover.jpg',
            //'/about/': '/courage.jpg'
            // ...
        },
        //logo: '/logo.png',


        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blogs', link: '/blogs/' },
            { text: 'Machine Learning', link: '/ML/'},
            { text: 'Web Dev', link: '/webdev/'},
            { text: 'About', link: '/about/' },
        ],

        footer: [
            { text: 'Github', link: 'https://github.com/andy3278' }
        ],
    },
    postcss: {
        plugins: [
            require('css-prefers-color-scheme/postcss'),
            require('autoprefixer')
        ]
    },
    plugins: [
        // permalink for posts
        ['blog-multidir', {
        postsDir: {
            posts: 'posts/:year/:month/:day/:slug'
        }
        }],
        // add vuepress-plugin-container
        ['container', {
            type: 'right',
            defaultTitle: ''
        }],
        ['container', {
            type: 'tip',
            before: info => `<div class="tip"><p class="title">${info}</p>`,
            after: '</div>'
        }],
        ['container', {
            type: 'warning',
            before: info => `<div class="warning"><p class="title">${info}</p>`,
            after: '</div>'
        }],
        ['container', {
            type: 'danger',
            before: info => `<div class="danger"><p class="title">${info}</p>`,
            after: '</div>'
        }]
    ]
}