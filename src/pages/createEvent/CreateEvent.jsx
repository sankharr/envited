// packages
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// styling
import "./CreateEvent.scss";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const InputField = ({ type, name, placeholder, value }) => {
  return (
    <div className="InputField">
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

const CreateEvent = () => {
  const navigate = useNavigate();

  return (
    <div className="CreateEvent">
      <h1>Create Event</h1>

      <Formik
        initialValues={{
          eventName: "",
          hostName: "",
          start: "",
          end: "",
          location: "",
          eventPhoto: "",
        }}
        validationSchema={Yup.object().shape({
          eventName: Yup.string().max(255).required("Event Name is required"),
          hostName: Yup.string().max(255).required("Host Name is required"),
          start: Yup.number().required("Start Date is required"),
          end: Yup.string().max(255).required("End Date is required"),
          location: Yup.string().max(255).required("Location is required"),
          eventPhoto: Yup.string().max(255).required("Event Photo is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
            console.log("values", values);
            //   submitValues(values);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({
          // errors,
          // handleBlur,
          handleChange,
          handleSubmit,
          // isSubmitting,
          // touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="eventName"
              placeholder="Event Name"
              value={values.eventName}
            />
            <InputField
              type="text"
              name="hostName"
              placeholder="Host Name"
              value={values.hostName}
              //   onBlur={handleBlur}
              onChange={handleChange}
              //   error={Boolean(touched.email && errors.email)}
              //   helperText={touched.email && errors.email}
            />
            {/* eventName: "",
          hostName: "",
          start: "",
          end: "",
          location: "",
          eventPhoto: "", */}

            <InputField
              type="text"
              name="start"
              placeholder="Start Date"
              value={values.start}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="end"
              placeholder="End Date"
              value={values.end}
              onChange={handleChange}
            />
            <InputField
              type="text"
              name="location"
              placeholder="Location"
              value={values.location}
              onChange={handleChange}
            />
            <InputField
              type="file"
              name="eventPhoto"
              placeholder="Event Photo"
              value={values.eventPhoto}
              onChange={handleChange}
            />
          </form>
        )}
      </Formik>

      <GrNext className="NextBtn" onClick={() => navigate("/event")} />
    </div>
  );
};

export default CreateEvent;
