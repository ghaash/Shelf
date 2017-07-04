import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createBook } from "../actions/";

class BooksNew extends Component {
  renderField(field) {
    const className = `form-group`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
      </div> 
    );
  }

  onSubmit(values) {
    return fetch('/books', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values) 
        })
        .then(response => response.json())
        .then(book => console.warn(book))
        .catch(err => console.log("Error of: ", err));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Book"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Description"
          name="description"
          component={this.renderField}
        />
        <Field
          label="Book Cover URL"
          name="image_url"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

// function validate(values) {
//   // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
//   const errors = {};

//   // Validate the inputs from 'values'
//   if (!values.title) {
//     errors.title = "Enter a title";
//   }
//   if (!values.categories) {
//     errors.description = "Enter some categories";
//   }
//   if (!values.content) {
//     errors.image_url = "Enter some content please";
//   }

//   // If errors is empty, the form is fine to submit
//   // If errors has *any* properties, redux form assumes form is invalid
//   return errors;
// }

export default reduxForm({
  form: "BooksNewForm"
})(connect(null, { createBook })(BooksNew));
