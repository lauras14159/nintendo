type SubItemProp = {
  pathname: string;
  //   link:string
};

export default function SubCategoryItem({ pathname }: SubItemProp) {
  return (
    <div className="flex flex-row gap-x-2 items-center py-1 cursor-pointer hover:bg-[#efefef] text-xs">
      <div className="text-tertiary font-semibold pl-2">{pathname}</div>
    </div>
  );
}
