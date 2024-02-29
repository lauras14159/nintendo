import CategoryDrop from "./CategoryDrop";

export default function SearchToggle() {
  return (
    <div className="flex flex-col justify-center mx-5 group">
      <div className="flex w-full cursor-pointer flex-row items-center group justify-between">
        <div className="flex flex-row items-center">
          <i
            className="bi bi-search searchicon cursor-pointer text-sm"
            style={{ WebkitTextStroke: 1, WebkitTextStrokeColor: "black" }}
          ></i>
          <input
            type="search"
            className="p-2 focus:outline-0 ml-1 w-full"
            placeholder="Search"
          />
        </div>
        <div>
          <CategoryDrop />
        </div>
      </div>
      <div className="border-b border-tertiary group-hover:border-primary" />
    </div>
  );
}
