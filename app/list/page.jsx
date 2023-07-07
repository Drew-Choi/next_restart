import listScss from './list.module.scss';

const pd = ['Tomatos', 'Past', 'Coconut', 'Apple'];

export default function List() {
  return (
    <div>
      <h4 className={listScss.title}>상품목록</h4>
      {pd.map((el, index) => (
        <div key={index} className={listScss.food}>
          <h4>{el}</h4>
        </div>
      ))}
    </div>
  );
}
