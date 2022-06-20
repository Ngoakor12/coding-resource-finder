// dependencies
import {Link, useLocation} from 'react-router-dom';
// constants
import {tabsData} from './FilterTabs.constants';

const Tab = ({className, label, path}) => {
  return (
    <Link to={path} className={className}>
      <span>{label}</span>
    </Link>
  )
};

export default function FilterTabs() {  
  const filterType = useLocation().pathname.split("/")[2];
  // filterType returns an empty string if on home route
  const allRoutes = filterType && filterType.length ? filterType : 'all';
  return (
    <div className='filter-tabs-wrapper'>
      {/* if tabsData does not exists, or if is empty - do not execute */}
      {tabsData && tabsData.length && tabsData.map(({label,path},key) => (
        <Tab
          key={key}
          label={label}
          path={path}
          className={
            (allRoutes === label.toLocaleLowerCase()) 
            ? `filter-tab filter-tab--${label} active-tab`  
            : `filter-tab filter-tab--${label}`
          }
        />
      ))}
    </div>
  )
}