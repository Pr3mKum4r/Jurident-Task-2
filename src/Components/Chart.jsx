import chart from "../assets/chart.png"
const Chart = () => {
  return (
    <div className="bg-black w-full h-fit text-white p-20 flex flex-wrap">
        <div className="w-1/2 font-sans">
            <h1 className="text-5xl">How we spend your donations and where it goes</h1>
            <p className="text-white text-opacity-50 text-lg">We understand that when you make a donation youu want to know exactly where your money is going and we pledge to be transparent</p>
            <div className="flex flex-col items-center">
  <div className="flex flex-wrap justify-start mt-4">
    <div className="flex flex-row items-center">
      <div className="w-5 h-5 mr-2 rounded-md"style={{backgroundColor:"#BEF3C0"}}></div>
      <div className="text-center">40% child care home</div>
    </div>
    <div className="flex flex-row items-center ">
      <div className="w-5 h-5 m-3 rounded-md "style={{backgroundColor:"#AC94F1"}}></div>
      <div className="text-center">35% cleanliness program</div>
    </div>
    <div className="flex flex-row items-center">
      <div className="w-5 h-5 m-3 rounded-md "style={{backgroundColor:"#FFF0CA"}}></div>
      <div className="text-center">10% helping people</div>
    </div>
  </div>
  <div className="flex flex-wrap justify-start w-full ml-5">
    <div className="flex flex-row items-center">
      <div className="w-5 h-5 m-3 rounded-md" style={{backgroundColor:"#F9CF64"}}></div>
      <div className="text-center">10% excursions</div>
    </div>
    <div className="flex flex-row items-center ml-9">
      <div className="w-5  h-5 m-3 rounded-md"style={{backgroundColor:"#F38FBF"}}></div>
      <div className="text-center">5% feeding the poor</div>
    </div>
    
  </div>
</div>

        </div>
        <div className="w-1/2 flex justify-center items-center">
            <img src={chart} width={"300px"}/>
        </div>

    </div>
  )
}

export default Chart