import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm() {
  const [submitted, setSubmitted] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const submitHandler = () => {
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Textarea
          placeholder="Feedback"
          value={form.feedback}
          onChange={(e) => setForm({ ...form, feedback: e.target.value })}
        />

        <Button onClick={submitHandler}>Submit</Button>

        {submitted && (
          <div className="text-sm mt-4">
            <p>
              <b>Name:</b> {submitted.name}
            </p>
            <p>
              <b>Email:</b> {submitted.email}
            </p>
            <p>
              <b>Feedback:</b> {submitted.feedback}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
