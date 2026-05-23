"use client";

import { useState } from "react";

import Alert from "../../alerts/Alert";
import Button from "../../buttons/Button";
import Link from "../../buttons/Link";
import { SolidCameraIcon } from "../../icons/Icons";
import Checkbox from "../../inputs/Checkbox";
import TextArea from "../../inputs/TextArea";
import TextField from "../../inputs/TextField";
import MotionElement from "../../motion/MotionElement";
import profile from "@/app/data/profile.json";

export default function HomeContacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [alert, setAlert] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const closeAlert = () => setAlert(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s]+$/;

  const handleSubmit = async () => {
    // TERMS
    if (!agreed) {
      setAlert({
        type: "error",
        message: "Please agree to the terms and conditions.",
      });
      return;
    }

    // NAME
    if (!formData.name.trim()) {
      setAlert({
        type: "error",
        message: "Name is required.",
      });
      return;
    }

    // EMAIL
    if (!formData.email.trim()) {
      setAlert({
        type: "error",
        message: "Email is required.",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setAlert({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    // PHONE
    if (!formData.phone.trim()) {
      setAlert({
        type: "error",
        message: "Phone number is required.",
      });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setAlert({
        type: "error",
        message: "Phone number can only contain numbers, +, - and spaces.",
      });
      return;
    }

    // MESSAGE
    if (!formData.message.trim()) {
      setAlert({
        type: "error",
        message: "Please enter your message.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAlert({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setAgreed(false);
    } catch {
      setAlert({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactData = [
    {
      label: "e-mail",
      value: profile.contact.email.value,
      url: profile.contact.email.href,
    },
    {
      label: "Phone",
      value: profile.contact.phone.value,
      url: profile.contact.phone.href,
    },
    {
      label: "Location",
      value: profile.location.value,
      url: profile.location.href,
    },
  ];

  return (
    <div
      id="home-contacts"
      className="flex flex-col lg:flex-row theme-default-padding-x theme-default-padding-y gap-[50px] md:gap-[80px]"
    >
      {/* ALERT */}
      {alert && (
        <Alert type={alert.type} message={alert.message} onClose={closeAlert} />
      )}

      {/* LEFT */}
      <div className="flex flex-col w-full gap-[20px]">
        <MotionElement variant="scale" className="mb-[50px]">
          <Button
            text="Book a call"
            className="text-[18px] md:text-[24px] xl:text-[32px] uppercase py-[10px]! px-[30px]! gap-[5px] lg:gap-[8px]"
            endIcon={<SolidCameraIcon className="size-8 lg:size-12" />}
            onClick={() =>
              window.open(
                `https://cal.com/${process.env.NEXT_PUBLIC_CALCOM_USERNAME}`,
                "_blank",
              )
            }
          />
        </MotionElement>

        {contactData.map((item, index) => (
          <MotionElement
            key={index}
            variant="slide-right"
            delay={index * 0.07}
            className="flex flex-col gap-[20px] w-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[10px] md:gap-[20px]">
              <h3 className="text-[16px] md:text-[18px] xl:text-[24px] font-bold theme-secondary uppercase">
                {item.label}
              </h3>

              <h4 className="text-[18px] md:text-[24px] xl:text-[32px] font-bold text-left sm:text-right">
                {item.url ? (
                  <Link text={item.value} link={item.url} target="_blank" />
                ) : (
                  <span>{item.value}</span>
                )}
              </h4>
            </div>

            <hr className="theme-border-secondary" />
          </MotionElement>
        ))}
      </div>

      {/* RIGHT */}
      <MotionElement
        variant="slide-left"
        className="flex flex-col w-full xl:w-5/8 theme-bg-overlay rounded-[10px] md:rounded-[20px] px-[20px] md:px-[40px] py-[10px] md:py-[20px] gap-[30px]"
      >
        <div className="flex flex-col w-full">
          <TextField
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="text-[18px] md:text-[24px]"
          />

          <TextField
            placeholder="Your E-Mail"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="text-[18px] md:text-[24px]"
          />

          <TextField
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="text-[18px] md:text-[24px]"
          />

          <TextArea
            placeholder="Describe your project..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="text-[18px] md:text-[24px] h-[200px] md:h-[350px] max-h-[300px] md:max-h-[400px]"
            rows={60}
          />
        </div>

        <Checkbox
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          label="I agree to the terms and conditions."
          labelClassName="text-[18px] md:text-[24px] font-bold theme-secondary"
          className="p-3 mr-[10px]"
        />

        <Button
          text={loading ? "Sending..." : "Send Message"}
          varient="secondary"
          disabled={loading}
          className="text-[18px] md:text-[24px] xl:text-[32px] uppercase py-[10px]! px-[10px]! mb-[20px]"
          onClick={handleSubmit}
        />
      </MotionElement>
    </div>
  );
}
