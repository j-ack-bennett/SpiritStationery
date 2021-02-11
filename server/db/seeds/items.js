exports.seed = function (knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 1, item: 'Rubber Bands', image: '/images/16.jpg'},
        { id: 2, item: 'Scissors', image: '/images/17.jpg'},
        { id: 3, item: 'Post-it Notes', image: '/images/18.jpg'},
        { id: 4, item: 'Desk Calendar', image: '/images/19.jpg'},
        { id: 5, item: 'Highlighter', image: '/images/20.jpg'},
        { id: 6, item: 'Pencil Sharpner', image: '/images/21.jpg'},
        { id: 7, item: 'Eraser', image: '/images/22.jpeg'},
        { id: 8, item: 'Folder', image: '/images/40.jpg'},
        { id: 9, item: 'Holepunch', image: '/images/23.jpg'},
        { id: 10, item: 'Crusty Keyboard', image: '/images/24.jpg'},
        { id: 11, item: 'Ruler', image: '/images/25.jpg'},
        { id: 12, item: 'Calculator', image: '/images/26.jpg'},
        { id: 13, item: 'Mousepad', image: '/images/27.jpg'},
        { id: 14, item: 'Pen', image: '/images/28.jpg'},
        { id: 15, item: 'Staple Remover', image: '/images/29.jpeg'},
        { id: 16, item: 'Stapler', image: '/images/30.jpg'},
        { id: 17, item: 'Pencil', image: '/images/31.png'},
        { id: 18, item: 'Gluestick', image: '/images/32.jpg'},
        { id: 19, item: 'Staples', image: '/images/33.jpg'},
        { id: 20, item: 'Paperclips', image: '/images/34.jpg'},
        { id: 21, item: 'Bull Clip', image: '/images/35.jpg'},
        { id: 22, item: 'Sellotape Dispenser', image: '/images/36.jpg'},
        { id: 23, item: 'Sharpie', image: '/images/37.jpg'}
      ])
    })
}
