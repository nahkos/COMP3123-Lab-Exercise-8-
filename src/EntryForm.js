import React, { Component } from "react";

export default class EntryForm extends Component {
  province = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ];

  constructor(props) {
    super(props);

    this.state = {
      email: "Default",
      fullname: "Default Name",
      address1: "Default address1",
      address2: "Default address2",
      city: "Default City",
      province: "Default Province",
      pc: "Default Postal Code",
    };
  }

  readData = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
   
  };

  textHandler = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    this.textValue = event.target.value;
    this.email = event.target.value;
    this.fullname = event.target.value;
    //   this.address1 = event.target.value;
    //   this.address2 = event.target.value;
    //   this.city = event.target.value;
    //   this.province = event.target.value;
    //   this.pc = event.target.value;
  };

  submitData = (e) => {
    e.preventDefault();
    // alert("Form Submited");
    // console.log(this.state);
    // console.log(JSON.stringify(this.state));
  };

  render() {
    return (
    <div>
      <div className='Border'>
        <h1>Data Entry Form</h1>
        <form onSubmit={this.submitData}>
          {/* <p>Email: {this.state.email} </p>
          <p>Full name: {this.state.fullname} </p>
          <p>Address1: {this.state.address1} </p>
          <p>City: {this.state.city} </p>
          <p>Province: {this.state.province} </p>
          <p>Postal Code: {this.state.pc} </p> */}

          <p>Email</p>
          <input
            name="email"
            placeholder="Enter Email"
            type="email"
            onChange={this.readData}
          />
          <p className='Checkbox'> Full Name</p>
          <input
            name="fullname"
            placeholder="Enter Full Name"
            type="text"
            onChange={this.readData}
          />

          <p className='Checkbox'>Address1</p>
          <input
            name="address1"
            placeholder="Enter Address1"
            type="text"
            onChange={this.readData}
          />

          <p className='Checkbox'>Address2</p>
          <input
            name="address2"
            placeholder="Apartment, studio"
            type="text"
            onChange={this.readData}
          />

          <p className='Checkbox'>City</p>
          <input
            name="city"
            placeholder="Enter City"
            type="text"
            onChange={this.readData}
          />
          <br />
          <label className='Checkbox' for="province">Province</label><br />
          <select id="province" name="province"  onChange={this.readData}>
            <option value="">Choose A Province</option>
            {this.province.map((name) => (
              <option key={name}>{name}</option>
            ))}
            
          </select>

          <p className='Checkbox'>Postal Code</p>
          <input
            name="pc"
            placeholder="Enter Postal Code"
            type="text"
            onChange={this.readData}
          />

          <br />
          <input type="checkbox" id="gridCheck" />
          <label className='Checkbox'>Agree Terms & Condition</label>
          <br /><br />          
          <button type="submit" class="btn btn-primary" onChange={this.readData}>
            Submit
          </button>
        </form>
      </div> <br/>
      <div className='Border'>
      <p>Email: {this.state.email} </p>
          <p>Full name: {this.state.fullname} </p>
          <p>Address1: {this.state.address1} </p>
          <p>City: {this.state.city} </p>
          <p>Province: {this.state.province} </p>
          <p>Postal Code: {this.state.pc} </p>
      </div>
      </div>
    );
  }
}
