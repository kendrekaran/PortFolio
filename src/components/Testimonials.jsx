import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John Doe', text: 'Karan is a highly skilled developer and a great team player.' },
  { name: 'Jane Smith', text: 'Creative, efficient, and detail-oriented — highly recommend!' },
];

const Testimonials = () => (
  <section id="testimonials" className="h-screen p-10 flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold text-neonPink mb-10">Testimonials</h2>
    <div className="flex gap-10">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-5 rounded-lg max-w-sm"
        >
          <p className="text-white">{testimonial.text}</p>
          <p className="text-neonBlue mt-4">- {testimonial.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
