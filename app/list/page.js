import listScss from './list.module.scss';

export default function list() {
  return (
    <div>
      <h4 className={listScss.title}>상품목록</h4>
      <div className={listScss.food}>
        <h4>상품1 $40</h4>
      </div>
      <div className={listScss.food}>
        <h4>상품2 $40</h4>
      </div>
    </div>
  );
}
