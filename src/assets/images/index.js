import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import img11 from './11.jpg'
import img12 from './12.jpg'
import img13 from './13.jpg'
import img14 from './14.jpg'
import img15 from './15.jpg'
import img16 from './16.jpg'
import img17 from './17.jpg'
import img18 from './18.jpg'

function randomPrice() {
  return (Math.random() * (100 - 1) + 1).toFixed(2)
}

const images = [
  { id: 1, avatar: img1, title: 'Vestido 1', description: 'Vestido preto longo', size: 'P', price: randomPrice()},
  { id: 2, avatar: img2, title: 'Vestido 2', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
  { id: 3, avatar: img3, title: 'Vestido 3', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
  { id: 4, avatar: img4, title: 'Vestido 4', description: 'Vestido preto longo', size: 'G', price: randomPrice()},
  { id: 5, avatar: img5, title: 'Vestido 5', description: 'Vestido preto longo', size: 'G', price: randomPrice()},
  { id: 6, avatar: img6, title: 'Vestido 6', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
  { id: 7, avatar: img7, title: 'Vestido 7', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
  { id: 8, avatar: img8, title: 'Vestido 8', description: 'Vestido preto longo', size: 'G', price: randomPrice()},
  { id: 9, avatar: img9, title: 'Vestido 9 ', description: 'Vestido preto longo', size: 'XL', price: randomPrice()},
  { id: 10, avatar: img10, title: 'Vestido 10', description: 'Vestido preto longo', size: 'P', price: randomPrice()},
  { id: 11, avatar: img11, title: 'Vestido 11', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
  { id: 12, avatar: img12, title: 'Vestido 12', description: 'Vestido preto longo', size: 'G', price: randomPrice()},
  { id: 13, avatar: img13, title: 'Vestido 13', description: 'Vestido preto longo', size: 'G', price: randomPrice()},
  { id: 14, avatar: img14, title: 'Vestido 14', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
  { id: 15, avatar: img15, title: 'Vestido 15', description: 'Vestido preto longo', size: 'G', price: randomPrice()},
  { id: 16, avatar: img16, title: 'Vestido 16', description: 'Vestido preto longo', size: 'P', price: randomPrice()},
  { id: 17, avatar: img17, title: 'Vestido 17', description: 'Vestido preto longo', size: 'P', price: randomPrice()},
  { id: 18, avatar: img18, title: 'Vestido 18', description: 'Vestido preto longo', size: 'M', price: randomPrice()},
]

export default images