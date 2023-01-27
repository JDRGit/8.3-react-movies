// eslint-disable-next-line
import {useState,useEffect} from "react";

export default function Form (props) {
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // handleSubmit - triggers when the user submits the form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.moviesearch(formData.searchterm);
  };

  // fetchRandomMovie - triggers when the user clicks the random button
  const fetchRandomMovie = () => {
    props.fetchRandomMovie();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <input type="submit" value="Search" />
        <button onClick={fetchRandomMovie}>Fetch Random</button>
      </form>
    </div>
  );
};
