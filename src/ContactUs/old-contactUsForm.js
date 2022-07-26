import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./contactUsForm.css";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, phone, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        phone,
        subject,
        message,
      };

      await emailjs.send("service_ihltslh", "template_ls6a9ds", templateParams, "KS4oPx77N8SoBKzio");
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contactForm">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 of form */}
        <div className="row formRow">
          <div className="col-6">
            <input
              type="text"
              name="name"
              {...register("name", {
                required: { value: true, message: "Please enter your name" },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
              className="form-control formInput"
              placeholder="Name"
            ></input>
            {errors.name && <span className="errorMessage">{errors.name.message}</span>}
          </div>
          <div className="col-6">
            <input
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className="form-control formInput"
              placeholder="Email address"
            ></input>
            {errors.email && <span className="errorMessage">Please enter a valid email address</span>}
          </div>
        </div>
        {/* Row 2 of form */}
        <div className="col col-6">
          <input
            type="text"
            name="phone"
            {...register("phone", {
              required: { value: true, message: "Please enter a phone number" },
              maxLength: {
                value: 20,
                message: "Best contact number",
              },
            })}
            className="form-control formInput"
            placeholder="Phone Number"
          ></input>
          {errors.subject && <span className="errorMessage">{errors.subject.message}</span>}
          <div className="row formRow">
            <div className="col col-6">
              <input
                type="text"
                name="subject"
                {...register("subject", {
                  required: { value: true, message: "Please enter a subject" },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                className="form-control formInput"
                placeholder="Subject"
              ></input>
              {errors.subject && <span className="errorMessage">{errors.subject.message}</span>}
            </div>
          </div>
        </div>
        {/* Row 3 of form */}
        <div className="row formRow">
          <div className="col">
            <textarea
              rows={10}
              name="message"
              {...register("message", {
                required: true,
              })}
              className="form-control formInput"
              placeholder="Message"
            ></textarea>
            {errors.message && <span className="errorMessage">Please enter a message</span>}
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
