import PropTypes from "prop-types"; // ES6
import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <header>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4 text-white lg:text-4xl">
              {/* {text} */}

              <div className="space-y-2">
                <p>মৃণালকান্তি জয়ধর স্মৃতি গ্রন্থাগার </p>
                <p>সংস্কৃত বিভাগ</p>
                <p>ঢাকা বিশ্ববিদ্যালয়</p>
              </div>
            </h1>
            <Link
              to="/books"
              className="w-full px-5 py-2 mt-8 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-400 rounded-md lg:w-auto hover:bg-gray-600 focus:outline-none focus:bg-gray-500"
            >
              Search For book
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Slide;
Slide.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
