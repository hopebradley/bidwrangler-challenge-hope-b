import './ListedItems.scss';

export const ListedItems = ({items}) => {

  return (
    <div className='container'>
      {items.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Lister: {item.lister}</p>
        </div>
      ))}
    </div>
  );
};
