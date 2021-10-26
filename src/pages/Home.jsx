import Card from '../components/Card';

function Home ({
  items,
  cartItems, 
  searchValue, 
  setSearchValue, 
  onChangeSearchInput, 
  onAddToFavorites, 
  onAddToCart,
  isLoading
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) => 
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return ( isLoading ? [...Array(8)] : filtredItems).map((item,index) => (
        <Card  
          onFavorite={(obj)=>onAddToFavorites(obj)}
          onPlus = {(obj)=>onAddToCart(obj)}
          key = {index}
          added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
          loading={isLoading}
          {...item}
        />
      ))
  }

  return(
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу:"${searchValue}"`: `Все кроссовки`}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (<img onClick = {() => setSearchValue('')}  className="clear removeBtn cu-p" src="/img/btn-remove.svg" alt="Clear" />)}
          <input onChange = {onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..."/>
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {
          renderItems()
        }
      </div>
    </div>
  )
}
export default Home;