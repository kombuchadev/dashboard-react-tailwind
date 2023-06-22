
const Card = props => {
const {heading, primary_text , value} = props;
  return (
    <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-indigo-600 rounded-lg shadow  h-40 w-2/5 text-white flex flex-col justify-between">
    <div className="w-full h-full bg-black/20 py-5 px-10 rounded-lg">
      <p className="text-base font-medium ">{heading}</p>
      <h1 className="text-4xl font-bold">{primary_text}</h1>
      <p className="text-sm">{value}</p>
    </div>
    </div>
  );
};

export default Card;
