
const Sidebar = () => {

    const sidebarLinks = [
        {
            label: 'Reports', 
        },
        {
            label: 'Dashboard', 
        },
        {
            label: 'Admin', 
        },
        {
            label: 'Records', 
        },
        {
            label: 'Contact', 
        },
        {
            label: 'About', 
        },
        {
            label: 'Report', 
        },
    ]


  return (
    <div className="flex flex-col bg-indigo-900 h-screen oveflow-hidden ">
      <div className="flex items-center justify-center py-3">
            <span className="text-white text-2xl font-bold">ana</span>
            <span className="text-pink-600 text-2xl font-bold">ly</span>
      </div>  
      <ul className="text-neutral-100 font-medium flex flex-col gap-5 pl-9 py-20">
        {sidebarLinks.map((link) => {
            return(
                <li key={link.label} className="rounded-l-lg pl-4 pr-10 py-2 hover:bg-pink-600">{link.label}</li>
            )
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
