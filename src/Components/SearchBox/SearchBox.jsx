
import styles from "./SearchBox.module.css"


export default function SearchBox({text}) {
  return (
    <main>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search"
          onChange={handleChange}
          onKeyDown={(e) => handleKeypress(e)}
          value={text}
        />
        <img
          className={styles.searchicon}
          src="/search-icon.svg"
          alt="search icon"
          onClick={handleClick}
        />
      </div>
    </main>
  );
}
