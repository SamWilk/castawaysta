"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending question..." : "Send question"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactRequest, initialState);

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      aria-label="Ask Castaway STA a question"
    >
      <div className={styles.formHeader}>
        <p>Have questions?</p>
        <h2>Ask before you book.</h2>
        <span>
          Use FishingBooker to reserve your trip. Send a note here if you want
          to ask about weather, target species, group fit, or what to bring.
        </span>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(904) 555-0123"
            required
          />
        </label>
      </div>

      <label>
        Question topic
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a topic
          </option>
          <option>Before booking</option>
          <option>Weather and timing</option>
          <option>Target species</option>
          <option>Group size or kids</option>
          <option>What to bring</option>
          <option>Other question</option>
        </select>
      </label>

      <label>
        Question
        <textarea
          name="details"
          rows="4"
          placeholder="Ask your question or share any details Captain Joe should know before you book."
          required
        />
      </label>

      <SubmitButton />

      {state.message ? (
        <p className={state.ok ? styles.successMessage : styles.errorMessage}>
          {state.message}
        </p>
      ) : null}

      <p className={styles.formNote}>
        Prefer to talk now? <a href="tel:+19042379269">Call (904) 237-9269</a>.
      </p>
    </form>
  );
}
