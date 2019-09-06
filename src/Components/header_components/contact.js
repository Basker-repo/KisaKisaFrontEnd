import React, { useCallback } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Select
} from "@material-ui/core";
import lady from "../../assets/lady.png";
import "./contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-12">
        <div
          className="col-md-6"
          style={{
            margin: 20,
            padding: 20
          }}
        >
          <label style={{ fontSize: "50px" }}>
            Whatever it is we would
            <br />
            love to hear....
          </label>

          <form style={{ width: "40%" }}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" type="text" />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" />
            </FormControl>

            <div class="select" style={{ marginTop: "21%" }}>
              <select name="slct" id="slct">
                <option>Choose an option</option>
                <option value="1">Contact Us</option>
                <option value="2">Advertise</option>
                <option value="3">Help</option>
              </select>
            </div>

            {/* <Select style={{width:'100%', marginTop: "16%"}}>
            <option value="audi">Audi</option>
            <option value="audi">Contact Us</option>
            <option value="audi">Advertise</option>
            <option value="audi">Help</option>
           </Select> */}

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Message</InputLabel>
              <Input id="email" multiline rows={5} />
            </FormControl>

            <Button variant="contained" color="primary" size="medium">
              Submit
            </Button>
          </form>
        </div>

        <div
          style={{ float: "right", marginTop: "-32em" }}
          className="col-md-6"
        >
          <img src={lady} alt="Lady-Image" />
        </div>
      </div>
    );
  }
}

export default Contact;
