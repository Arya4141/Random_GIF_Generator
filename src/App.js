import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return(

    <div className="w-full relative  flex flex-col background ">
      <h1 className=" h-12 mt-[35px] w-11/12 ml-[70px] text-center bg-white rounded-xl  px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>


      <div className="flex w-full h-full flex-col items-center gap-y-10 ">
        <Random />
        <Tag/>
      </div>
    </div>

  );
}
