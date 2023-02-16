import "./Header.scss";


const Header = () => {
    return(
        <header>
          <div className="container">
              <div className="flex">
              <div className="categories">
                <span>Men</span>
              </div>
                  <div className="categories">
                      <span>Women</span>
                  </div>
                  <div className="categories">
                      <span>Goods</span>
                  </div>
                  <div className="categories">
                      <span>Brand</span>
                  </div>
                  <div className="categories">
                      <span>Loyalty</span>
                  </div>
              </div>
              <div><img/></div>
              <div className="flex flex-row-reverse">
                  <div className="categories">
                      <span>Cart</span>
                  </div>
                  <div className="categories">
                      <span>Account</span>
                  </div>
                  <div className="categories">
                      <span>USD</span>
                  </div>
                  <div className="categories">
                      <span>Search</span>
                  </div>
              </div>
          </div>
        </header>
    )
}

export default Header;