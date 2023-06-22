
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from './Card';

const Dashboard = () => {

  const card_data = [
    {
      id: 1,
      heading: "Current Scenario",
      primary_text: "23%",
      value: "the current statistics"
    },
    {
      id: 2,
      heading: "Payment Index",
      primary_text: "2345.6$",
      value: "Estimated turnover w.r.t current month cycle"
    },
    {
      id: 3,
      heading: "Seinna Carlova",
      primary_text: "12221",
      value: "lorem ipsum"
    },
    {
      id: 4,
      heading: "lorum ispem",
      primary_text: "23%",
      value: "lorum is=psem lorum ipsem"
    },
    {
      id: 5,
      heading: "Current Scenario",
      primary_text: "23%",
      value: "the current statistics"
    },
  ]

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full ">
        <Navbar />
        <div className="h-full w-full bg-neutral-100 px-20 py-10">
          <div className='pb-10'>
          <span className='text-2xl font-bold text-neutral-700'>Hi Dave, </span>
          <span className='text-2xl font-medium text-neutral-500'>your analytics are all set</span>
          </div>
          
          <div className="flex flex-wrap gap-x-20 gap-y-3">
            {
              card_data.map((card) => {
                return(
                  <Card key={card.id} heading={card.heading} primary_text={card.primary_text} value={card.value}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
