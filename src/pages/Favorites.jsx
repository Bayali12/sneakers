import Card from '../components/Card';

function Favorites ({items, onAddToFavorites}) {
  return(
    <div className="content p-40">
      <div className="d-flex align-center mb-40">
        <img className="cu-p" width={35} height={35} src="/img/back-btn.svg" alt="" />
        <h1 className="ml-20">Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {
          items.map((item,index) => (
          <Card  
            key = {index}
            favorited = {true}
            onFavorite = {onAddToFavorites}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
export default Favorites;