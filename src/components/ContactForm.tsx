import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form className="mx-auto max-w-xl space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>

        <Input id="name" type="text" placeholder="Full name" required />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="Your email address"
          required
        />
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>

        <Input
          id="subject"
          type="text"
          placeholder="Contact subject"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="message">Message</Label>

        <Textarea id="message" rows={5} placeholder="Your message" required />
      </div>

      <div>
        <Button className="bg-primary-divine" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
