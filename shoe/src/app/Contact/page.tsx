// app/contact/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { User, Phone, Mail, MapPin, Star, MessageSquare, Edit3 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    subject: "",
    rating: "5",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({
          name: "",
          mobile: "",
          email: "",
          city: "",
          subject: "",
          rating: "5",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Section */}
      <div className="relative h-[75vh] w-full">
        <Image
          src="/Images/contact.jpg" // ✅ ensure this is in public/Images
          alt="Contact Cover"
          fill
          priority
          className="object-cover brightness-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
            We value your ideas and feedback. Fill in the details below and we&apos;ll be in touch soon.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">
          {/* Left Side Info */}
          <div className="bg-black text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            <p className="text-blue-100 mb-6">
              Feel free to get in touch with us. We are always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone /> <span>+92 308 2735132</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail /> <span>babarzaidi1122@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin /> <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Right Side Form */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <User className="ml-3 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="p-3 w-full outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <Phone className="ml-3 text-gray-500" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile No *"
                    value={form.mobile}
                    onChange={handleChange}
                    required
                    className="p-3 w-full outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <Mail className="ml-3 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="p-3 w-full outline-none"
                  />
                </div>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <MapPin className="ml-3 text-gray-500" />
                  <input
                    type="text"
                    name="city"
                    placeholder="City Name *"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="p-3 w-full outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center border rounded-lg overflow-hidden">
                <Edit3 className="ml-3 text-gray-500" />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="p-3 w-full outline-none"
                />
              </div>

              <div className="flex items-center border rounded-lg overflow-hidden">
                <Star className="ml-3 text-gray-500" />
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="p-3 w-full outline-none"
                >
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Very Good</option>
                  <option value="3">⭐⭐⭐ Good</option>
                  <option value="2">⭐⭐ Fair</option>
                  <option value="1">⭐ Poor</option>
                </select>
              </div>

              <div className="flex items-start border rounded-lg overflow-hidden">
                <MessageSquare className="ml-3 mt-3 text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="p-3 w-full outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-800 transition"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
          </div>
        </div>
      </div>

      {/* Team Cards */}
      <section className="relative py-16">
        <div className="container mx-auto flex flex-col items-center gap-16 px-4">
          <div className="text-center max-w-lg">
            <h2 className="text-4xl font-bold text-black px-20 py-6">Meet Our Team</h2>
            <p className="text-base text-[#737373] mt-4">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center">
            {/* Card 1 */}
            <div className="w-[260px] bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
              <div className="w-full h-[320px] relative">
                <Image
                  src="/Images/team2.jpg"
                  alt="Team Member 1"
                  className="object-cover object-center w-full h-full rounded-t-lg"
                  fill
                />
              </div>
              <div className="p-5 text-center h-[160px] flex flex-col justify-between">
                <div>
                  <h5 className="text-lg font-bold text-[#252B42]">Atif Aslam</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">Sales Executive</h6>
                </div>
                <div className="flex justify-center gap-4 mt-3">
                  <Image src="/Images/facebook.png" alt="Facebook" width={20} height={20} />
                  <Image src="/Images/instagram.png" alt="Instagram" width={20} height={20} />
                  <Image src="/Images/twitter.png" alt="Twitter" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-[260px] bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
              <div className="w-full h-[320px] relative">
                <Image
                  src="/Images/babar.jpg"
                  alt="Team Member 2"
                  className="object-cover object-center w-full h-full rounded-t-lg"
                  fill
                />
              </div>
              <div className="p-5 text-center h-[160px] flex flex-col justify-between">
                <div>
                  <h5 className="text-lg font-bold text-[#252B42]">Babar Mehmood</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">Marketing Head</h6>
                </div>
                <div className="flex justify-center gap-4 mt-3">
                  <Image src="/Images/facebook.png" alt="Facebook" width={20} height={20} />
                  <Image src="/Images/instagram.png" alt="Instagram" width={20} height={20} />
                  <Image src="/Images/twitter.png" alt="Twitter" width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-[260px] bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.05] transition duration-300 cursor-pointer">
              <div className="w-full h-[320px] relative">
                <Image
                  src="/Images/team1.jpg"
                  alt="Team Member 3"
                  className="object-cover object-center w-full h-full rounded-t-lg"
                  fill
                />
              </div>
              <div className="p-5 text-center h-[160px] flex flex-col justify-between">
                <div>
                  <h5 className="text-lg font-bold text-[#252B42]">Ali Zafar</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">UI/UX Designer</h6>
                </div>
                <div className="flex justify-center gap-4 mt-3">
                  <Image src="/Images/facebook.png" alt="Facebook" width={20} height={20} />
                  <Image src="/Images/instagram.png" alt="Instagram" width={20} height={20} />
                  <Image src="/Images/twitter.png" alt="Twitter" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] mt-12 mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.312216515153!2d67.03467147610321!3d24.921431677889593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f99a8e07b27%3A0x5ae52d4e4349c1f1!2zTm9ydGggSGVhdmVu25Qg2YbYp9ix2KraviDbgduM2YjZhiBIYXNzYW4ncyBIb21l!5e0!3m2!1sen!2s!4v1754995022841!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
