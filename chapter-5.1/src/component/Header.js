export default function Header(){
   return(
      <div className="heading">
         <img className="images" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqOyS87deiv-mD2PC8rpUiE3IkRKM-Jk3P1g&s" height="80px" width="80px"/>
         <div className="option">
            <button className="but">Men</button>
            <button className="but">Women</button>
            <button className="but">Kids</button>
            <button className="but">Home and Living</button>
            <button className="but">Beauty</button>
            <button className="but">Studio</button>
         </div>
         <input className="searchbar" placeholder="Search for Products Brands and More...."></input>
         <div className="profile">
            <button className="pro">Profile</button>
            <button className="pro">Wishlist</button>
            <button className="pro">Bag</button>
         </div>
      </div>
   )
}

// 2 way hai kisi ko bhi use kar shakte hai

//export default Header;