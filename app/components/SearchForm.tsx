import { FaMapPin } from "react-icons/fa"
export default function SearchForm() {
  return (
    <>
      <label className="font-bold mb-2 text-sm text-gray-400">
        Départ
      </label>
      <div className="border border-gray-200 relative p-3 rounded-md shadow-md">
        <FaMapPin className="absolute top-4 left-2 text-gray-400 -translate-y-1/2" />
        <input type="text" placeholder="Rechercher une adresse" className="w-full h-full pl-5 outline-none" />
      </div>


      <label className="font-bold mb-2 text-sm text-gray-400">
        Arrivé
      </label>
      <div className="border border-gray-200 relative p-3 rounded-md shadow-md">
        <FaMapPin className="absolute top-4 left-2 text-gray-400 -translate-y-1/2" />
        <input type="text" placeholder="Rechercher une adresse" className="w-full h-full pl-5 outline-none" />
      </div>
    </>
  )
}
