
export const Footer = () => {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <p color="blue-gray" className="font-normal">
        &copy; 2023 AMANYAR
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-SoftOrange focus:text-blue-500"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-SoftOrange focus:text-blue-500"
          >
            License
          </a>
        </li>
        <li>
          <a
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-SoftOrange focus:text-blue-500"
          >
            Contribute
          </a>
        </li>
        <li>
          <a
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-SoftOrange focus:text-blue-500"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
}