import { useState } from "react";
function EmailForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email);
    };
    return (<form onSubmit={handleSubmit}>
      <h2>Email Form</h2>

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>

      <button type="submit">Submit</button>
    </form>);
}
function AgeForm({ onSubmit }) {
    const [age, setAge] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (age < 18) {
            alert("You must be at least 18 years old.");
            return;
        }
        onSubmit(age);
    };
    return (<form onSubmit={handleSubmit}>
      <h2>Age Form</h2>

      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} placeholder="Enter age"/>

      <button type="submit">Submit</button>
    </form>);
}
function ContactForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (<form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({
            ...formData,
            name: e.target.value,
        })}/>

      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({
            ...formData,
            email: e.target.value,
        })}/>

      <button type="submit">Submit</button>
    </form>);
}
/* App */
export default function App() {
    return (<div>
      <EmailForm onSubmit={(email) => console.log("Email:", email)}/>

      <hr />

      <AgeForm onSubmit={(age) => console.log("Age:", age)}/>

      <hr />

      <ContactForm onSubmit={(data) => console.log("Contact:", data)}/>
    </div>);
}
