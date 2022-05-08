import {tabsData} from './FilterTabs.constants';

function Tab({children, ...rest}) {
  // using spread props with ...rest as it is only one element
  return (
    <button {...rest}>{children}</button>
  )
}

export default function FilterTabs({handleFilter}) {
  const handleClick = (filterType) => handleFilter(filterType);

  return (
    <div>
      {/* if tabsData does not exists, or if is empty - do not execute */}
      {tabsData && tabsData.length && tabsData.map(({label,filterType},key) => (
        <Tab 
          onClick={() => handleClick(filterType)} 
          key={key}
        >
          {label}
        </Tab>
      ))}
    </div>
  )
}