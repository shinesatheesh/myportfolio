
const list = [{

    id:1,
    img:'/assets/uzhavar.jpg',
    name:'UZHAVAR SANDHAI',
    text:`The project aimed to provide a user-friendly platform for farmers and buyers to connect and
    facilitate agricultural transactions.`,
    paragraph:`The "Uzhavar Santhai" online web application was developed to create a user-friendly platform that connects farmers and buyers, facilitating agricultural transactions efficiently. Here's a breakdown of the key features and objectives of the project:

    User-Friendly Interface: The application is designed with a user-friendly and intuitive interface to ensure easy navigation for both farmers and buyers.
    
    Marketplace Functionality: The platform serves as a marketplace where farmers can list their agricultural products for sale, including details such as crop type, quantity, and price.
    
    Search and Filter: Buyers can easily search for specific agricultural products and apply filters to find the products they need quickly.
    
    Transaction Management: The application likely includes features for managing transactions, including order placement, payment processing, and order tracking.
    Database Integration: MySQL is used to manage the backend database, storing information about farmers, buyers, products, and transactions.
    `,
    source:'https://github.com/shinesatheesh/Uzhavar-sandhai',
    tech:["php","mysql","html","css","javaScript"]
},
{
  id:2,
  img:'/assets/blockchain.png',
  name:"ONLINE VOTING USING BLOCKCHAIN",
  text:`Implemented Online Voting System using Node.js, Express.js, React.js,
  MySQL, and local network Ganache.`,
  paragraph:`As voting is an important aspect of a country's decision making process, most elections and voting systems begin with a provisional ballot method. 
  Only when a large number of people partake in the voting process, a successful voting system will be achieved.
   To make them a reality, the voting technology should be user friendly and not require the voters to queue outside the polling booth. 
   In this work, the system validates the voter with the help of Aadhar verification authorized by the Unique Identification Authority of India. 
  This system must ensure the secrecy and the security of the data and votes. Blockchain technology plays a vital role in maintaining security and encryption.`,
  source:'https://github.com/shinesatheesh/IMPLEMENTATION-OF-ONLINE-VOTING-USING-BLOCKCHAIN-TECHNOLOGY',
  tech:["react","ganache","mysql",'javaScript']
},{
  id:3,
  name:"Handwritten Digit Recognition System",
  img:'/assets/handwriten.jpg',
  text:`The project incorporated deep learning techniques, allowing the system to
  learn and improve its recognition accuracy over time, I successfully
  created a robust Handwritten Digit Recognition System`,
  paragraph:`A Handwritten Digit Recognition System based on Convolutional Neural Networks (CNN) is a sophisticated computer vision application. It uses deep learning to automatically 
  identify and classify handwritten digits, such as those from 0 to 9. 
  The system is trained on a dataset of handwritten digit images, learning to recognize patterns through convolutional layers. Once trained, it can accurately recognize digits in various applications, 
  including form processing and optical character recognition. This technology has become highly accurate and reliable, with a wide range of practical uses across different industries.`,
  source:`https://github.com/IBM-EPBL/IBM-Project-31507-1660201335`,
  tech:["python","flask","dl","html","css"]

}

]
const iconstyle = {
  react: "/assets/react.png",
  html: "/assets/html-5.png",
  css: "/assets/css.png",
  javaScript: "/assets/js.png",
  mysql: "/assets/mysql.png",
  ganache: "/assets/ganache.png",
  php: "/assets/php.png",
  python:"/assets/python.png",
  dl:"/assets/deep-learning.png",
  flask:"/assets/flask.png"
};

export default {list ,iconstyle};