import { useState } from "react";
import Button from "./Button";
import { Form } from "./Styles/Form.styled";

export default function SearchBar({ onFormSubmit }) {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!term) {
      alert("Please type a name of a City");
      return;
    }

    onFormSubmit({ term });
    setTerm("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        value={term}
        placeholder="City..."
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button type="submit" text={"Search"} />
    </Form>
  );
}
