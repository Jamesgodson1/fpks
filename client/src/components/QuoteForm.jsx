import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitQuote } from "../lib/api";

export function QuoteForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  async function onSubmit(values) {
    setStatus("idle");
    setMessage("");
    try {
      await submitQuote(values);
      setStatus("success");
      setMessage("Quote request received. We will review the scope and respond with next steps.");
      reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <label>
          Name
          <input {...register("name", { required: true, minLength: 2 })} />
          {errors.name ? <span>Name is required.</span> : null}
        </label>
        <label>
          Email
          <input type="email" {...register("email", { required: true })} />
          {errors.email ? <span>Valid email is required.</span> : null}
        </label>
      </div>
      <div className="form-row">
        <label>
          Company
          <input {...register("company", { required: true, minLength: 2 })} />
          {errors.company ? <span>Company is required.</span> : null}
        </label>
        <label>
          Phone
          <input {...register("phone")} />
        </label>
      </div>
      <label>
        SKU list and formats
        <textarea
          rows="4"
          {...register("skuDetails", { required: true, minLength: 10 })}
        />
        {errors.skuDetails ? <span>Share at least one SKU or format detail.</span> : null}
      </label>
      <div className="form-row">
        <label>
          Target timeline
          <input placeholder="Example: 8-10 weeks" {...register("timeline")} />
        </label>
        <label>
          Notes
          <input placeholder="Samples, finish, quantities" {...register("message")} />
        </label>
      </div>
      <button className="primary-button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Send project scope"}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
    </form>
  );
}
