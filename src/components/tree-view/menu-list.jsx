import MenuItem from "./menu-item";
import "./styles.css";

const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length ? (
        list.map((listItem) => <MenuItem item={listItem} />)
      ) : (
        <div>
          <h3>Item List not found !</h3>
        </div>
      )}
    </ul>
  );
};

export default MenuList;
