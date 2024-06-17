import SearchForm from "./components/SearchForm";
import CarOptions from "./components/CarOptions";
import OptionsBuy from "./components/OptionsBuy";
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 h-screen">
      
        <div className="h-full border border-gray-200 rounded-md p-5">

            <h2 className="font-medium mt-4 text-[14px]">Options</h2>
            <SearchForm />
            <OptionsBuy />
            <CarOptions />
            <button className="bg-yellow-400 text-black border border-yellow-400 hover:bg-yellow-500 hover:text-sm p-2 rounded-md mt-5 transition-all">
                Calcule le trajet
            </button>
        </div>
        <div className="h-full col-span-2 md:order-2 order-first p-4 border border-gray-200 rounded-md">
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127118.28814896375!2d-4.062066244642239!3d5.348615522614043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan!5e0!3m2!1sfr!2sci!4v1718548083485!5m2!1sfr!2sci" width="600" height="450"  loading="lazy" ></iframe>
        </div>
    </div>
  );
}
