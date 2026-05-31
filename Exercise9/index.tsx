import { useState } from "react";

/* 1. Email Form */

type EmailFormProps = {
  onSubmit: (email: string) => void;
};

function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Email Form</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

/* 2. Age Form */

type AgeFormProps = {
  onSubmit: (age: number) => void;
};

function AgeForm({ onSubmit }: AgeFormProps) {
  const [age, setAge] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age < 18) {
      alert("You must be at least 18 years old.");
      return;
    }

    onSubmit(age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Age Form</h2>

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Enter age"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

/* 3. Contact Form */

type ContactData = {
  name: string;
  email: string;
};

type ContactFormProps = {
  onSubmit: (data: ContactData) => void;
};

function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email: e.target.value,
          })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}

/* App */

export default function App() {
  return (
    <div>
      <EmailForm
        onSubmit={(email) => console.log("Email:", email)}
      />

      <hr />

      <AgeForm
        onSubmit={(age) => console.log("Age:", age)}
      />

      <hr />

      <ContactForm
        onSubmit={(data) => console.log("Contact:", data)}
      />
    </div>
  );
}