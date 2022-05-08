// dependencies
import { useContext } from "react";
import { Context } from "../../Context";
// constants
import {tabsData} from './FilterTabs.constants';

function Tab({children, ...rest}) {
  // using spread props with ...rest as it is only one element
  return (
    <button {...rest}>{children}</button>
  )
}

export default function FilterTabs({handleFilter}) {
  const { searchTerm } = useContext(Context);
  const handleClick = (filterType) => handleFilter(filterType);

  return (
    <div className='filter-tabs-wrapper'>
      {/* if tabsData does not exists, or if is empty - do not execute */}
      {tabsData && tabsData.length && tabsData.map(({label,filterType},key) => (
        <Tab 
          className={
            (searchTerm === filterType) 
            ? `filter-tab filter-tab--${label} active-tab`  
            : `filter-tab filter-tab--${label}` 
          }
          onClick={() => handleClick(filterType)} 
          key={key}
        >
          {label}
        </Tab>
      ))}
    </div>
  )
}