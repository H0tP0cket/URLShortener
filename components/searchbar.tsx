import "react";

function Search() {
  return (
    <div className="wrap">
      <div id="shortener">
        <form method="post" noValidate>
          <input
            className="p-4 border  focus:border-teal-600 placeholder-text-xl focus:outline-none rounded-xl text-violet-800"
            type="url"
            name="plainURL"
            id="plainURL"
            pattern="https?://.*"
            placeholder="Shorten a link here..."
            aria-label="Input URL"
            required
          />
          <button
            type="submit"
            className="bg-teal-300 hover:bg-teal-500  text-white font-bold lg:py-4 lg:px-12 rounded-xl py-2 px-8"
          >
            Shorten It!
          </button>
          <span className="error" aria-live="polite"></span>
        </form>
      </div>
    </div>
  );
}
export default Search;
