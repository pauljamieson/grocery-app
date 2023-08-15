import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function AppBar() {
  return (
    <div className="flex justify-between p-2 items-center ">
      <h1 className="font-bold whitespace-nowrap">GROCERY BAG</h1>
      <SearchBar />
      <NavBar/>
    </div>
  );
}
