
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in new opportunities, collaborations, and 
                  discussing the latest developments in AI. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-purple-400 mr-4" />
                  <span className="text-muted-foreground">[your.email@example.com]</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-4" />
                  <span className="text-muted-foreground">[+1 (555) 123-4567]</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                  <span className="text-muted-foreground">[Your City, Country]</span>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-card rounded-lg border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 glow-effect"
                  >
                    <Github className="w-6 h-6 text-purple-400" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-card rounded-lg border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 glow-effect"
                  >
                    <Linkedin className="w-6 h-6 text-purple-400" />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-card rounded-lg border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 glow-effect"
                  >
                    <Twitter className="w-6 h-6 text-purple-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="gradient-border">
              <div className="bg-card p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/40 transition-colors duration-300 resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-border"
                  >
                    <div className="bg-background px-6 py-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center glow-effect">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
