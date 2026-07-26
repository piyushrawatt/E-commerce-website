function Category({ icon, title }) {
  return (
    <div
      className="
      bg-gray-900
      border border-gray-700
      rounded-2xl
      h-52
      w-64
      flex
      flex-col
      items-center
      justify-center
      gap-4
      cursor-pointer
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-purple-500
      hover:shadow-lg
      hover:shadow-purple-500/20
      "
    >
      <div className="text-6xl text-purple-400">
        {icon}
      </div>

      <h2 className="text-white text-xl font-semibold">
        {title}
      </h2>
    </div>
  );
}

export default Category;