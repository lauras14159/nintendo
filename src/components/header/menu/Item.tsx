type HeaderItemProps = {
  svg: JSX.Element;
  pathname: string;
  //   link:string
};

export default function HeaderItem({ svg, pathname }: HeaderItemProps) {
  return (
    <div className="flex flex-row gap-x-2 items-center cursor-pointer group text-sm">
      <div className="">{svg}</div>
      <div className="text-tertiary font-bold group-hover:text-primary">
        {pathname}
      </div>
    </div>
  );
}
