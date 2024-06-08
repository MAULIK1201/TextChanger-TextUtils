import React, { useState } from "react";

const TextForm = (Props) => {
    const [test, changeTest] = useState("");

    const HandleClick = (e) => {
        e.preventDefault();
        changeTest(test.toUpperCase());
    }

    const HandleClickLow = (e) => {
        e.preventDefault();
        changeTest(test.toLowerCase());
    }

    const HandleClear = (e) => {
        e.preventDefault();
        changeTest("");
    }

    const countWords = (text) => {
        if (text.trim().length === 0) return 0;
        return text.trim().split(/\s+/).length;
    };

    const countCharacters = (text) => {
        return text.replace(/\s/g, "").length;
    };

    const HandleChange = (event) => {
        changeTest(event.target.value);
    }

    return (
        <div>
            <div className="container mt-5 w-20 text-left">
                <h1>
                    {Props.heading}
                </h1>
                <form>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                        </div>
                        <div>
                            <textarea className="form-control border border-success" value={test} id="myBox" rows="8" onChange={HandleChange}></textarea>
                        </div>
                    </div>
                    <button type="submit" disabled={test.length===0}className="btn btn-primary mt-3 mx-1" onClick={HandleClick}>Convert to uppercase</button>
                    <button type="submit"disabled={test.length===0} className="btn btn-primary mt-3 mx-1" onClick={HandleClickLow}>Convert to lowercase</button>
                    <button type="submit" disabled={test.length===0}className="btn btn-primary mt-3 mx-1" onClick={HandleClear}>Clear text</button>
                </form>
            </div>
            <div className="container my-2 text-start">
                <h2>Your text summary</h2>
                <h4>{countWords(test)} words and {countCharacters(test)} characters</h4>
                <h4>{0.002 * countWords(test)} minutes will be taken to read this text</h4>
                <h4>Preview:</h4>
                <p>{test}</p>
            </div>
        </div>
    );
};

export default TextForm;
