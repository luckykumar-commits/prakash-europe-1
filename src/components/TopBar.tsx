import { Phone, Mail, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export function TopBar() {
  return (
    <div className="bg-charcoal text-white text-[11px] px-4 md:px-10 py-2 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
      <div className="flex items-center gap-4 md:gap-6">
        <motion.a
          href="tel:+919311672302"
          className="flex items-center gap-1.5 hover:text-primary"
          whileHover={{ y: -1 }}
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sales: </span>+91 9311672302
        </motion.a>
        <motion.a
          href="mailto:export@prakashlabels.com"
          className="flex items-center gap-1.5 hover:text-primary"
          whileHover={{ y: -1 }}
        >
          <Mail className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Support: </span>export@prakashlabels.com
        </motion.a>
        <motion.a
          href="https://wa.me/919311672302"
          className="flex items-center gap-1.5 text-primary hover:text-white"
          whileHover={{ y: -1, scale: 1.03 }}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          WhatsApp
        </motion.a>
      </div>
      <div className="flex items-center gap-6 opacity-80">
        <motion.div className="flex items-center gap-1.5" whileHover={{ opacity: 1, scale: 1.03 }}>
          <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001:2015
        </motion.div>
        <motion.div className="flex items-center gap-1.5" whileHover={{ opacity: 1, scale: 1.03 }}>
          <Truck className="w-3.5 h-3.5" /> EU DDP Delivery
        </motion.div>
      </div>
    </div>
  );
}
