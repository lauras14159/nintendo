const Breadcrumbs = ({ items }: any) => {
  return (
    <nav className="md:pb-4 mb-0 text-xs text-tertiary">
      <div className="px-5 md:pt-5  pt-16 sm:px-10 ">
        {items.map(({ item, index }: any) => (
          <>
            <div>
              <a
                className={` ${index + 1 === items.length && "text-tertiary"}`}
              >
                {item.title}
              </a>
            </div>
            {index + 1 !== items.length && (
              <i
                className="bi bi-chevron-right mx-1"
                style={{ WebkitTextStroke: "#dadada" }}
              ></i>
            )}
          </>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
