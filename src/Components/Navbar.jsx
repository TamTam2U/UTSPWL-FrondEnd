

function Navbar() {
  return (
    <div className="bg-primary fixed w-full">
    <div className="header container m-auto  flex justify-between h-[60px] items-center">
        <div className="left text-srWhite font-bold text-[18px]">Gaming <br /> Store</div>
        <div className="right text-[17px] flex gap-7 ">
        <a href="" className="text-srWhite bg-[#D80027] px-4 py-2 rounded">Logout</a>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
