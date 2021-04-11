export const pos_units = "px"; //change this to change position unit of left and right offset eg. %

export const chronology = [
    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
        ],
        links: [
            {start: 0, end:0, animate: false, link:'arrow'},
        ]
    },
    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100}
        ],
        links: [
            {start: 0, end:1, animate: true, link:'arrow'},
        ]
    },

    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 200, top: 100},
        ],
        links: [
            {start: 0, end:1, animate: false, link:'arrow'},
            {start: 0, end:2, animate: true, link:'arrow'},
        ]
    },

    //myMove([300,100], [300,150], EndNode, '', 40, 60);
    
    
    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 200, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 300, top: 100},
        ],
        links: [
            {start: 0, end:1, animate: false, link:'arrow'},
            {start: 0, end:2, animate: false, link:'arrow'},
            {start: 2, end:3, animate: true, link:'arrow'},
        ]
    },

    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 200, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 300, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 250, top: 150},
        ],
        links: [
            {start: 0, end:1, animate: false, link:'arrow'},
            {start: 0, end:2, animate: false, link:'arrow'},
            {start: 2, end:3, animate: false, link:'arrow'},
            {start: 3, end:4, animate:true, link:'arrow'},

        ]
    },
    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 200, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 300, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 250, top: 150},
            {image: 'circle.png', size: '40', max:'60', left: 150, top: 150},

        ],
        links: [
            {start: 0, end:1, animate: false, link:'arrow'},
            {start: 0, end:2, animate: false, link:'arrow'},
            {start: 2, end:3, animate: false, link:'arrow'},
            {start: 3, end:4, animate:false, link:'arrow'},
            {start: 4, end:5, animate:true, link:'arrow'},
        ]
    },
    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 200, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 300, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 250, top: 150},
            {image: 'circle.png', size: '40', max:'60', left: 150, top: 150},
            {image: 'circle.png', size: '40', max:'60', left: 70, top: 150},
        ],
        links: [
            {start: 0, end:1, animate: false, link:'arrow'},
            {start: 0, end:2, animate: false, link:'arrow'},
            {start: 2, end:3, animate: false, link:'arrow'},
            {start: 3, end:4, animate:false, link:'arrow'},
            {start: 4, end:5, animate:false, link:'arrow'},
            {start: 5, end:6, animate:true, link:'arrow'},
        ]
    },
    {
        nodes: [
            {image: 'circle.png', size: '40', max:'60', left: 100, top: 0},
            {image: 'circle.png', size: '40', max:'60', left: 50, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 200, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 300, top: 100},
            {image: 'circle.png', size: '40', max:'60', left: 250, top: 150},
            {image: 'circle.png', size: '40', max:'60', left: 150, top: 150},
            {image: 'circle.png', size: '40', max:'44', left: 70, top: 150},
            {image: 'circle.png', size: '40', max:'44', left: 50, top: 100},
        ],
        links: [
            {start: 0, end:1, animate: false, link:'arrow'},
            {start: 0, end:2, animate: false, link:'arrow'},
            {start: 2, end:3, animate: false, link:'arrow'},
            {start: 3, end:4, animate:false, link:'arrow'},
            {start: 4, end:5, animate:false, link:'arrow'},
            {start: 5, end:6, animate:false, link:'arrow'},
            {start: 6, end:7, animate:true, link:'arrow'}
        ]
    }
]

