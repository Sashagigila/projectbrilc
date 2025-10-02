


export const Button = ({ children }) => {
  return (
    <div className="bg-[#4d86ff] px-[20px] py-1 w-fit rounded-full transition duration-700 ease-in-out cursor-pointer hover:bg-[#8599f1]">
      <a href="#">
        <button>
          <p className="text-white text-sm font-[Montserrat] font-semibold">{children}</p>
        </button>
      </a>
    </div>
  );
};