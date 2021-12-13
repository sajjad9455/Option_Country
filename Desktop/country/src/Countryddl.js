import React from "react";
import Country from "./Country";

class Countryddl extends React.Component
{
    render() {
        return (
            <div>
                <input type="text"/><br />
                <select className="change-color"> 
                    <option selected disabled="true">--Select Country--</option>
                    {
                        Country.Countrynames.map((result) => (<option text={result.id}>{result.Cname}</option>))
                        
                    }
                </select>
            </div>
        );
    }
}

export default Countryddl;