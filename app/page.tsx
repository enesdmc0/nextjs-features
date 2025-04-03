import Sample1 from "@/components/sample1";
import Sample2 from "@/components/sample2";
import Sample3 from "@/components/sample3";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white space-y-16 p-10">
      <Sample1 />
      <div className="w-full h-px bg-white " />
      <Sample2 />
      <div className="w-full h-px bg-white " />
      <Sample3 />
    </div>
  );
};

export default Home;